"use client";

import { CodeBlock, Parameters, CodeSamples, StatusCodes } from "@/components";
import { seriesData } from "@/assets/data/series";

export default function SeriesPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
        {seriesData.title}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        {seriesData.description}
      </p>

      <CodeBlock
        code={seriesData.endpoint}
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">/api/v1/series</span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters parameters={seriesData.parameters} />

        <CodeSamples
          samples={seriesData.codeSamples(baseUrl)}
          defaultTab="curl"
        />

        <StatusCodes statusCodes={seriesData.statusCodes} />

        <CodeSamples
          title="Response schema"
          samples={seriesData.responseSchema}
          defaultTab="json"
        />

        <CodeSamples
          title="Example response"
          samples={seriesData.exampleResponse}
          defaultTab="json"
        />
      </section>
    </div>
  );
}
