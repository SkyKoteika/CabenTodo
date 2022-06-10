import { useState, useEffect } from "react";
import useBackend from "../../hooks/useBackend";
import { Slide } from "../../models/Slide";
import SaleSlider from "./SaleSlider";

const SaleSliderBuilder = () => {
    const [sliderData, setSliderData] = useState<Slide[]>([])
    const backend = useBackend();
    useEffect(() => {
        backend.getSaleSliderData().then(setSliderData);
    }, [backend]);
    return <SaleSlider SliderData={sliderData} />
}

export default SaleSliderBuilder;

