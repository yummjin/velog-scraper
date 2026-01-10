import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection
        title="주요 기능"
        subtitle="간단하고 강력한 API로 Velog 콘텐츠를 추출하세요"
        features={features}
      />
      <CodeExamplesSection
        title="빠른 시작"
        subtitle="몇 줄의 코드로 바로 시작하세요"
        examples={codeExamples}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-12 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900"></div>
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-1.5 text-sm text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          API 서비스 운영 중
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl dark:text-zinc-50">
          Velog Scraper
        </h1>
        <p className="mb-4 text-xl leading-relaxed text-zinc-600 sm:text-2xl dark:text-zinc-400">
          Velog 게시글을 간편하게 JSON으로 추출하세요
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-zinc-500 dark:text-zinc-500">
          REST API를 통해 단일 게시글 또는 시리즈 전체를 스크래핑할 수 있습니다.
          간단한 HTTP 요청으로 Velog 콘텐츠를 JSON 형식으로 받아보세요.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/document"
            className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-black px-6 text-base font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            문서 보기
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <a
            href="https://github.com/yummjin/velog-scraper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-6 text-base font-medium text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.532 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub에서 보기
          </a>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:items-center [&>div]:justify-center">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

function FeaturesSection({ title, subtitle, features }: FeaturesSectionProps) {
  return (
    <section className="px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CodeExampleProps {
  language: string;
  code: string;
}

function CodeExample({ language, code }: CodeExampleProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {language}
          </span>
        </div>
      </div>
      <div className="p-6">
        <pre className="overflow-x-auto">
          <code className="text-sm text-zinc-800 dark:text-zinc-200">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

interface CodeExampleData {
  language: string;
  code: string;
}

interface CodeExamplesSectionProps {
  title: string;
  subtitle: string;
  examples: CodeExampleData[];
}

function CodeExamplesSection({
  title,
  subtitle,
  examples,
}: CodeExamplesSectionProps) {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 sm:px-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        </div>
        <div className="space-y-8">
          {examples.map((example, index) => (
            <CodeExample key={index} {...example} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/document"
            className="inline-flex items-center gap-2 text-lg font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            전체 API 문서 보기
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: (
      <div className="bg-blue-100 dark:bg-blue-900/30">
        <svg
          className="h-6 w-6 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
    ),
    title: "단일 게시글 스크래핑",
    description:
      "하나의 Velog 게시글 URL만으로 제목, 본문, 이미지, 날짜 등 모든 정보를 JSON으로 추출합니다.",
  },
  {
    icon: (
      <div className="bg-purple-100 dark:bg-purple-900/30">
        <svg
          className="h-6 w-6 text-purple-600 dark:text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
    ),
    title: "시리즈 전체 스크래핑",
    description:
      "Velog 시리즈 URL 하나로 시리즈에 포함된 모든 게시글을 한 번에 추출할 수 있습니다.",
  },
  {
    icon: (
      <div className="bg-green-100 dark:bg-green-900/30">
        <svg
          className="h-6 w-6 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    ),
    title: "REST API",
    description:
      "표준 HTTP GET 요청만으로 사용할 수 있는 간단한 REST API입니다. 어떤 언어에서도 쉽게 사용할 수 있습니다.",
  },
  {
    icon: (
      <div className="bg-orange-100 dark:bg-orange-900/30">
        <svg
          className="h-6 w-6 text-orange-600 dark:text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>
    ),
    title: "무료 사용",
    description:
      "인증 없이 바로 사용할 수 있습니다. CORS도 지원하여 브라우저에서도 직접 호출 가능합니다.",
  },
];

const codeExamples = [
  {
    language: "cURL",
    code: `curl -L \\
  -H "Accept: application/json" \\
  "https://your-domain.com/api/v1/page?url=https://velog.io/@username/post-title"`,
  },
  {
    language: "JavaScript",
    code: `const response = await fetch(
  \`/api/v1/page?url=\${encodeURIComponent(
    'https://velog.io/@username/post-title'
  )}\`,
  { headers: { 'Accept': 'application/json' } }
);

const data = await response.json();`,
  },
];
