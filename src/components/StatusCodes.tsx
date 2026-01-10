interface StatusCode {
  code: string | number;
  description: string | React.ReactNode;
}

interface StatusCodesProps {
  statusCodes: StatusCode[];
}

export default function StatusCodes({ statusCodes }: StatusCodesProps) {
  return (
    <>
      <h3 className="mb-4 text-xl font-semibold text-black dark:text-zinc-50">
        HTTP response status codes
      </h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse border border-zinc-300 dark:border-zinc-700">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-800">
              <th className="border border-zinc-300 px-4 py-2 text-left font-semibold text-black dark:border-zinc-700 dark:text-zinc-50">
                Status code
              </th>
              <th className="border border-zinc-300 px-4 py-2 text-left font-semibold text-black dark:border-zinc-700 dark:text-zinc-50">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {statusCodes.map((statusCode, index) => (
              <tr key={index}>
                <td className="border border-zinc-300 px-4 py-2 font-mono text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                  {statusCode.code}
                </td>
                <td className="border border-zinc-300 px-4 py-2 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300">
                  {statusCode.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
