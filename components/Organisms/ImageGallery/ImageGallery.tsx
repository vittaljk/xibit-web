// import { IImageGalleryPicture } from "./ImageGallery.model";
// import styles from "./ImageGallery.module.scss";

// interface ImageGalleryProps {
//   imageGallery: IImageGalleryPicture[];
// }

// function ImageGallery(props: ImageGalleryProps) {
//   const { imageGallery } = props;

//   return (
//     <div className={styles.gallery}>
//       {imageGallery.map((image) => (
//         <div key={image.id} className={styles.galleryItem} data-aos="fade-up">
//           <img
//             alt={image.title || "Image"}
//             className={styles.image}
//             src={image.path}
//           />
//           {image.title && <p className={styles.title}>{image.title}</p>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;

import React, { useEffect, useRef } from "react";

import styles from "./ImageGallery.module.scss";

export interface IImageGalleryPicture {
  id: string;
  title?: string;
  path: string;
}

interface ImageGalleryProps {
  imageGallery: IImageGalleryPicture[];
}

function ImageGallery({ imageGallery }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const galleryItems = galleryRef.current.querySelectorAll<HTMLDivElement>(
        `.${styles.galleryItem}`,
      );

      galleryItems.forEach((item) => {
        const img = item.querySelector("img");

        if (img) {
          const imgHeight = img.naturalHeight;
          const span = Math.ceil(imgHeight / 8);

          item.style.setProperty("--span", span.toString());
        }

        img?.addEventListener("load", () => {
          const imgHeight = img.naturalHeight;
          const span = Math.ceil(imgHeight / 8);

          item.style.setProperty("--span", span.toString());
        });
      });
    }
  }, [imageGallery]);

  return (
    <div ref={galleryRef} className={styles.gallery}>
      {imageGallery.map((image) => (
        <div key={image.id} className={styles.galleryItem} data-aos="fade-up">
          <img
            alt={image.title || "Gallery Image"}
            className={styles.image}
            src={image.path}
          />
          {image.title && <p className={styles.title}>{image.title}</p>}
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
