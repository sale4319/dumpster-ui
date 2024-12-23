import React from "react";

import styles from "./DefaultButton.module.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export function DefaultButton({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary
    ? styles.storybookButtonPrimary
    : styles.storybookButtonSecondary;

  return (
    <button
      type="button"
      className={[styles.storybookButton, styles[`${size}`], mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
