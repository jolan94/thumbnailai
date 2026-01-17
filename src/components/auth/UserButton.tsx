"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton as ClerkUserButton,
} from "@clerk/nextjs";
import styles from "./UserButton.module.css";

export function UserButton() {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <button className={styles.signInLink}>Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <ClerkUserButton />
      </SignedIn>
    </>
  );
}
