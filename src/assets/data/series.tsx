import { ReactNode } from "react";

export interface SeriesData {
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

export const seriesData: SeriesData = {
  title: "시리즈 스크래핑",
  description: "Velog 시리즈의 모든 게시글을 스크래핑합니다.",
  endpoint: "GET /api/v1/series",
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
    {
      name: "seriesTitle",
      type: "string",
      description: (
        <>
          <strong>Required.</strong> 스크래핑할 Velog 시리즈 제목
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
  "${baseUrl}/api/v1/series?userId=username&seriesTitle=시리즈 제목"`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/series?userId=username&seriesTitle=시리즈 제목"`}</code>
        </pre>
      ),
    },
    {
      value: "javascript",
      label: "JavaScript",
      code: `const response = await fetch(
  \`${baseUrl}/api/v1/series?userId=username&seriesTitle=시리즈 제목\`,
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
  \`${baseUrl}/api/v1/series?userId=username&seriesTitle=시리즈 제목\`,
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
      description: "userId 또는 seriesTitle 파라미터가 누락되었습니다",
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

type Series = {
  title: string;
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

type Series = {
  title: string;
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
}`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
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
      ),
    },
    {
      value: "example",
      label: "Example",
      code: `Status: 200
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
}`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
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
      ),
    },
  ],
};
