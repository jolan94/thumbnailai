import { SignInForm } from "@/components/auth/SignInForm";
import { Metadata } from "next";
import styles from "./auth.module.css";

export const metadata: Metadata = {
  title: "Sign In - AI Thumbnail Generator",
  description: "Sign in to your AI Thumbnail Generator account",
};

export default function AuthPage() {
  return (
    <main className={styles.authPage}>
      <div className={styles.authBackground} />
      <div className={styles.authContent}>
        <div className={styles.authLogo}>
          <span className={styles.logoIcon}>🎨</span>
          <span className={styles.logoText}>Thumbly</span>
        </div>
        <SignInForm />
      </div>
    </main>
  );
}
