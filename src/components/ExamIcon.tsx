import { exams } from "@/src/const.exams";
import Stars from "./Stars";

const style = { exam: { fontFamily: "sans-serif", fontWeight: 800 } };

export default function ExamIcon(props: {
  examName: keyof typeof exams;
  year: string;
  season: string;
}) {
  const { examName, year, season } = props;
  const exam = exams[examName];
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0,0,128,128"
    >
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="90%" stopColor={exam.from} />
          <stop offset="100%" stopColor={exam.to} />
        </linearGradient>
        <linearGradient id="text" x1="0" x2="0" y1="0" y2="1">
          <stop offset="75%" stopColor="rgb(248 250 252)" />
          <stop offset="100%" stopColor="rgb(203 213 225)" />
        </linearGradient>
        <linearGradient id="certified" x1="0" x2="0" y1="0" y2="1">
          <stop offset="75%" stopColor="rgb(220 38 38)" />
          <stop offset="100%" stopColor="rgb(203 213 225)" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        rx="15"
        ry="15"
        width="128"
        height="128"
        fill="url(#bg)"
      />

      <path
        d="M 0 15 V 40 L 40 0 H 15 A 15 15,0,0,0, 0 15 Z"
        fill="white"
        fillOpacity="0.8"
      />
      <text
        x="-20"
        y="26"
        transform="rotate(-45 0,0)"
        style={{ ...style.exam, fontSize: 7 }}
        fill="url(#certified)"
      >
        CERTIFIED
      </text>

      <Stars pieces={exam.level} x={0} y={57} />
      <text
        x="50%"
        y="50"
        textAnchor="middle"
        style={{ ...style.exam, fontSize: 48 }}
        fill="url(#text)"
      >
        {examName.toUpperCase()}
      </text>
      <text
        x="50%"
        y="100"
        textAnchor="middle"
        style={{
          ...style.exam,
          fontSize: 24,
        }}
        fill="url(#text)"
      >
        {year.toUpperCase()}
      </text>
      <text
        x="50%"
        y="118"
        textAnchor="middle"
        style={{
          ...style.exam,
          fontSize: 14,
        }}
        fill="url(#text)"
      >
        {season.toUpperCase()}
      </text>
    </svg>
  );
}
