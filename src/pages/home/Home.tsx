import { Header, Footer } from '@components';
import styled from '@emotion/styled';

import Apply from './_components/Apply';
import Article from './_components/Aricle';
import DayArticle from './_components/DayArticle';
import KeywordTable from './_components/KeywordTable';
import MainCarousel from './_components/MainCarousel';
import MainIntro from './_components/MainIntro';
import MainWriter from './_components/MainWriter';

const Home = () => {
  return (
    <Homecontainer>
      <BannerWrapper>
        <BannerImg src="banner.svg" alt="banner" />
        <BannerCloseImg src="banner-close.svg" alt="banner-close" />
      </BannerWrapper>
      <Header />
      <MainContainer>
        <MainIntro />
        <MainCarousel />
        <KeywordTable />
        <DayArticle />
        <MainWriter />
        <Apply />
        <Article />
      </MainContainer>
      <Footer />
    </Homecontainer>
  );
};

export default Home;

const Homecontainer = styled.div`
  width: 100%;
`;

const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 34.2rem;
`;

const BannerCloseImg = styled.img`
  position: absolute;
  top: 14.7rem;
  left: 108.7rem;
  display: flex;

  cursor: pointer;
`;

const MainContainer = styled.main`
  margin-top: 1rem;
  padding: 0 33.9rem;
`;
