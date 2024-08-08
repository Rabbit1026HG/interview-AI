"use client";

import Div from "@/app/ui/Div";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from "../../../../../public/images/case_study_img_1.jpeg";

import Link from "next/link";
export default function CaseStudyDetailsPage() {
  return (
    <>
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Web development"
          subtitle="INTERVIEW"
          variant="cs-style1 text-center"
        />
        <hr />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Thumb"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />

        <Spacing lg="100" md="50" />
        <Link href="/question" className="cs-text_btn">
          <span className="cs-font_30">Question</span>
        </Link>
        <Spacing lg="20" md="10" />
        <p className="cs-m0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </p>
        <br />
        <Div className="d-flex justify-content-sm-between">
          <Link href="" className="cs-text_btn">
            <span>Prev</span>
          </Link>
          <Link href="" className="cs-text_btn">
            <span>Next</span>
          </Link>
        </Div>
        <hr />
        <br />
        <p className="cs-m0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </p>
        <br />
        <p className="cs-m0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </p>
        <br />
        <p className="cs-m0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium voltire doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        </p>
        <Div className="col-sm-12">
          <label className="cs-primary_color">Answer</label>
          <textarea cols="30" rows="7" className="cs-form_field"></textarea>
          <Spacing lg="25" md="25" />
        </Div>
        <Div className="d-flex justify-content-sm-end">
          <button className="cs-btn cs-style1">
            <span>Submit</span>
          </button>
        </Div>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Strengh</h2>
            <p className="cs-m0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit
            </p>

            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <h2 className="cs-font_30 ">Weakness</h2>
            {/* <Spacing lg="40" md="30" /> */}
            <p className="cs-m0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit
            </p>
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-12">
            <h2 className="cs-font_30 ">Interview</h2>
            {/* <Spacing lg="40" md="30" /> */}
            <p className="cs-m0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium voltire doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit
            </p>
          </Div>
          <Div className="d-flex justify-content-sm-end">
            <button className="cs-btn cs-style1">
              <span>Save</span>
            </button>
          </Div>
        </Div>

        <Spacing lg="125" md="55" />
      </Div>
    </>
  );
}
