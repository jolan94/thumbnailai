"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import styles from "./SignInForm.module.css";

export function SignInForm() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      await signIn("password", formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authFormContainer}>
      <h2 className={styles.authTitle}>
        {step === "signIn" ? "Welcome Back" : "Create Account"}
      </h2>
      <p className={styles.authSubtitle}>
        {step === "signIn"
          ? "Sign in to your account"
          : "Sign up to get started"}
      </p>

      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            minLength={8}
            autoComplete={step === "signIn" ? "current-password" : "new-password"}
          />
        </div>

        <input name="flow" type="hidden" value={step} />

        {error && <div className={styles.authError}>{error}</div>}

        <button type="submit" className={styles.authSubmit} disabled={isLoading}>
          {isLoading ? "Loading..." : step === "signIn" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <div className={styles.authSwitch}>
        <span>
          {step === "signIn" ? "Don't have an account?" : "Already have an account?"}
        </span>
        <button
          type="button"
          className={styles.switchButton}
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
            setError(null);
          }}
        >
          {step === "signIn" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
}
