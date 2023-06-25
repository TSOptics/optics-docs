import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageHeader from "../components/HomePageHeader";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Optics`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main></main>
    </Layout>
  );
}
