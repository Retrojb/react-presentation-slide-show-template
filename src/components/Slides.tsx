import {Card} from "primereact/card";
import styled from "styled-components";
import { Image} from "primereact/image";

const MainCardContainer = styled.div`
  border: solid red 1px;
  display: flex;
  flex-flow: row wrap;
  padding: 1rem;
  align-content: center;
  gap: 40px;
`;

const ContextContainer = styled.section`
  border: solid yellow 2px;
  display: flex;
  flex-flow: column wrap;
  padding: .5rem .2rem .5rem .2rem;
  width: 70%;
`;

const ImageContainer = styled.div`
  border: blue solid 2px; 
  max-width: 25%;
`

const Slides = () => {
    const pages = [ { name: 'foo', title: 'bar' }];
    return (
        <Card title="Intro">
            <MainCardContainer>
                <ContextContainer>
                   <p>Foo Bar Hello World</p>
                </ContextContainer>
                    <ImageContainer>
                        <Image src="" width="auto" height="250px"/>
                    </ImageContainer>
            </MainCardContainer>
        </Card>
    )
}

export default Slides