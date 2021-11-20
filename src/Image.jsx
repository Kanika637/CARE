import React from "react";
import "./Image.css"
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://i.pinimg.com/564x/18/41/cf/1841cf6951a5a34b203fa3e841c7d6b3.jpg"},
  { url: "https://i.pinimg.com/564x/dc/7f/be/dc7fbe51abcd136d8124850381f5a36d.jpg" },
 
  
];
const divStyle = {
margin: -21
};

const Image = () => {
  return (
    <div className="pic">
      <SimpleImageSlider
        width={1540}
        height={1200}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        
        style={divStyle}
        
      />
    </div>
  );
}
export default Image