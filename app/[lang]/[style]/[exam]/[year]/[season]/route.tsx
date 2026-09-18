// @ts-ignore
import * as ReactDOMServer from "react-dom/server.browser";
import ExamCard from "@/src/components/ExamCard";
import ExamIcon from "@/src/components/ExamIcon";
import { exams } from "@/src/const.exams";

// Next.js が生成するルート型では動的セグメントは string のため、
// ここで受け取ったあとコンポーネントが期待する型へ絞り込む。
type Params = {
  lang: string;
  style: string;
  exam: string;
  year: string;
  season: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<Params> }
) {
  const { lang, style, exam, year, season } = await params;
  const examName = exam as keyof typeof exams;
  const language = lang as "ja" | "en";

  const svg = ReactDOMServer.renderToString(
    style === "icon" ? (
      <ExamIcon examName={examName} year={year} season={season} />
    ) : (
      <ExamCard
        examName={examName}
        language={language}
        year={year}
        season={season}
      />
    )
  );

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}
