import React, { useState, useCallback, useEffect } from "react";
import "./style.css";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";
import SummaryApi from "../../common";
import uploadImage from "../../helpers/uploadImage";

export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const addImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    const imagePic = await uploadImage(file);

    console.log(imagePic);

    const data = {
      src: imagePic.url,
      width: 3,
      height: 4,
    };

    // add imagePic to photos
    setGallaryImages([...photos, data]);
  };

  const setGallaryImages = async (images) => {
    console.log(images);

    const data = {
      gallaryImages: images,
    };

    console.log(data);
    await fetch(SummaryApi.setGallaryImages.url, {
      method: SummaryApi.setGallaryImages.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    fetchAllProduct();
  };

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.getGallaryImages.url);
    const dataResponse = await response.json();

    console.log("product data", dataResponse);

    setPhotos(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <FadeIn>
      {photos.length > 0 && (
        <div className="homeContainer">
          <h1 className="galleryTitle">Gallery</h1>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      )}
      //create a add button
      <form>
        <label>
          <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
            Upload Photo
          </div>
          <input type="file" className="hidden" onChange={addImage} />
        </label>
      </form>
    </FadeIn>
  );
}
