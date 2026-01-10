import { ReactNode } from "react";

export interface TagsPostData {
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

export const tagsPostData: TagsPostData = {
  title: "태그별 게시글 스크래핑",
  description:
    "Velog 사용자의 특정 태그에 해당하는 게시글 목록을 스크래핑합니다.",
  endpoint: "GET /api/v1/tags-post",
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
      name: "tag",
      type: "string",
      description: (
        <>
          <strong>Required.</strong> 스크래핑할 태그 이름
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
  "${baseUrl}/api/v1/tags-post?userId=username&tag=react"`,
      content: (
        <pre className="font-mono text-sm text-zinc-100">
          <code>{`curl -L \\
  -H "Accept: application/json" \\
  "${baseUrl}/api/v1/tags-post?userId=username&tag=react"`}</code>
        </pre>
      ),
    },
    {
      value: "javascript",
      label: "JavaScript",
      code: `const response = await fetch(
  \`${baseUrl}/api/v1/tags-post?userId=username&tag=\${encodeURIComponent('react')}\`,
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
  \`${baseUrl}/api/v1/tags-post?userId=username&tag=\${encodeURIComponent('react')}\`,
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
      description: "userId 또는 tag parameter is required",
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

type TagsPostResponse = {
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

type TagsPostResponse = {
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
      "title": "useState와 useEffect 사용법",
      "body": "가장 기본적인 Hooks인 useState와 useEffect...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@username/useState-useEffect"
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
      "title": "useState와 useEffect 사용법",
      "body": "가장 기본적인 Hooks인 useState와 useEffect...",
      "image": "https://velog.io/image-url.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@username/useState-useEffect"
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
      "title": "useState와 useEffect 사용법",
      "body": "가장 기본적인 Hooks인 useState와 useEffect의 다양한 활용 방법을 소개합니다.",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@developer/useState-useEffect"
    },
    {
      "title": "Custom Hooks 만들기",
      "body": "자주 사용하는 로직을 Custom Hooks로 추출하여 재사용하는 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 10일",
      "href": "https://velog.io/@developer/custom-hooks"
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
      "title": "useState와 useEffect 사용법",
      "body": "가장 기본적인 Hooks인 useState와 useEffect의 다양한 활용 방법을 소개합니다.",
      "image": "https://velog.velcdn.com/images/user/post/image2.jpg",
      "date": "2024년 1월 5일",
      "href": "https://velog.io/@developer/useState-useEffect"
    },
    {
      "title": "Custom Hooks 만들기",
      "body": "자주 사용하는 로직을 Custom Hooks로 추출하여 재사용하는 방법을 알아봅시다.",
      "image": "https://velog.velcdn.com/images/user/post/image3.jpg",
      "date": "2024년 1월 10일",
      "href": "https://velog.io/@developer/custom-hooks"
    }
  ]
}`}</code>
        </pre>
      ),
    },
  ],
};
