import { useCallback, useEffect, useRef } from "react";
import { FAQ, Features, Footer, Hero, HowItWorks } from "../components/landing";
import { LANDING_SCROLL_ORDER } from "../components/landing/sectionIds";

const SCROLL_DURATION_MS = 700;

function easeInOutCubic(progress: number): number {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export default function LandingPage() {
  const animationRef = useRef<number | null>(null);

  const stopCurrentScroll = useCallback(() => {
    if (animationRef.current !== null) {
      window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string, shouldPushState = true) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    stopCurrentScroll();

    const startY = window.scrollY;
    const targetY = window.scrollY + target.getBoundingClientRect().top;
    const distance = targetY - startY;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = window.requestAnimationFrame(animate);

    const nextUrl = `${window.location.pathname}#${sectionId}`;
    if (shouldPushState) {
      window.history.pushState(null, "", nextUrl);
    } else {
      window.history.replaceState(null, "", nextUrl);
    }
  }, [stopCurrentScroll]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[data-scroll-link="true"]') as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href")?.split("#")[1];
      if (!hash) {
        return;
      }

      event.preventDefault();
      scrollToSection(hash);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      stopCurrentScroll();
    };
  }, [scrollToSection, stopCurrentScroll]);

  useEffect(() => {
    const initialHash = window.location.hash.replace("#", "");
    if (initialHash && LANDING_SCROLL_ORDER.includes(initialHash as (typeof LANDING_SCROLL_ORDER)[number])) {
      const timer = window.setTimeout(() => {
        scrollToSection(initialHash, false);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [scrollToSection]);

  return (
    <main className="landing-page bg-gray-50 text-left">
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
