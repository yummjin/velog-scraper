"use client";

import { CodeBlock, Parameters, CodeSamples, StatusCodes } from "@/components";
import { pageData } from "@/assets/data/page";

export default function DocumentPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="mx-auto max-w-5xl px-8 py-8">
      <h1 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
        {pageData.title}
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        {pageData.description}
      </p>

      <CodeBlock
        code={pageData.endpoint}
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">/api/v1/page</span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters parameters={pageData.parameters} />

        <CodeSamples
          samples={pageData.codeSamples(baseUrl)}
          defaultTab="curl"
        />

        <StatusCodes statusCodes={pageData.statusCodes} />

        <CodeSamples
          title="Response schema"
          samples={pageData.responseSchema}
          defaultTab="json"
        />

        <CodeSamples
          title="Example response"
          samples={pageData.exampleResponse}
          defaultTab="json"
        />
      </section>
    </div>
  );
}
