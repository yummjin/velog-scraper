"use client";

import { CodeBlock, Parameters, CodeSamples, StatusCodes } from "@/components";
import { tagsPostData } from "@/assets/data/tags-post";

export default function TagsPostPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
        {tagsPostData.title}
      </h1>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        {tagsPostData.description}
      </p>

      <CodeBlock
        code={tagsPostData.endpoint}
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">
          /api/v1/tags-post
        </span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters parameters={tagsPostData.parameters} />

        <CodeSamples
          samples={tagsPostData.codeSamples(baseUrl)}
          defaultTab="curl"
        />

        <StatusCodes statusCodes={tagsPostData.statusCodes} />

        <CodeSamples
          title="Response schema"
          samples={tagsPostData.responseSchema}
          defaultTab="json"
        />

        <CodeSamples
          title="Example response"
          samples={tagsPostData.exampleResponse}
          defaultTab="json"
        />
      </section>
    </div>
  );
}
