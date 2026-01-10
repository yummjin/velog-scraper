import { ReactNode } from "react";

export interface TagsData {
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

export const tagsData: TagsData = {
  title: "태그 스크래핑",
  description: "Velog 사용자의 태그 목록을 스크래핑합니다.",
  endpoint: "GET /api/v1/tags",
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
  ],
  exampleResponse: [
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
  ],
};
