import ReactMarkdown from "react-markdown";
import { problems } from "../constants/problems";

const Problem = () => {
  return (
    <section className="font-inter border-r border-neutral-300 py-3 px-5 w-[450px] h-[100vh] overflow-y-auto">
      <div className="space-y-6">
        {/* Tags Section
        <div className="flex text-sm gap-3 flex-wrap">
          <p className="text-xs rounded-full py-1 text-white flex items-center px-3 bg-emerald-600">
            {problems[0].difficulty}
          </p>

          <div className="flex gap-2 flex-wrap">
            {problems[0].tags.map((item, index) => (
              <p
                key={index}
                className="text-xs py-1 rounded-full text-white flex items-center px-3 bg-neutral-600"
              >
                {item}
              </p>
            ))}
          </div>
        </div> */}

        {/* Problem Description */}
        <div className="text-neutral-700 mt-0">
          <ReactMarkdown
            components={{
              p: ({ node, ...props }) => (
                <p
                  className="text-sm leading-relaxed text-neutral-700 my-3"
                  {...props}
                />
              ),
              h1: ({ node, ...props }) => (
                <h1
                  className="text-lg font-semibold text-neutral-800 mt-6 mb-3"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-base font-semibold text-neutral-800 mt-5 mb-2"
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-5 space-y-2 my-3" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-5 space-y-2 my-3" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li
                  className="text-sm leading-relaxed text-neutral-700"
                  {...props}
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  className="bg-neutral-100 px-1.5 py-0.5 rounded font-mono text-sm"
                  {...props}
                />
              ),
            }}
          >
            {problems[0].desc}
          </ReactMarkdown>
        </div>

        {/* Example Section */}
        <div className="space-y-4 border-t border-neutral-200 pt-4">
          <p className="font-semibold text-neutral-800 text-base">Example</p>
          <div className="bg-neutral-50 border-1 border-neutral-200 p-4 rounded-md space-y-4">
            <div>
              <p className="font-medium text-sm text-neutral-700 mb-1">
                Input:
              </p>
              <pre className="bg-white p-2 rounded border border-neutral-200 text-sm font-mono overflow-x-auto">
                {problems[0].example.input}
              </pre>
            </div>

            <div>
              <p className="font-medium text-sm text-neutral-700 mb-1">
                Output:
              </p>
              <pre className="bg-white p-2 rounded border border-neutral-200 text-sm font-mono overflow-x-auto">
                {problems[0].example.output}
              </pre>
            </div>

            <div>
              <p className="font-medium text-sm text-neutral-700 mb-1">
                Explanation:
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {problems[0].example.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Constraints Section */}
        <div className="space-y-3 border-t border-neutral-200 pt-4">
          <p className="font-semibold text-neutral-800 text-base">
            Constraints
          </p>
          <ul className="space-y-2 list-disc pl-5">
            {problems[0].constraints?.map((item, index) => (
              <li
                key={index}
                className="text-sm text-neutral-700 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
