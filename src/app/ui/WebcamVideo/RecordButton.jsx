import { Icon } from "@iconify/react";
import React from "react";
import Spacing from "../Spacing";

export default function RecordButton({ isState, onStart, onStop }) {
  return (
    <>
      <Spacing lg="20" md="20" />
      <div className="d-flex justify-content-center">
        {isState ? (
          <div
            className=" cs-btn cs-style1 cs-type1 "
            style={{ padding: "5px 20px" }}
            onClick={onStop}
          >
            <span>Record stop</span>
            <Icon
              data-recording={true}
              icon="wpf:record"
              // icon="openmoji:record-button"
              height={50}
              width={50}
              style={{ borderRadius: "100%" }}
              color="#ff4a17"
            />
          </div>
        ) : (
          <div
            className=" cs-btn cs-style1 cs-type1 "
            style={{ padding: "5px 20px" }}
            onClick={onStart}
          >
            <span>Record start</span>
            <Icon
              icon="mdi:record-rec"
              height={50}
              width={50}
              color="#ff4a17"
            />
          </div>
        )}
      </div>
    </>
  );
}
