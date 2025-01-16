import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";

import styles from "./ImageGallery.module.scss";

import * as Atoms from "@/components/Atoms";

const Carousel = lazy(() => import("@/components/Molecules/Carousel"));

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
  const [activeIndex, setActiveIndex] = useState<number>(0); // Track the active image index
  const {
    isOpen: isGalleryModalOpen,
    onOpen: onGalleryModalOpen,
    onClose: onGalleryModalClose,
  } = useDisclosure();

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

  function handleImageClick(index: number) {
    setActiveIndex(index);
    onGalleryModalOpen();
  }

  return (
    <>
      <div ref={galleryRef} className={styles.gallery}>
        {imageGallery.map((image, index) => (
          <div
            key={image.id}
            className={styles.galleryItem}
            data-aos="fade-up"
            onClick={() => handleImageClick(index)}
          >
            <Atoms.Image lazy={true} path={image.path} />
            {image.title && <p className={styles.title}>{image.title}</p>}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isGalleryModalOpen}
        size="full"
        onClose={onGalleryModalClose}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Image Gallery
              </ModalHeader>
              <ModalBody>
                <Suspense fallback={<div>Loading carousel...</div>}>
                  <Carousel
                    showIndicators
                    activeIndex={activeIndex}
                    autoPlay={false}
                    carouselItems={imageGallery.map((image) => ({
                      id: image.id,
                      imagePath: image.path,
                      title: image.title || "",
                    }))}
                    heightClass="full"
                    lazyLoadImages={true}
                    showArrows={true}
                  />
                </Suspense>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageGallery;
