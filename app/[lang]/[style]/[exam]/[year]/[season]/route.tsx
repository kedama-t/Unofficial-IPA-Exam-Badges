// @ts-ignore
import * as ReactDOMServer from 'react-dom/server.browser';
import ExamCard from '@/src/components/ExamCard';
import ExamIcon from '@/src/components/ExamIcon';
import { exams } from '@/src/const.exams';

export async function GET(
  request: Request,
  params: {
    params: {
      lang: 'ja' | 'en';
      style: 'icon' | 'card';
      exam: keyof typeof exams;
      year: string;
      season: string;
    };
  }
) {
  const { lang, style, exam, year, season } = params.params;
  const svg = ReactDOMServer.renderToString(
    style === "icon" ?
      <ExamIcon examName={exam} year={year} season={season} /> :
      <ExamCard examName={exam} language={lang} year={year} season={season} />
  );

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
