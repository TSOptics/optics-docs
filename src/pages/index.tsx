import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageHeader from "../components/HomePageHeader";
import HomePageExample from "../components/HomePageExample";

const features = [
  {
    title: "Focus anywhere in your state",
    description: (
      <>
        <b>Read, update and subscribe</b> anywhere in the global state with
        optics.
        <br />
        <br />
        With properties or methods, <b>decompose</b> your state as suits you
        with full type-safety and code completion.
        <br />
        <br />
        With optics, focusing on <b>deeply nested</b> values makes updating them
        effortless.
      </>
    ),
    snippet: "focus",
  },
  {
    title: "Decouple components from global state",
    description: (
      <>
        Declare optics in the component's props to{" "}
        <b>explicit its dependencies</b> to external state.
        <br />
        <br />
        The component describes <b>what</b> it needs from the global state, it
        doesn't care about the how or the where.
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
        <br />
        No more plain ids and manual denormalization, optics act like{" "}
        <b>references to other entities</b> in your state.
        <br />
        Lets you represent your state as a <b>graph</b> that is dynamic,
        type-safe and reactive.
        <br />
        <br />
        Anywhere you focus in the graph get the value automatically{" "}
        <b>denormalized</b> for you.
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
