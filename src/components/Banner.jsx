import styled from "styled-components";

const BannerContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-image: url("src/assets/images/banner.svg");
`;

const InfoBanner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    width: 30%;
  }
`;

const InfoCard = styled.div`
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h3 {
    font-size: 1.5rem;
    padding: 20px 0px;
  }
`;

const InfoVideo = styled.div`
  display: flex;
  justify-content: center;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <InfoBanner>
        <InfoCard>
          <h3>Challenge React</h3>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </InfoCard>
        <InfoVideo>
          <iframe
            width="560"
            height="260"
            src="https://www.youtube.com/embed/ov7vA5HFe6w?si=opTSSlFuHLFl1PwR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </InfoVideo>
      </InfoBanner>
    </BannerContainer>
  );
};

export default Banner;
