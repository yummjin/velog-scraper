import { ReactNode } from "react";

export interface PageData {
  title: string;
  description: string;
  endpoint: string;
  parameters: {
    name: string;
    type: string;
    description: ReactNode;
  }[];
  codeSamples: (baseUrl: string) => {
    value: string;
    label: string;
    code: string;
    content: ReactNode;
  }[];
  statusCodes: {
    code: number | string;
    description: string;
  }[];
  responseSchema: {
    value: string;
    label: string;
    code: string;
    content: ReactNode;
  }[];
  exampleResponse: {
    value: string;
    label: string;
    code: string;
    content: ReactNode;
  }[];
}

export const pageData: PageData = {
  title: "단일 페이지 스크래핑",
  description: "단일 Velog 게시글을 스크래핑합니다.",
  endpoint: "GET /api/v1/page",
  parameters: [
    {
      name: "url",
      type: "string",
      description: (
        <>
          <strong>Required.</strong> 스크래핑할 Velog 게시글의 URL
        </>
      ),
    },
  ],
  codeSamples: (baseUrl: string) => [
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
  ],
  statusCodes: [
    {
      code: 200,
      description: "OK",
    },
    {
      code: 400,
      description: "URL parameter is required",
    },
    {
      code: 500,
      description: "Internal server error",
    },
  ],
  responseSchema: [
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
  ],
  exampleResponse: [
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
  ],
};
