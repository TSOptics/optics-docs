import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomePageHeader.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

export default function HomePageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();

  return (
    <header className={styles.heroBanner}>
      <img
        className={styles.logo}
        src={useBaseUrl(
          isDarkTheme ? "/img/optics-dark.svg" : "/img/optics-light.svg"
        )}
        width={120}
        height={120}
      />
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">
        Scalable state management for TypeScript applications
      </p>
      <div className={styles.buttons}>
        <Link
          className={clsx("button button--lg", styles.cta)}
          to="/docs/Introduction/getting-started"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
