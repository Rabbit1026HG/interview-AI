import React, { useState } from "react";
import Link from "next/link";
import Div from "../Div";

export default function ServiceList({ variant, data, isMork }) {
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  return (
    <Div className={`cs-iconbox_3_list cs-style1`}>
      {data?.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? "active" : ""}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link
            href={index < 2 ? `/answer/${item.id}` : "/price"}
            className="cs-iconbox cs-style3"
          >
            <>
              <span className="cs-iconbox_icon cs-center">
                {index < 2 ? (
                  <svg
                    fill="none"
                    width={35}
                    height={35}
                    viewBox="0 0 280.417 280.417"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M206.527,4.542c-40.742,0-73.889,33.146-73.889,73.889v32.111H16.125C7.22,110.542,0,117.761,0,126.667V259.75,c0,8.906,7.22,16.125,16.125,16.125h165.25c8.906,0,16.125-7.219,16.125-16.125V126.667c0-8.906-7.219-16.125-16.125-16.125h-8.736,	V78.431c0-18.686,15.202-33.889,33.889-33.889c18.687,0,33.89,15.202,33.89,33.889c0,11.046,8.954,20,20,20s20-8.954,20-20,	C280.417,37.689,247.27,4.542,206.527,4.542z M114.416,194.777v26.432c0,8.652-7.014,15.666-15.666,15.666,	s-15.666-7.014-15.666-15.666v-26.432c-5.885-4.639-9.668-11.826-9.668-19.901c0-13.992,11.342-25.334,25.334-25.334,	s25.334,11.342,25.334,25.334C124.084,182.951,120.301,190.138,114.416,194.777z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg
                    fill="none"
                    width={35}
                    height={35}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                  >
                    <path
                      d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85,S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15,s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25,C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </span>
              <Div className="cs-iconbox_in">
                {isMork && (
                  <h2 className="cs-iconbox_title cs-font_30">{`Mork Interview ${item.id}`}</h2>
                )}
                <Div className="cs-iconbox_subtitle">{item.question}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
