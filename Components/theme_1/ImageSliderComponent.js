import React from "react";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { ImageLoader, imagesSize } from "../../utils/imageLoader";


const ImageSliderComponent = ({ data }) => {
  const prductIamges = [];
  prductIamges.push({
    original: ImageLoader(data?.main_image, imagesSize?.productDetailsImageWidth, imagesSize?.productDetailsImageHeight),
    thumbnail: ImageLoader(data?.main_image, imagesSize?.productDetailsImageIconWidth, imagesSize?.productDetailsImageIconHeight),
  });
  if (data?.other_images?.length > 0) {
    data.other_images.map((item) => {
      prductIamges.push({
        original: ImageLoader(item, imagesSize?.productDetailsImageWidth, imagesSize?.productDetailsImageHeight),
        thumbnail: ImageLoader(item, imagesSize?.productDetailsImageIconWidth, imagesSize?.productDetailsImageIconHeight)
      });
    });
  }

  const galleryOptions = {
    showNav: false, // Hide navigation arrows
    autoPlay: true,
    showPlayButton: false
  };
  return (
    <div>
      <div className="wrapper">
        <ImageGallery items={prductIamges} {...galleryOptions} />
      </div>
    </div>
  );
};

export default ImageSliderComponent;
