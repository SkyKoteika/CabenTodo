
//     let slideIndex = 1;
//     showSlides(slideIndex);
    
//     function plusSlides(n: number) {
//       showSlides(slideIndex += n);
//     }
    
//     function currentSlide(n: number) {
//       showSlides(slideIndex = n);
//     }
//     function showSlides(n: number) {
//         let i;
//         let slides = document.getElementsByClassName("mySlides");
//         let dots = document.getElementsByClassName("dot");
//         if (n > slides.length) {slideIndex = 1}    
//         if (n < 1) {slideIndex = slides.length}
//         for (i = 0; i < slides.length; i++) {
            
//         }
//         for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "");
//         }
        
//         dots[slideIndex-1].className += " active";
//       }


const Carousel = () => {
//    return (
//         <div className="slideshow-container">

//             <div className="mySlides fade">
//                 <div className="numbertext">1 / 3</div>
//                 <img src="img_nature_wide.jpg" />
//                 <div className="text">Caption Text</div>
//             </div>

//             <div className="mySlides fade">
//                 <div className="numbertext">2 / 3</div>
//                 <img src="img_snow_wide.jpg"/>
//                     <div className="text">Caption Two</div>
//             </div>

//             <div className="mySlides fade">
//                 <div className="numbertext">3 / 3</div>
//                 <img src="img_mountains_wide.jpg" />
//                 <div className="text">Caption Three</div>
//             </div>

//             <a className="prev" onClick={plusSlides(-1)}>❮</a>
//             <a className="next" onClick={plusSlides(1)}>❯</a>
//             <br />
//         </div>
  //  )
}

// const dots = () => {
//     return (
//         <div>
//             <span className="dot" onClick={currentSlide(1)}></span>
//             <span className="dot" onClick={currentSlide(2)}></span>
//             <span className="dot" onClick={currentSlide(3)}></span>
//         </div>
//     )
// }


export default Carousel;