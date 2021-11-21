import React from "react";
import "./Image.css"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.pinimg.com/564x/18/41/cf/1841cf6951a5a34b203fa3e841c7d6b3.jpg"},
  { url: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2011/12/cute-animal-red-panda-2.jpg" },
 
  
];


const Image = () => {
  return (
    <div className="pic">
      <SimpleImageSlider
        width={1519}
        height={900}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        
        
      />
    </div>
  );
}
export default Image