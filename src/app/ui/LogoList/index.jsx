import React from 'react';
import Div from '../Div';

const partnerLogos = [
  {
    src: '/images/partner_1.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_2.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_3.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_4.svg',
    alt: 'Partner',
  },
  {
    src: '/images/partner_5.svg',
    alt: 'Partner',
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
