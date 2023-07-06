import React from "react";
import styles from "./HomePageExample.module.css";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

interface HomePageExampleProps {
  title: string;
  description: React.JSX.Element;
  snippetName: string;
  even?: boolean;
}

const HomePageExample = ({
  title,
  description,
  snippetName,
  even,
}: HomePageExampleProps) => {
  return (
    <div className={clsx([styles.container, even && styles.even])}>
      <h1 className={styles.title}>{title}</h1>
      <div className={even ? styles.evenRow : styles.odd}>
        <p className={styles.description}>{description}</p>
        <ThemedImage
          className={styles.snippet}
          sources={{
            dark: useBaseUrl(`snippets/${snippetName}-dark.png`),
            light: useBaseUrl(`snippets/${snippetName}-light.png`),
          }}
        />
      </div>
    </div>
  );
};

export default HomePageExample;
