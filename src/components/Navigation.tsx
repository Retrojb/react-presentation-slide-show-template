import {Button} from "primereact/button";
import {useState} from "react";
import Slides from "./Slides";

const Navigation = () => {
    const [current, setCurrent] = useState(0);
    const slides = [Slides];
    console.log(slides)
    function goToPrev() {
        if (slides.length > 0 && setCurrent > 0) {
            console.log(slides.length)
            console.log("current")
            setCurrent(current - 1)
        }
    }

    function goToNext() {
        if (current < slides.length - 1 ) {
            console.log(current)
            setCurrent(current + 1)
        }
    }

  return (
      <div className='flex xl:justify-content-between lg:min-w-screen p-2 m-auto'>
          <Button icon="pi pi-angle-left" iconPos="left" label="Previous"  onClick={goToPrev} className='flex align-items-center' />
          <Button icon="pi pi-angle-right" iconPos="right" label="Next" onClick={goToNext}  className='flex align-items-center' />
      </div>
  )
}

export default Navigation;