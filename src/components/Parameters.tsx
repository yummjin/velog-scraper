interface Parameter {
  name: string;
  type: string;
  description: string | React.ReactNode;
}

interface ParametersProps {
  parameters: Parameter[];
}

export default function Parameters({ parameters }: ParametersProps) {
  return (
    <>
      <h3 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-zinc-50">
        Parameters
      </h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse border border-zinc-300 dark:border-zinc-700">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="border border-zinc-300 px-4 py-2 text-left font-semibold text-black dark:border-zinc-700 dark:text-zinc-50">
                Name
              </th>
              <th className="border border-zinc-300 px-4 py-2 text-left font-semibold text-black dark:border-zinc-700 dark:text-zinc-50">
                Type
              </th>
              <th className="border border-zinc-300 px-4 py-2 text-left font-semibold text-black dark:border-zinc-700 dark:text-zinc-50">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td className="border border-zinc-300 px-4 py-2 font-mono text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                  {param.name}
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                  {param.type}
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                  {param.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
