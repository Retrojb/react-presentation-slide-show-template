import {Button} from "primereact/button";
import {ProgressBar} from "primereact/progressbar";
import {useState} from "react";
import Slides from "./Slides";
import styled from "styled-components";

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

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
      <BtnContainer>
          <Button icon="pi pi-angle-left" label="Previous"  onClick={goToPrev} />
          <Button icon="pi pi-angle-right" iconPos="right" label="Next" onClick={goToNext} />
      </BtnContainer>
  )
}

export default Navigation;