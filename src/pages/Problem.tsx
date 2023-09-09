import {
  Button,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import CodeEditor from "../components/code-editor/CodeEditor";
import MarkdownRender from "../components/markdown/MarkdownRender";
import { useProblem } from "../hooks/problem";
import Header from "../layouts/userLayout/Header";
import JudgeVerdictTable from "../components/JudgeVerdictTable";
import { useJudge } from "../hooks/judge";
import { judgeVerdictListPipe } from "../pipes/judge";
import { useEffect } from "react";

const defaultCode = `#include <iostream>
using namespace std;

int main() {
  string str;
  cin >> str;
  cout << "Hello! " << str << endl;
  return 0;
}`;

const Problem: React.FC = () => {
  const { getProblemInfo } = useProblem("hello-world");
  const { setSrc, setSrcLanguage, runJudge, getVerdicts } =
    useJudge("hello-world");

  useEffect(() => {
    setSrcLanguage("Cpp");
  }, []);

  return (
    <div className="relative flex h-[100vh] flex-col">
      <Header />
      <header className="h-auto bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {getProblemInfo()?.title}
          </h1>
        </div>
      </header>
      <main className="flex w-full max-w-7xl flex-auto flex-col self-center py-6 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="w-1/2 flex-1 ">
            <MarkdownRender
              content={getProblemInfo()?.description || ""}
              rehypePlugin="rehypeKatex"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-4">
            <CodeEditor
              className="h-96 w-full overflow-hidden"
              value={defaultCode}
              onChange={(value: string) => {
                setSrc(value);
                console.log(value);
              }}
            />
            <Button
              className="relative bottom-16 right-2 self-end"
              color="primary"
              variant="solid"
              onClick={runJudge}
            >
              Submit
            </Button>
          </div>
        </div>
        {getVerdicts().length > 0 && (
          <JudgeVerdictTable data={judgeVerdictListPipe(getVerdicts())} />
        )}
      </main>
    </div>
  );
};

export default Problem;
