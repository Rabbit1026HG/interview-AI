import React from 'react'
import Link from "next/link";

export default function MenuWidget({menuItems, menuHeading, variant}) {
  return (
    <>
      {menuHeading && <h2 className="cs-widget_title">{menuHeading}</h2>}
      <ul className={`${variant ? `cs-menu_widget ${variant}` : 'cs-menu_widget cs-style1'} cs-mp0`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
          </li>
        ))}
      </ul>
    </>
  )
}
