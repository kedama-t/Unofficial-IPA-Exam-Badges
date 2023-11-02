import * as ReactDOMServer from 'react-dom/server.browser';
import ExamIcon from '@/src/components/ExamIcon';
import { exams } from '@/src/const.exams';

export async function GET(
  request: Request,
  params: {
    params: {
      exam: keyof typeof exams;
      year: string;
      season: string;
    };
  }
) {
  const { exam, year, season } = params.params;
  const svg = ReactDOMServer.renderToString(
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0,0,128,128"
    >
      <ExamIcon examName={exam} year={year} season={season} />
    </svg>
  );

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}
