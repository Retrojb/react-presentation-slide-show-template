import PageSlides from "./components/PageSlides";
import Navigation from "./components/Navigation";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  min-width: 320px;
  min-height: 75vh;
  height:100%;
`;

const SlideContainer = styled.div`
  display: flex;
  width:100%;
  height:90%;
  border: green solid 2px;
  margin-bottom: 2rem;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
function App() {
  return (
    <MainContainer>
        <SlideContainer>
          <PageSlides />
        </SlideContainer>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
    </MainContainer>
  )
}

export default App
