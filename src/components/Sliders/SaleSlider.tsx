import { useState } from "react";
import { Slide } from "../../models/Slide";
import { ReactComponent as RightArrow } from "../../images/R-Arrow.svg";
import { ReactComponent as LeftArrow } from "../../images/L-Arrow.svg";
import Placeholder1 from "../../images/Background1.png";
import Placeholder2 from "../../images/Background2.png";
import Placeholder3 from "../../images/Background3.png";
import Placeholder4 from "../../images/Background4.png";
import Placeholder5 from "../../images/Background5.png";
import "./SaleSlider.css";

type SaleSliderData = {
  SliderData: Slide[];
};

const SaleSlider = (props: SaleSliderData) => {
  const [current, setCurrent] = useState(0);

  let SliderData = props.SliderData;

  const length = SliderData.length;
  const SliderDataPlaceholder: string[] = [
    Placeholder1,
    Placeholder2,
    Placeholder3,
    Placeholder4,
    Placeholder5,
  ];
  const length2 = SliderDataPlaceholder.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };


  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return (
      <div className="slider">
        <LeftArrow
          className="left-arrow"
          onClick={prevSlide}
          width={26}
          height={26}
        />
        <RightArrow
          className="right-arrow"
          onClick={nextSlide}
          width={26}
          height={26}
        />
        {SliderDataPlaceholder.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide} alt="" className="Slide_image" />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="slider">
      <LeftArrow className="left-arrow" onClick={prevSlide} />
      <RightArrow className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.imageUrl} alt="" className="Slide_image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SaleSlider;
