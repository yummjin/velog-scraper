"use client";

import { CodeBlock, Parameters, CodeSamples, StatusCodes } from "@/components";
import { postAllData } from "@/assets/data/post-all";

export default function PostAllPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
        {postAllData.title}
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        {postAllData.description}
      </p>

      <CodeBlock
        code={postAllData.endpoint}
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">
          /api/v1/post-all
        </span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters parameters={postAllData.parameters} />

        <CodeSamples
          samples={postAllData.codeSamples(baseUrl)}
          defaultTab="curl"
        />

        <StatusCodes statusCodes={postAllData.statusCodes} />

        <CodeSamples
          title="Response schema"
          samples={postAllData.responseSchema}
          defaultTab="json"
        />

        <CodeSamples
          title="Example response"
          samples={postAllData.exampleResponse}
          defaultTab="json"
        />
      </section>
    </div>
  );
}
