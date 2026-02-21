import { useState } from "react";
import type { FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <form className="flex w-full flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none ring-0 transition focus:border-sky-500"
        required
      />
      <button
        type="submit"
        className="h-11 whitespace-nowrap rounded-xl bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700"
      >
        Join updates
      </button>
    </form>
  );
}
