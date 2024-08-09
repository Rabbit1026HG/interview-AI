import React, { useState } from "react";
import Link from "next/link";
import Div from "../Div";
const serviceData = [
  {
    title: "Create custom job",

    href: "/create-job",
  },
  {
    title: "WP Development",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
    href: "/job/job-details",
  },
  {
    title: "UI/UX Design",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
    href: "/job/job-details",
  },
  {
    title: "Branding",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
    href: "/job/job-details",
  },
  {
    title: "Social Ad Campaign",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.",
    href: "/job/job-details",
  },
];

export default function ServiceListStyle2({ data }) {
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  return (
    <Div className="cs-iconbox_3_list cs-style1">
      {data &&
        data?.map((item, index) => (
          <Div
            className={`cs-hover_tab ${active === index ? "active" : ""}`}
            key={index}
            onMouseEnter={() => handelActive(index)}
          >
            <Link
              href={index ? `/job/${item.id}` : item.id}
              className="cs-iconbox cs-style3"
            >
              <>
                <span className="cs-iconbox_icon cs-center">
                  {index ? (
                    <svg
                      width={30}
                      height={29}
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                        fill="currentColor"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="svg-icon"
                      viewBox="0 0 1024 1024"
                      width={30}
                      height={29}
                      fill="none"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M942.4128 426.6752h-345.088V81.5872C597.3248 36.5312 559.1808 0 512 0c-47.2064 0-85.3248 36.5312-85.3248 81.6128v345.0624H81.5872C36.5312 426.6752 0 464.8192 0 512c0 47.2064 36.5312 85.3248 81.6128 85.3248h345.0624v345.088c0 45.056 38.144 81.5872 85.3248 81.5872 47.2064 0 85.3248-36.5312 85.3248-81.6128V597.3504h345.088c45.056 0 81.5872-38.144 81.5872-85.3248 0-47.2064-36.5312-85.3248-81.6128-85.3248z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </span>
                <Div className="cs-iconbox_in">
                  <h2 className="cs-iconbox_title">{item.title}</h2>
                  <Div className="cs-iconbox_subtitle">{item.description}</Div>
                </Div>
              </>
            </Link>
          </Div>
        ))}
    </Div>
  );
}
