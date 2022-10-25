import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { data1 } from "../constants/data1";
import { Header } from "../components";

export default function Home() {
  return (
    <>
      <Wrapper as={motion.div}>
        <BgContainer
          as={motion.div}
          image={`${"/images/hero-bg.jpg"}`}
          mobimage={`${"/images/hero-bg-mobile.jpg"}`}
        >
          <div className="content">
            <ButtonIOS>
              Updated for iOS 16{" "}
              <Image
                src="/svgs/arrow-right-duotone.svg"
                className="hero-device-icon"
                alt="Play"
                layout="intrinsic"
                width="15"
                height="15"
              />{" "}
            </ButtonIOS>
            <h1 className="main">
              Mix 3D <br /> and 2D design <br /> with Framer
            </h1>
            <p className="contentp">
              This is a demo showing a fully responsive page with a Spline 3D
              asset with mouse over interaction. It falls back to an image on
              smaller devices.
            </p>
            <div className="hero-btns">
              <ButtonHero primary>
                {" "}
                <Image
                  src="/svgs/device-mobile-duotone.svg"
                  className="hero-device-icon"
                  alt="Play"
                  layout="intrinsic"
                  width="30"
                  height="30"
                />{" "}
                GET THE APP
              </ButtonHero>
              <ButtonHero>
                {" "}
                <Image
                  src="/svgs/play-duotone.svg"
                  alt="Play"
                  layout="intrinsic"
                  width="30"
                  height="30"
                />{" "}
                WATCH VIDEO
              </ButtonHero>
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

      <ContainerComponents image={`${"/images/wallpaper1.jpg"}`}>
        <div className="mockups-1">
          <div className="mockups-1-image-1">
            <div className="mockup-content-1">
              <div className="mockup-content-first">
                <h3>LAC SUPERIEUR</h3>
                <p>30 mins ago</p>
                <span>3,054 STEPS</span>
              </div>

              <div className="mockup-content-second">
                <button>VISIT</button>
                <span>3% HIGHER</span>
              </div>
            </div>
          </div>

          <div className="mockups-1-image-2">
            <div className="mockup-content-2">
              <div className="mockup-content-first">
                <h3>COIT TOWER</h3>
                <p>21 mins ago</p>
                <span>3,054 STEPS</span>
              </div>

              <div className="mockup-content-second">
                <button>VISIT</button>
                <span>3% HIGHER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mockups-2"></div>
        <div className="container-component-main">
          <Image
            src="/svgs/rocket-duotone.svg"
            className="hero-device-icon"
            alt="Play"
            layout="intrinsic"
            width="30"
            height="30"
          />{" "}
          <h1 className="container-component-title">
            Many types of components to customize
          </h1>
          <p className="container-component-content">
            Build a website without writing a single line of code using Framer
            components and customizing the entire content
          </p>
          <button className="container-component-button">
            <Image
              src="/svgs/cards-duotone.svg"
              className="hero-device-icon"
              alt="Play"
              layout="intrinsic"
              width="30"
              height="30"
            />{" "}
            Learn More
          </button>
          <div className="container-component-divider"></div>
          <p className="container-component-text">
            Grow your business, reach new audiences, and hit your goals with
            integrations.
          </p>
        </div>
      </ContainerComponents>
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

  @media (max-width: 810px) {
    background: url(${(props) => props.mobimage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

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

    @media (max-width: 809px) {
      display: flex;
      flex-flow: column nowrap;
      place-content: center flex-start;
      align-items: center;
      gap: 20px;
      max-width: 800px;
      width: 100%;
      height: min-content;
      inset: 100px auto auto 0px;
      flex: 0 0 auto;
      transform: none;
      aspect-ratio: unset;
      margin-left: 0;
      padding-top: 120px;
      text-align: center;
      text-shadow: none;
    }
  }

  .main {
    font-size: 40px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 10px #000;

    @media (max-width: 809px) {
      text-shadow: none;
    }
  }

  .contentp {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: light;
    text-shadow: 2px 2px 10px #000;

    @media (max-width: 809px) {
      text-shadow: none;
    }
  }

  .hero-btns {
    display: flex;
    gap: 20px;

    @media (max-width: 809px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 20px;
    }
  }
`;

const ButtonHero = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
      : "rgba(0, 0, 0, 0.4)"};
  padding: 10px;
  color: white;
  border-radius: 24px 24px 0;
  font-family: "Manrope", sans-serif;
  font-weight: semibold;
  font-size: 14px;
  font-weight: bold;
  backdrop-filter: blur(30px);
  border: none;
  outline: none;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 220px;
  transition: all 0.3s ease-in-out;

  border-style: ${(props) => (props.primary ? null : "solid")};
  border-width: ${(props) => (props.primary ? null : `1px`)};
  border-color: ${(props) =>
    props.primary ? null : "rgba(255, 255, 255, 0.2)"};

  .hero-device-icon {
    transform: rotate(0deg);
    transition: all 0.6s ease-in-out;
  }

  :hover {
    background: ${(props) =>
      props.primary
        ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
        : "rgba(0, 0, 0, 0.1)"};
    gap: 20px;

    .hero-device-icon {
      -webkit-transform: rotateZ(90deg);
      -moz-transform: rotateZ(90deg);
      -ms-transform: rotateZ(90deg);
      -o-transform: rotateZ(90deg);
      transform: rotateZ(90deg);
    }
  }
`;

const ButtonIOS = styled.button`
  width: fit-content;
  font-family: "Manrope", sans-serif;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  border: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 4px 16px;
  gap: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 810px) {
    font-size: 12px;
  }
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

    @media (max-width: 810px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;

      img {
        margin: 10px 0;
      }
    }
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

const ContainerComponents = styled.section`
  background: url(${(props) => props.image});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  font-family: "Manrope", sans-serif;
  padding: 100px 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    padding: 80px 20px;
  }

  .mockups-1 {
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .mockups-1-image-1 {
    background: url("https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 40px 0 40px 40px;
    position: relative;
  }

  .mockups-1-image-2 {
    background: url("https://images.unsplash.com/photo-1641391503184-a2131018701b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
    width: 300px;
    height: 400px;
    border-radius: 40px 0 40px 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .mockup-content-1 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .mockup-content-2 {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(30px);
    border-radius: 40px 40px 40px 40px;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .mockup-content-first {
  }

  .mockup-content-second {
    display: flex;
    flex-direction: column;
  }

  .container-component-main {
    display: flex;
    flex-flow: column nowrap;
    place-content: center flex-start;
    text-align: center;
    align-items: center;
    gap: 30px;
    max-width: 400px;
    width: 100%;
  }

  .container-component-title {
    color: white;
    font-size: 50px;
    font-weight: bolder;
  }

  .container-component-content {
    color: white;
    font-size: 18px;
  }

  .container-component-button {
    cursor: pointer;
    background: ${(props) =>
      props.primary
        ? "linear-gradient(135deg, rgb(177, 117, 255) 0%, rgb(28, 20, 255) 100%)"
        : "rgba(0, 0, 0, 0.7)"};
    padding: 10px;
    color: white;
    border-radius: 24px 24px 0;
    font-family: "Manrope", sans-serif;
    font-weight: semibold;
    font-size: 14px;
    font-weight: bold;
    backdrop-filter: blur(30px);
    border: none;
    outline: none;
    display: flex;
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 220px;
    transition: all 0.3s ease-in-out;

    border-style: ${(props) => (props.primary ? null : "solid")};
    border-width: ${(props) => (props.primary ? null : `1px`)};
    border-color: ${(props) =>
      props.primary ? null : "rgba(255, 255, 255, 0.2)"};
  }

  .container-component-divider {
    width: 50%;
    background: rgba(255, 255, 255, 0.3);
    height: 1px;
  }

  .container-component-text {
    color: rgba(255, 255, 255, 0.8);
  }
`;
