import React from 'react';
import Link from "next/link";;
import parse from 'html-react-parser';

export default function CtaStyle2({ bgUrl, btnText, btnLink }) {
  return (
    <div
      className="cs-cta cs_style_2 cs-bg"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container">
        <Link href={btnLink} className="cs-cta_btn">
          {parse(btnText)}
          <svg
            width={29}
            height={29}
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 2.5C29 1.11929 27.8807 -2.9306e-07 26.5 -2.93227e-06L4 -6.35263e-07C2.61929 -5.7707e-07 1.5 1.11929 1.5 2.5C1.5 3.88071 2.61929 5 4 5L24 5L24 25C24 26.3807 25.1193 27.5 26.5 27.5C27.8807 27.5 29 26.3807 29 25L29 2.5ZM3.76777 28.7678L28.2678 4.26777L24.7322 0.732231L0.232233 25.2322L3.76777 28.7678Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
