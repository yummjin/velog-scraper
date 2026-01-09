"use client";

import { useState } from "react";
import TabNavigation from "./TabNavigation";
import CodeBlock from "./CodeBlock";

interface CodeSample {
  value: string;
  label: string;
  code: string;
  content: React.ReactNode;
}

interface CodeSamplesProps {
  title?: string;
  samples: CodeSample[];
  defaultTab?: string;
}

export default function CodeSamples({
  title = "Code samples",
  samples,
  defaultTab,
}: CodeSamplesProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || samples[0]?.value || ""
  );

  const activeSample = samples.find((sample) => sample.value === activeTab);

  return (
    <>
      <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
        {title}
      </h3>
      <div className="mb-6">
        <TabNavigation
          tabs={samples.map((sample) => ({
            value: sample.value,
            label: sample.label,
          }))}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {activeSample && (
          <CodeBlock code={activeSample.code} variant="dark">
            {activeSample.content}
          </CodeBlock>
        )}
      </div>
    </>
  );
}

