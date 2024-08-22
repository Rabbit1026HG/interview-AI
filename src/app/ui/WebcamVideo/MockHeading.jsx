import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function MockHeading({ btnClick }) {
  return (
    <div className="col-lg-5">
      <div className="cs-height_0 cs-height_lg_40" />
      <SectionHeading title="Let's get started" subtitle="Mock Interview">
        <Spacing lg="30" md="20" />
        <p>
          Before starting the interview, you can check the camera and microphone
          status.
        </p>
        <Spacing lg="30" md="20" />
      </SectionHeading>
      <div className="cs-btn cs-style1 cs-type1" onClick={btnClick}>
        <span>Interview start</span>
        <Icon icon="bi:arrow-right" />
      </div>
      <Spacing lg="30" md="20" />
    </div>
  );
}
