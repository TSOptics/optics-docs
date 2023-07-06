import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageHeader from "../components/HomePageHeader";
import HomePageExample from "../components/HomePageExample";

const features = [
  {
    title: "Focus anywhere in the state",
    description: (
      <>
        <b>Read, update and subscribe</b> anywhere in your state with optics.
        <br />
        <br />
        With properties or methods, <b>decompose</b> your state as suits you
        with full type-safety and code completion.
        <br />
        <br />
        Optics make updating <b>deeply nested</b> values effortless.
      </>
    ),
    snippet: "focus",
  },
  {
    title: "Decouple components from global state",
    description: (
      <>
        Props are the public interface of the component, put its dependencies to
        global state here as well !
        <br />
        <br />
        The component declares <b>what</b> it needs, and doesn't care about{" "}
        <b>how</b> to get to it.
        <br />
        <br />
        Components <b>decoupled</b> from external state stay <b>composable</b>{" "}
        and <b>testable</b>, the way they're meant to be.
      </>
    ),
    snippet: "decouple",
  },
  {
    title: "Compose state graphs",
    description: (
      <>
        Use optics to express <b>relations</b> between entities.
        <br />
        Represent your state as a <b>graph</b> that is dynamic, type-safe and
        reactive.
        <br />
        <br />
        Anywhere you focus in the graph you can read and subscribe to an{" "}
        automatically <b>denormalized</b> representation.
      </>
    ),
    snippet: "graph",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Optics`}
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main>
        {features.map(({ description, snippet, title }, index) => (
          <HomePageExample
            description={description}
            snippetName={snippet}
            title={title}
            even={index % 2 === 0}
          />
        ))}
      </main>
    </Layout>
  );
}
