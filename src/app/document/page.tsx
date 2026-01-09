"use client";

import CodeBlock from "../../components/CodeBlock";
import Parameters from "../../components/Parameters";
import CodeSamples from "../../components/CodeSamples";

export default function DocumentPage() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
        단일 페이지 스크래핑
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        단일 Velog 게시글을 스크래핑합니다.
      </p>

      <CodeBlock
        code="GET /api/v1/page"
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">/api/v1/page</span>
      </CodeBlock>

      <section className="mb-16">
        <Parameters
          parameters={[
            {
              name: "url",
              type: "string",
              description: (
                <>
                  <strong>Required.</strong> 스크래핑할 Velog 게시글의 URL
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
  "${baseUrl}/api/v1/page?url=https://velog.io/@username/post-title"`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/page?url=https://velog.io/@username/post-title"`}</code>
                </pre>
              ),
            },
            {
              value: "javascript",
              label: "JavaScript",
              code: `const response = await fetch(
  \`${baseUrl}/api/v1/page?url=\${encodeURIComponent('https://velog.io/@username/post-title')}\`,
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
  \`${baseUrl}/api/v1/page?url=\${encodeURIComponent('https://velog.io/@username/post-title')}\`,
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
                  URL parameter is required
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
  "title": string,
  "body": string,
  "image": string,
  "date": string,
  "href": string
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`{
  "title": string,
  "body": string,
  "image": string,
  "date": string,
  "href": string
}`}</code>
                </pre>
              ),
            },
            {
              value: "typescript",
              label: "TypeScript",
              code: `type Post = {
  title: string;
  body: string;
  image: string;
  date: string;
  href: string;
};`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`type Post = {
  title: string;
  body: string;
  image: string;
  date: string;
  href: string;
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
  "title": "게시글 제목",
  "body": "<p>게시글 내용...</p>",
  "image": "https://velog.io/image-url.jpg",
  "date": "2024-01-01",
  "href": "https://velog.io/@username/post-title"
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`Status: 200

{
  "title": "게시글 제목",
  "body": "<p>게시글 내용...</p>",
  "image": "https://velog.io/image-url.jpg",
  "date": "2024-01-01",
  "href": "https://velog.io/@username/post-title"
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
  "title": "React Hooks 완벽 가이드",
  "body": "<h1>React Hooks란?</h1><p>React Hooks는 함수형 컴포넌트에서...</p>",
  "image": "https://velog.velcdn.com/images/user/post/image.jpg",
  "date": "2024년 1월 1일",
  "href": "https://velog.io/@developer/react-hooks-guide"
}`,
              content: (
                <pre className="text-zinc-100 text-sm font-mono">
                  <code>{`Status: 200
Content-Type: application/json

{
  "title": "React Hooks 완벽 가이드",
  "body": "<h1>React Hooks란?</h1><p>React Hooks는 함수형 컴포넌트에서...</p>",
  "image": "https://velog.velcdn.com/images/user/post/image.jpg",
  "date": "2024년 1월 1일",
  "href": "https://velog.io/@developer/react-hooks-guide"
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
