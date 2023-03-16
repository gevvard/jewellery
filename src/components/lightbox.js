import React, {useEffect, useState} from 'react';
import Lightbox from "react-18-image-lightbox";
import 'react-18-image-lightbox/style.css';


const LightBoxComponent = ({
 isOpen,
 setOpen,
 photoIndex,
 setPhotoIndex,
 images
}) => {

  return (
    <>
      {isOpen &&
        <Lightbox
          isOpen={isOpen}
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={(e) => {
            e.preventDefault();
            setOpen(false);
          }
          }
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      }
    </>
  );
};

export default LightBoxComponent;