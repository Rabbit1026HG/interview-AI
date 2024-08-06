import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:slack" />
      </Link>
    </Div>
  )
}
