import { ReactNode } from "react";

export interface PostAllData {
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

export const postAllData: PostAllData = {
  title: "전체 게시글 스크래핑",
  description:
    "Velog 사용자의 모든 게시글 목록을 스크래핑합니다.",
  endpoint: "GET /api/v1/post-all",
  parameters: [
    {
      name: "userId",
      type: "string",
      description: (
        <>
          <strong>Required.</strong> 스크래핑할 Velog 사용자 ID
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
  "${baseUrl}/api/v1/post-all?userId=username"`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/post-all?userId=username"`}</code>
        </pre>
      ),
    },
    {
      value: "javascript",
      label: "JavaScript",
      code: `const response = await fetch(
  \`${baseUrl}/api/v1/post-all?userId=username\`,
  {
    headers: {
      'Accept': 'application/json',
    },
  }
);

const data = await response.json();`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`const response = await fetch(
  \`${baseUrl}/api/v1/post-all?userId=username\`,
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
      description: "userId parameter is required",
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
  "contents": [
    {
      "title": string,
      "body": string,
      "image": string,
      "date": string,
      "href": string
    }
  ]
}`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`{
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
};

type PostAllResponse = {
  contents: Post[];
};`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`type Post = {
  title: string;
  body: string;
  image: string;
  date: string;
  href: string;
};

type PostAllResponse = {
  contents: Post[];
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
  "contents": [
    {
      "title": "React Hooks 완벽 가이드",
      "body": "React Hooks에 대한 자세한 설명...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@username/react-hooks-guide"
    },
    {
      "title": "TypeScript 기초",
      "body": "TypeScript의 기본 문법과 사용법...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@username/typescript-basics"
    }
  ]
}`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`Status: 200

{
  "contents": [
    {
      "title": "React Hooks 완벽 가이드",
      "body": "React Hooks에 대한 자세한 설명...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@username/react-hooks-guide"
    },
    {
      "title": "TypeScript 기초",
      "body": "TypeScript의 기본 문법과 사용법...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@username/typescript-basics"
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
  "contents": [
    {
      "title": "React Hooks 완벽 가이드",
      "body": "React Hooks에 대한 자세한 설명과 활용 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image1.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@developer/react-hooks-guide"
    },
    {
      "title": "TypeScript 기초",
      "body": "TypeScript의 기본 문법과 사용법을 소개합니다.",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@developer/typescript-basics"
    },
    {
      "title": "Next.js 14 App Router",
      "body": "Next.js 14의 새로운 App Router 기능을 살펴봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 10일",
      "href": "https://velog.io/@developer/nextjs-14-app-router"
    },
    {
      "title": "Tailwind CSS 활용법",
      "body": "Tailwind CSS를 활용한 효율적인 스타일링 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image4.jpg",
      "date": "2024년 1월 15일",
      "href": "https://velog.io/@developer/tailwind-css-tips"
    }
  ]
}`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`Status: 200
Content-Type: application/json

{
  "contents": [
    {
      "title": "React Hooks 완벽 가이드",
      "body": "React Hooks에 대한 자세한 설명과 활용 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image1.jpg",
      "date": "2024년 1월 1일",
      "href": "https://velog.io/@developer/react-hooks-guide"
    },
    {
      "title": "TypeScript 기초",
      "body": "TypeScript의 기본 문법과 사용법을 소개합니다.",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@developer/typescript-basics"
    },
    {
      "title": "Next.js 14 App Router",
      "body": "Next.js 14의 새로운 App Router 기능을 살펴봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 10일",
      "href": "https://velog.io/@developer/nextjs-14-app-router"
    },
    {
      "title": "Tailwind CSS 활용법",
      "body": "Tailwind CSS를 활용한 효율적인 스타일링 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image4.jpg",
      "date": "2024년 1월 15일",
      "href": "https://velog.io/@developer/tailwind-css-tips"
    }
  ]
}`}</code>
        </pre>
      ),
    },
  ],
};
