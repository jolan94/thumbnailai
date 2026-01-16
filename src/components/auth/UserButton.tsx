"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import styles from "./UserButton.module.css";

export function UserButton() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return (
      <div className={styles.userButtonSkeleton}>
        <div className={styles.skeletonAvatar} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <a href="/auth" className={styles.signInLink}>
        Sign In
      </a>
    );
  }

  return (
    <div className={styles.userButton}>
      <div className={styles.userAvatar}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <button onClick={() => signOut()} className={styles.signOutBtn}>
        Sign Out
      </button>
    </div>
  );
}
