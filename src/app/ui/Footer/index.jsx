import React from "react";
import Div from "../Div";
import MenuWidget from "../Widget/MenuWidget";

import Spacing from "../Spacing";

const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="container">
        <Spacing lg="50" md="35" />
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © {`${date}`}</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
