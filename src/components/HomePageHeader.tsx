import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomePageHeader.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

export default function HomePageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <ThemedImage
        sources={{
          dark: useBaseUrl("img/optics-dark.svg"),
          light: useBaseUrl("img/optics-light.svg"),
        }}
        className={styles.logo}
        width={120}
        height={120}
      />
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className={clsx(["hero__subtitle", styles.subtitle])}>
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
