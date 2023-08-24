import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  return (
    <div className="w-full border rounded-2xl overflow-hidden">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img
            className="object-cover h-96"
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
        </div>
        <div>
          <img
            className="object-cover h-96"
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <div>
          <img
            className="object-cover h-96"
            src="https://images.unsplash.com/photo-1593359863503-f598684c806f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
