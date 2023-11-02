import * as ReactDOMServer from 'react-dom/server.browser';
import ExamCard from '@/src/components/ExamCard';
import { exams } from '@/src/const.exams';

export async function GET(
  request: Request,
  params: {
    params: {
      lang: 'ja' | 'en';
      exam: keyof typeof exams;
      year: string;
      season: string;
    };
  }
) {
  const { lang, exam, year, season } = params.params;
  const svg = ReactDOMServer.renderToString(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="128"
      viewBox="0,0,256,128"
    >
      <ExamCard examName={exam} language={lang} year={year} season={season} />
    </svg>
  );

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
