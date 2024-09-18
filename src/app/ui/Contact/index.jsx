import React, { useRef, useState } from "react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Constact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(form.current);

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
    setEmail("");
    setFullName("");
    setMessage("");
    setIsLoading(false);
  };
  return (
    <Div className="container">
      <Div className="row">
        <Div className="col-lg-6">
          <SectionHeading title="Contact our support team" subtitle="Contact" />
          <Spacing lg="55" md="30" />
          <ContactInfoWidget withIcon />
          <Spacing lg="0" md="50" />
        </Div>
        <Div className="col-lg-6">
          <form className="row" ref={form} onSubmit={sendEmail}>
            <Div className="col-sm-6">
              <label className="cs-primary_color">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="cs-form_field"
              />
              <Spacing lg="20" md="20" />
            </Div>
            <Div className="col-sm-6">
              <label className="cs-primary_color">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="cs-form_field"
              />
              <Spacing lg="20" md="20" />
            </Div>

            <Div className="col-sm-12">
              <label className="cs-primary_color">Message</label>
              <textarea
                cols="30"
                rows="7"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
                className="cs-form_field"
              ></textarea>
              <Spacing lg="25" md="25" />
            </Div>
            {isLoading ? (
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type="submit">
                  <span>Processing...</span>
                  <Icon icon="eos-icons:bubble-loading" />
                </button>
              </Div>
            ) : (
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type="submit">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            )}
          </form>
        </Div>
      </Div>
      <Spacing lg="85" md="40" />
    </Div>
  );
}
