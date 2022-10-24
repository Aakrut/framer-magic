import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { data1 } from "../constants/data1";

export default function Home() {
  return (
    <>
      <Wrapper as={motion.div}>
        <BgContainer as={motion.div} image={`${"/images/hero-bg.jpg"}`}>
          <div className="content">
            <ButtonIOS>Updated for iOS 16 </ButtonIOS>
            <h1 className="main">
              Mix 3D <br /> and 2D design <br /> with Framer
            </h1>
            <p className="contentp">
              This is a demo showing a fully responsive page with a Spline 3D
              asset with mouse over interaction. It falls back to an image on
              smaller devices.
            </p>
            <div>
              <ButtonHero primary>GET THE APP</ButtonHero>
              <ButtonHero>WATCH VIDEO</ButtonHero>
            </div>
          </div>
        </BgContainer>
      </Wrapper>

      <Container>
        <h1 className="container-title">
          Trusted by 8,000 companies worldwide
        </h1>
        <h5 className="container-content">
          Many teams choose Framer to iterate faster and publish at the blink of
          an eye without complex loops
        </h5>

        <div className="container-comp">
          <img src="/svgs/company-amazon.svg" alt="svg" />
          <img src="/svgs/company-apple.svg" alt="svg" />
          <img src="/svgs/company-facebook.svg" alt="svg" />
          <img src="/svgs/company-airbnb.svg" alt="svg" />
          <img src="/svgs/company-google.svg" alt="svg" />
        </div>

        <div className="container-sep"></div>

        <h2 className="container-p">Publish a site in minutes</h2>

        <div className="container-cards">
          {data1?.map((data) => (
            <div key={data.id} className="container-card">
              <Image
                src={data.icon}
                alt={data.title}
                layout="intrinsic"
                width="32"
                height="32"
              />
              <h3 className="container-card-title">{data.title}</h3>
              <p className="container-card-content">{data.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 100%;
  height: 860px;
  background: papayawhip;
  transition: all 0.35s ease-in-out;
`;

const BgContainer = styled.section`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: papayawhip;
  transition: all 0.35s ease-in-out;

  background: url(${(props) => props.image});
  top: 0;
  left: 0;
  right: 0;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .content {
    font-family: "Manrope", sans-serif;
    display: flex;
    height: 100%;
    width: 460px;
    max-width: 460px;
    margin-left: 50px;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    z-index: 1;
  }

  .main {
    font-size: 40px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 10px #000;
  }

  .contentp {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: light;
    text-shadow: 2px 2px 10px #000;
  }
`;

const ButtonHero = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
      : "rgba(0, 0, 0, 0.5)"};
  padding: 10px;
  color: white;
  border-radius: 24px 24px 0;
  font-family: "Manrope", sans-serif;
  font-weight: semibold;
`;

const ButtonIOS = styled.button`
  width: fit-content;
  font-family: "Manrope", sans-serif;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 4px 16px;
  gap: 10px;
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(7, 8, 24);
  font-family: "Manrope", sans-serif;
  text-align: center;
  gap: 30px;

  .container-title {
    font-size: 22px;
    color: white;
    font-weight: bolder;
  }

  .container-content {
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;
    color: rgba(255, 255, 255, 0.7);
  }

  .container-comp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    width: 100%;
  }

  .container-sep {
    width: 25%;
    height: 1px;
    flex: 0 0 auto;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .container-p {
    color: white;
    font-weight: bolder;
  }

  .container-cards {
    max-width: 800px;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 810px) {
      flex-direction: column;
      max-width: 400px;
      gap: 10px;
      width: 100%;
    }
  }

  .container-card {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 247px;

    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media (max-width: 810px) {
      width: 100%;
      place-content: center flex-start;
      height: 150px;
    }
  }

  .container-card-title {
    color: white;
    font-weight: bolder;
    font-size: 14px;
  }

  .container-card-content {
    color: rgba(255, 255, 255, 0.7);
    font-weight: normal;
    font-size: 14px;
  }
`;
