import React, { useState, useCallback, useEffect } from "react";
import SummaryApi from "../common";
import uploadImage from "../helpers/uploadImage";
import { MdDeleteForever } from "react-icons/md";

const AllGallary = () => {
  const [photos, setPhotos] = useState([]);
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

  const fetchAllImages = async () => {
    try {
      const response = await fetch(SummaryApi.getGalleryImages.url);
      const dataResponse = await response.json();
      setPhotos(dataResponse?.data || []);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
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

    fetchAllImages();
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
    <div className="relative">
       <h1 className="font-bold text-4xl text-red-700">All Images</h1>
      <div className="w-screen absolute items-center flex flex-col top-0 right-0">
    
        <form>
          <label>
            <div className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full ">
              Upload Photo
            </div>
            <input type="file" className="hidden" onChange={addImage} />
          </label>
        </form>
      </div>
      
      <div className=" mx-10 w-full pt-32 grid grid-cols-4 gap-x-4 gap-y-20 ">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo.src}
              alt="gallery"
              className="w-48 h-48 object-cover"
            />
            <button
              className="absolute text-2xl  -top-2 -left-6"
              onClick={() => {
                const newPhotos = photos.filter((_, i) => i !== index);
                setGallaryImages(newPhotos);
              }}
            >
              <MdDeleteForever
                    key={index}
                    className="text-3xl cursor-pointer hover:scale-150 hover:text-red-500 ease-in-out duration-300 ml-[13rem] "
                  />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGallary;
