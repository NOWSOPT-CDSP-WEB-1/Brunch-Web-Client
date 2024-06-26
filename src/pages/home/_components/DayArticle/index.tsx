import { NTag } from '@components';
import styled from '@emotion/styled';
import { WeekdaysData } from '@pages/home/HomeDay';
import axios from 'axios';
import { useEffect, useState } from 'react';

export type dayType = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY' | string;
type sortType = '최신순' | '라이킷순';
type Article = {
  bookTitle: string;
  postingTitle: string;
  authorName: string;
  imageUrl: string;
};

const index = () => {
  const [selectedDay, setSelectedDay] = useState<dayType>('TUESDAY');
  const [selectedSort, setSelectedSort] = useState<sortType>('최신순');
  const [articles, setArticles] = useState<Article[]>([]);
  const [articles2, setArticles2] = useState<Article[]>([]);

  // eslint-disable-next-line no-unused-vars
  const DayMapping: { [key in dayType]: string } = {
    MONDAY: '월',
    TUESDAY: '화',
    WEDNESDAY: '수',
    THURSDAY: '목',
    FRIDAY: '금',
    SATURDAY: '토',
    SUNDAY: '일',
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://www.sopt-brunch.p-e.kr/api/v1/postings/serialized?day=${selectedDay}`
        );

        const data = response.data.data.recentPostings;
        const data2 = response.data.data.likePostings;

        setArticles(data);
        setArticles2(data2);
      } catch (error) {
        console.error('에러메세지', error);
      }
    };
    fetchArticles();
  }, [selectedDay]);

  const handleDayClick = (day: dayType) => {
    setSelectedDay(day);
  };

  const handleSortClick = (sort: sortType) => {
    setSelectedSort(sort);
  };
  return (
    <DayArticleContainer>
      <DayHeaderWrapper>
        <DayHeader>요일별 연재</DayHeader>
        <DayHeader2>브런치북 요일별 연재를 만나보세요</DayHeader2>
        <DayButtonWrapper>
          {WeekdaysData.map((day: dayType) => (
            <DayButton className={day === selectedDay ? 'selected' : ''} key={day} onClick={() => handleDayClick(day)}>
              {DayMapping[day]}
            </DayButton>
          ))}
        </DayButtonWrapper>
      </DayHeaderWrapper>
      <SpanWrapper>
        <DayDiv onClick={() => handleSortClick('최신순')}>
          {selectedSort === '최신순' && <SpanImg src="Ellipse 10.svg" alt="점" />}
          <DaySpan>최신순</DaySpan>
        </DayDiv>
        <DayDiv onClick={() => handleSortClick('라이킷순')}>
          {selectedSort === '라이킷순' && <SpanImg src="Ellipse 10.svg" alt="점" />}
          <DaySpan>라이킷순</DaySpan>
        </DayDiv>
      </SpanWrapper>
      <DayArticleWrapper>
        <WrapperUl>
          {(selectedSort === '최신순' ? articles : articles2).map((article, index) => (
            <WrapperFont key={index}>
              <WrapDiv className="wrapper">
                <span className="font">
                  <div>
                    <WrapH1>{article.bookTitle}</WrapH1>
                    <TitleWrapper>
                      <WrapH2>{article.postingTitle}</WrapH2>
                      <NTag />
                    </TitleWrapper>
                  </div>
                  <H3Gap>
                    <WrapH3>by</WrapH3>
                    <WrapH4>{article.authorName}</WrapH4>
                  </H3Gap>
                </span>
                <WrpperImg src={article.imageUrl} alt="article thumbnail" />
              </WrapDiv>
            </WrapperFont>
          ))}
        </WrapperUl>
      </DayArticleWrapper>
      <WrapperDiv>
        <ButtonWrapper>
          <FooterText>연재 작품 전체 보기</FooterText>
          <FrameImg src="Frame 160.svg" alt="frame" />
        </ButtonWrapper>
      </WrapperDiv>
    </DayArticleContainer>
  );
};

export default index;

const DayArticleContainer = styled.section`
  margin-top: 33.7rem;
`;

const DayHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;

  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray02};
`;

const DayHeader = styled.div`
  color: ${({ theme }) => theme.color.gray10};
  text-align: center;

  ${({ theme }) => theme.font.body4_regular};
`;

const DayHeader2 = styled.div`
  color: var(--gray08, #909090);
  text-align: center;

  ${({ theme }) => theme.font.detail4_3};
`;

const DayButtonWrapper = styled.div`
  display: flex;
  gap: 3.4rem;
  margin-top: 2.3rem;
`;

const SpanWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1.7rem;
  margin-bottom: 1.4rem;
`;

const DayButton = styled.button`
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 40.117px;
  height: 35px;
  margin-bottom: -0.1rem;
  padding: 8px;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail2};

  &.selected {
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.mint01};
  }
`;

const DayDiv = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: flex-end;
  width: 4.5rem;

  cursor: pointer;
`;

const DaySpan = styled.span`
  align-content: center;

  color: ${({ theme }) => theme.color.gray09};
  ${({ theme }) => theme.font.detail4_3};
`;

const SpanImg = styled.img`
  width: 4px;
  height: 4px;
`;

const WrapperUl = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 18px;
  align-content: center;
  align-items: center;
  width: 688px;
  margin-top: 4px;
`;

const WrapperFont = styled.div`
  width: 335px;
  height: 86px;
  padding: 18px 14px;

  border: 1px solid #eee;
`;

const WrpperImg = styled.img`
  width: 56px;
  height: 58px;
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const WrapDiv = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;

const WrapH1 = styled.div`
  color: ${({ theme }) => theme.color.gray08};
  font-weight: 400;
  font-size: 9px;

  ${({ theme }) => theme.font.detail4_3};
`;

const WrapH2 = styled.div`
  position: relative;
  max-width: 20.5rem;
  margin-top: 0.2rem;
  margin-right: 0.4rem;
  overflow: hidden;

  color: ${({ theme }) => theme.color.gray09};
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.font.detail1};
`;

const WrapH3 = styled.span`
  margin-top: 9px;

  color: ${({ theme }) => theme.color.gray05};
  font-weight: 400;
  font-size: 9px;

  ${({ theme }) => theme.font.caption2};
`;

const WrapH4 = styled.span`
  margin-top: 9px;

  color: ${({ theme }) => theme.color.gray05};
  ${({ theme }) => theme.font.detail4_3};
`;

const H3Gap = styled.div`
  display: flex;
  gap: 2px;
`;

const FooterText = styled.span`
  padding-top: 0.2rem;

  color: ${({ theme }) => theme.color.gray09};
  font-weight: 400;
  font-size: 9px;
  ${({ theme }) => theme.font.detail4_3};
`;
const FrameImg = styled.img`
  margin-top: 2.5px;
`;

const DayArticleWrapper = styled.div`
  padding-bottom: 0.9rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray02};
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3.9rem;
  margin-bottom: 10.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.9rem;
  height: 28px;

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.gray04};
  border-radius: 30px;
`;
