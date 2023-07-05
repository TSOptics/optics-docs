import React from "react";
import styles from "./HomePageExample.module.css";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

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
  const { isDarkTheme } = useColorMode();

  return (
    <div className={clsx([styles.container, even && styles.even])}>
      <h1 className={styles.title}>{title}</h1>
      <div className={clsx([styles.row, even && styles.evenRow])}>
        <p className={styles.description}>{description}</p>
        <img
          className={styles.snippet}
          src={useBaseUrl(
            `snippets/${snippetName}-${isDarkTheme ? "dark" : "light"}.png`
          )}
          style={{ width: snippetName === "graph" ? "35%" : "45%" }}
        />
      </div>
    </div>
  );
};

export default HomePageExample;
