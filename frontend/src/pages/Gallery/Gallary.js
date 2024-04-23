import React, { useState, useCallback, useEffect } from "react";
import "./style.css";
import Gallery from "react-photo-gallery";
import FadeIn from "react-fade-in";
import Carousel, { Modal, ModalGateway } from "react-images";
import SummaryApi from "../../common";
import uploadImage from "../../helpers/uploadImage";

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);

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
    // map images wiith 4 in each coln
    <div className=" px-10 bg-white mb-52">
      <div className=" px-10 py-8">
        <h1 className=" font-bold w-screen flex flex-col h-20 text-5xl items-center mb-4">
          Photo Gallery
        </h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-20">
          {photos.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg"
            >
              <img
                src={item.src}
                alt={`Image ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
