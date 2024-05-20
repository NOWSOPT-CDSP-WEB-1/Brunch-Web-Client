import { Icon } from '@components';
import styled from '@emotion/styled';
import { icons } from '@styles/icons';
import { useEffect, useState } from 'react';

import FocusBook from './FocusBook';

export default function RecentBook() {
  //여기서 최근 읽었던 책 목록 조회 -> recentBooks get
  const recentBooks = [
    {
      id: 1,
      title: '칼 든 괴한에게 쫓긴 밤',
      authorName: '노마드',
      bookImage: 'null',
      description:
        '새벽 4시, 밀라노를 걷다 칼 든 괴한에게 쫓겼습니다. 밀라노에 이르기까지의 여정, 그 밤, 그리고 하루하루를 살아가며 트라우마를 극복해가는 과정을 담았습니다. 죽을 위기를 넘기며 맞이한 가치관의 변화와 배운 교훈, 그리고 이후의 삶에 대해, 이제서야 써내릴 수 있어 글로 풀어냅니다.',
      episode: 8, //focus 됐을 때 -화
      requiredTime: 15, //focus 됐을 때
      progress: 70,
      lastViewed: '2024-01-17T11:19:06',
    },
    {
      id: 2,
      title: '씁!! 가만히 좀 있어',
      authorName: '노란콩',
      bookImage: 'null',
      description: '가만히 쉬는게 너무 어려운 사람이 살아가는 법.',
      episode: 6,
      requiredTime: 30,
      progress: 50,
      lastViewed: '2024-02-17T11:19:03',
    },
  ];
  //focusIndex는 가운데 크게 나올 친구 인덱스지정
  const [focusIndex, setFocusIndex] = useState<number>(0);
  //그리고 옆에 돌아가는거는 이 focusIndex를 기준으로 원형으로 만들어서 돌리기
  useEffect(() => {
    setFocusIndex(0);
  }, []);
  return (
    <Container>
      <LeftBody>
        <TitleContainer>
          <Title>최근 본 브런치북</Title>
          <Icon icon={icons.arrow_forward_ios} size="1.2rem" color="#3D3D3D" />
        </TitleContainer>
        <FocusBook
          id={recentBooks[focusIndex].id}
          title={recentBooks[focusIndex].title}
          authorName={recentBooks[focusIndex].authorName}
          bookImage={recentBooks[focusIndex].bookImage}
          description={recentBooks[focusIndex].description}
          episode={recentBooks[focusIndex].episode}
          requiredTime={recentBooks[focusIndex].requiredTime}
          progress={recentBooks[focusIndex].progress}
          lastViewed={recentBooks[focusIndex].lastViewed}
        />
      </LeftBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 28.4rem;
`;

const LeftBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.4rem;
  height: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.p`
  ${({ theme }) => theme.font.detail2}
  color: ${({ theme }) => theme.color.gray11}
`;
