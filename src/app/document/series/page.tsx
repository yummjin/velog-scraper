"use client";

import { useState } from "react";
import CodeBlock from "../../../components/CodeBlock";

export default function SeriesPage() {
  const [seriesCodeTab, setSeriesCodeTab] = useState<"curl" | "javascript">(
    "curl"
  );
  const [seriesSchemaTab, setSeriesSchemaTab] = useState<"json" | "typescript">(
    "json"
  );
  const [seriesExampleTab, setSeriesExampleTab] = useState<"json" | "example">(
    "json"
  );
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="max-w-5xl mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-black dark:text-zinc-50 mb-8">
        시리즈 스크래핑
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Velog 시리즈의 모든 게시글을 스크래핑합니다.
      </p>

      <CodeBlock
        code="GET /api/v1/series"
        variant="light"
        className="mb-6 font-mono text-sm"
      >
        <span className="text-blue-600 dark:text-blue-400">GET</span>{" "}
        <span className="text-zinc-700 dark:text-zinc-300">/api/v1/series</span>
      </CodeBlock>

      <section className="mb-16">
        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4 mt-8">
          Parameters
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-zinc-300 dark:border-zinc-700">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-800">
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-50">
                  Name
                </th>
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-50">
                  Type
                </th>
                <th className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold text-black dark:text-zinc-50">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-mono text-sm text-zinc-700 dark:text-zinc-300">
                  userId
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-700 dark:text-zinc-300">
                  string
                </td>
                <td className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-700 dark:text-zinc-300">
                  <strong>Required.</strong> 스크래핑할 Velog 사용자 ID
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
          Code samples
        </h3>
        <div className="mb-6">
          <div className="flex gap-2 mb-2 border-b border-zinc-300 dark:border-zinc-700">
            <button
              onClick={() => setSeriesCodeTab("curl")}
              className={`px-4 py-2 font-medium ${
                seriesCodeTab === "curl"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              cURL
            </button>
            <button
              onClick={() => setSeriesCodeTab("javascript")}
              className={`px-4 py-2 font-medium ${
                seriesCodeTab === "javascript"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              JavaScript
            </button>
          </div>
          <CodeBlock
            code={
              seriesCodeTab === "curl"
                ? `curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/series?userId=username"`
                : `const response = await fetch(
  \`${baseUrl}/api/v1/series?userId=username\`,
  {
    headers: {
      'Accept': 'application/json',
    },
  }
);

const data = await response.json();`
            }
            variant="dark"
          >
            {seriesCodeTab === "curl" ? (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/series?userId=username"`}</code>
              </pre>
            ) : (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`const response = await fetch(
  \`${baseUrl}/api/v1/series?userId=username\`,
  {
    headers: {
      'Accept': 'application/json',
    },
  }
);

const data = await response.json();`}</code>
              </pre>
            )}
          </CodeBlock>
        </div>

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

        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
          Response schema
        </h3>
        <div className="mb-6">
          <div className="flex gap-2 mb-2 border-b border-zinc-300 dark:border-zinc-700">
            <button
              onClick={() => setSeriesSchemaTab("json")}
              className={`px-4 py-2 font-medium ${
                seriesSchemaTab === "json"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              JSON Schema
            </button>
            <button
              onClick={() => setSeriesSchemaTab("typescript")}
              className={`px-4 py-2 font-medium ${
                seriesSchemaTab === "typescript"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              TypeScript
            </button>
          </div>
          <CodeBlock
            code={
              seriesSchemaTab === "json"
                ? `{
  "title": string,
  "contents": [
    {
      "title": string,
      "body": string,
      "image": string,
      "date": string,
      "href": string
    }
  ]
}`
                : `type Post = {
  title: string;
  body: string;
  image: string;
  date: string;
  href: string;
};

type Series = {
  title: string;
  contents: Post[];
};`
            }
            variant="dark"
          >
            {seriesSchemaTab === "json" ? (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`{
  "title": string,
  "contents": [
    {
      "title": string,
      "body": string,
      "image": string,
      "date": string,
      "href": string
    }
  ]
}`}</code>
              </pre>
            ) : (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`type Post = {
  title: string;
  body: string;
  image: string;
  date: string;
  href: string;
};

type Series = {
  title: string;
  contents: Post[];
};`}</code>
              </pre>
            )}
          </CodeBlock>
        </div>

        <h3 className="text-xl font-semibold text-black dark:text-zinc-50 mb-4">
          Example response
        </h3>
        <div>
          <div className="flex gap-2 mb-2 border-b border-zinc-300 dark:border-zinc-700">
            <button
              onClick={() => setSeriesExampleTab("json")}
              className={`px-4 py-2 font-medium ${
                seriesExampleTab === "json"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              JSON
            </button>
            <button
              onClick={() => setSeriesExampleTab("example")}
              className={`px-4 py-2 font-medium ${
                seriesExampleTab === "example"
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              Example
            </button>
          </div>
          <CodeBlock
            code={
              seriesExampleTab === "json"
                ? `Status: 200

{
  "title": "시리즈 제목",
  "contents": [
    {
      "title": "게시글 제목 1",
      "body": "<p>게시글 내용...</p>",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024-01-01",
      "href": "https://velog.io/@username/post-title-1"
    },
    {
      "title": "게시글 제목 2",
      "body": "<p>게시글 내용...</p>",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024-01-02",
      "href": "https://velog.io/@username/post-title-2"
    }
  ]
}`
                : `Status: 200
Content-Type: application/json

{
  "title": "React 완전 정복 시리즈",
  "contents": [
    {
      "title": "React 기초부터 시작하기",
      "body": "<h2>React란?</h2><p>React는 사용자 인터페이스를 구축하기 위한...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image1.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@developer/react-basics"
    },
    {
      "title": "React Hooks 심화 학습",
      "body": "<h2>useState와 useEffect</h2><p>React Hooks를 활용하여...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 2일",
      "href": "https://velog.io/@developer/react-hooks-advanced"
    },
    {
      "title": "React Context API 활용법",
      "body": "<h2>Context로 상태 관리하기</h2><p>전역 상태를 효율적으로...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 3일",
      "href": "https://velog.io/@developer/react-context"
    }
  ]
}`
            }
            variant="dark"
          >
            {seriesExampleTab === "json" ? (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`Status: 200

{
  "title": "시리즈 제목",
  "contents": [
    {
      "title": "게시글 제목 1",
      "body": "<p>게시글 내용...</p>",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024-01-01",
      "href": "https://velog.io/@username/post-title-1"
    },
    {
      "title": "게시글 제목 2",
      "body": "<p>게시글 내용...</p>",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024-01-02",
      "href": "https://velog.io/@username/post-title-2"
    }
  ]
}`}</code>
              </pre>
            ) : (
              <pre className="text-zinc-100 text-sm font-mono">
                <code>{`Status: 200
Content-Type: application/json

{
  "title": "React 완전 정복 시리즈",
  "contents": [
    {
      "title": "React 기초부터 시작하기",
      "body": "<h2>React란?</h2><p>React는 사용자 인터페이스를 구축하기 위한...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image1.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@developer/react-basics"
    },
    {
      "title": "React Hooks 심화 학습",
      "body": "<h2>useState와 useEffect</h2><p>React Hooks를 활용하여...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 2일",
      "href": "https://velog.io/@developer/react-hooks-advanced"
    },
    {
      "title": "React Context API 활용법",
      "body": "<h2>Context로 상태 관리하기</h2><p>전역 상태를 효율적으로...</p> ...",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 3일",
      "href": "https://velog.io/@developer/react-context"
    }
  ]
}`}</code>
              </pre>
            )}
          </CodeBlock>
        </div>
      </section>
    </div>
  );
}
