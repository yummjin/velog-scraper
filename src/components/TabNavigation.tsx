"use client";

interface TabNavigationProps<T extends string> {
  tabs: { value: T; label: string }[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

export default function TabNavigation<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps<T>) {
  return (
    <div className="mb-2 flex gap-2 border-b border-zinc-300 dark:border-zinc-700">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 font-medium ${
            activeTab === tab.value
              ? "border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
              : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
