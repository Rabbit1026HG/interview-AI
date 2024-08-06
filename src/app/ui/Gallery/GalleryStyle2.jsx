import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const galleryData = [
  {
    src: '/images/gallery_1.jpeg',
    srcLg: '/images/gallery_1.jpeg',
  },
  {
    src: '/images/gallery_2.jpeg',
    srcLg: '/images/gallery_2.jpeg',
  },
  {
    src: '/images/gallery_3.jpeg',
    srcLg: '/images/gallery_3.jpeg',
  },
  {
    src: '/images/gallery_4.jpeg',
    srcLg: '/images/gallery_4.jpeg',
  },
  {
    src: '/images/gallery_5.jpeg',
    srcLg: '/images/gallery_5.jpeg',
  },
];

const GalleryItem = ({ src }) => {
  return (
    <div className="cs-grid_gallery_item" href={src}>
      <div className="cs-portfolio cs-style1 cs-lightbox_item cs-type2 rounded-0">
        <div className="cs-portfolio_hover" />
        <span className="cs-plus" />
        <div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        >
          <img src={src} alt="Gallery" className='position-absolute' />
        </div>
      </div>
    </div>
  )
}


export default function GalleryStyle2() {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="cs-grid_gallery_5 cs-lightgallery"
    >
      {galleryData.map((item, index) => (
        <GalleryItem key={index} src={item.src} />
      ))}
    </LightGallery>
  );
}
