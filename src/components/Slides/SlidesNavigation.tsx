import {Button} from "primereact/button";
import {useState} from "react";
import Slides from "./Slides";

const SlidesNavigation = ({ routes }) => {
    const [history, setHistory] = useState([Array(20).fill(null)]);
    const [current, setCurrent] = useState(0);
    const currentSlides = history[current];

    function goToPrev() {
        // if (slides.length > 0 && setCurrent > 0) {
        //     console.log(slides.length)
        //     console.log("current")
        //     setCurrent(current - 1)
        // }
    }

    function goToNext(nextSlide) {
      const nextHistory = [...history.slice(0, current + 1), nextSlide]
    }

  return (
      <div className='flex xl:justify-content-between lg:min-w-screen p-2 m-auto'>
          <Button icon="pi pi-angle-left" iconPos="left" label="Previous"  onClick={goToPrev} className='flex align-items-center' />
          <Button icon="pi pi-angle-right" iconPos="right" label="Next" onClick={goToNext}  className='flex align-items-center' />
      </div>
  )
}

export default SlidesNavigation;