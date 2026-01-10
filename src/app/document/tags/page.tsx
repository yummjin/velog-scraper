"use client";

import CodeBlock from "../../../components/CodeBlock";
import Parameters from "../../../components/Parameters";
import CodeSamples from "../../../components/CodeSamples";

export default function TagPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
        태그 스크래핑
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Velog 사용자의 태그 목록을 스크래핑합니다.
      </p>

      <CodeBlock
        code="GET /api/v1/tags"
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">/api/v1/tags</span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters
          parameters={[
            {
              name: "userId",
              type: "string",
              description: (
                <>
                  <strong>Required.</strong> 스크래핑할 Velog 사용자 ID
                </>
              ),
            },
          ]}
        />

        <CodeSamples
          samples={[
            {
              value: "curl",
              label: "cURL",
              code: `curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/tags?userId=username"`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/tags?userId=username"`}</code>
                </pre>
              ),
            },
            {
              value: "javascript",
              label: "JavaScript",
              code: `const response = await fetch(
  \`${baseUrl}/api/v1/tags?userId=username\`,
  {
    headers: {
      'Accept': 'application/json',
    },
  }
);

const data = await response.json();`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`const response = await fetch(
  \`${baseUrl}/api/v1/tags?userId=username\`,
  {
    headers: {
      'Accept': 'application/json',
    },
  }
);

const data = await response.json();`}</code>
                </pre>
              ),
            },
          ]}
          defaultTab="curl"
        />

        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
          HTTP response status codes
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-zinc-300 dark:border-zinc-700">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-50">
                  Status code
                </th>
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-50">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  200
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-700 dark:text-zinc-300">
                  OK
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  400
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-700 dark:text-zinc-300">
                  userId parameter is required
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  500
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-700 dark:text-zinc-300">
                  Internal server error
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeSamples
          title="Response schema"
          samples={[
            {
              value: "json",
              label: "JSON Schema",
              code: `{
  "tags": [
    {
      "id": string,
      "name": string,
      "posts_count": number
    }
  ]
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`{
  "tags": [
    {
      "id": string,
      "name": string,
      "posts_count": number
    }
  ]
}`}</code>
                </pre>
              ),
            },
            {
              value: "typescript",
              label: "TypeScript",
              code: `type Tag = {
  id: string;
  name: string;
  posts_count: number;
};

type TagResponse = {
  tags: Tag[];
};`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`type Tag = {
  id: string;
  name: string;
  posts_count: number;
};

type TagResponse = {
  tags: Tag[];
};`}</code>
                </pre>
              ),
            },
          ]}
          defaultTab="json"
        />

        <CodeSamples
          title="Example response"
          samples={[
            {
              value: "json",
              label: "JSON",
              code: `Status: 200

{
  "tags": [
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:94f09f70-ca97-11e8-87f7-a913bf56a234",
      "name": "frontend",
      "posts_count": 18
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:8d1a0a60-c61f-11e8-b3a6-c16d8d6c5f3d",
      "name": "JavaScript",
      "posts_count": 11
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:6932a610-b351-11e8-9696-f1fffe8a36f1",
      "name": "React",
      "posts_count": 4
    }
  ]
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`Status: 200

{
  "tags": [
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:94f09f70-ca97-11e8-87f7-a913bf56a234",
      "name": "frontend",
      "posts_count": 18
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:8d1a0a60-c61f-11e8-b3a6-c16d8d6c5f3d",
      "name": "JavaScript",
      "posts_count": 11
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:6932a610-b351-11e8-9696-f1fffe8a36f1",
      "name": "React",
      "posts_count": 4
    }
  ]
}`}</code>
                </pre>
              ),
            },
            {
              value: "example",
              label: "Example",
              code: `Status: 200
Content-Type: application/json

{
  "tags": [
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:94f09f70-ca97-11e8-87f7-a913bf56a234",
      "name": "frontend",
      "posts_count": 18
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:8d1a0a60-c61f-11e8-b3a6-c16d8d6c5f3d",
      "name": "JavaScript",
      "posts_count": 11
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:6932a610-b351-11e8-9696-f1fffe8a36f1",
      "name": "React",
      "posts_count": 4
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:f7ded270-d779-11e8-8443-f9c08cacf6d1",
      "name": "next.js",
      "posts_count": 3
    }
  ]
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`Status: 200
Content-Type: application/json

{
  "tags": [
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:94f09f70-ca97-11e8-87f7-a913bf56a234",
      "name": "frontend",
      "posts_count": 18
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:8d1a0a60-c61f-11e8-b3a6-c16d8d6c5f3d",
      "name": "JavaScript",
      "posts_count": 11
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:6932a610-b351-11e8-9696-f1fffe8a36f1",
      "name": "React",
      "posts_count": 4
    },
    {
      "id": "11aae9fb-af22-4695-9caa-9e6941f0dad3:f7ded270-d779-11e8-8443-f9c08cacf6d1",
      "name": "next.js",
      "posts_count": 3
    }
  ]
}`}</code>
                </pre>
              ),
            },
          ]}
          defaultTab="json"
        />
      </section>
    </div>
  );
}

