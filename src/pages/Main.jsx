/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PETG_img from "../assets/PETG.svg";

const Main = () => {
  return (
    <PageComponent>
      <div>메뉴바</div>
      <MainHeader>
        <Image src={PETG_img} alt="PETG" />
        <NanumTextDiv margin="-24px 0px 0px 0px">핫한 토픽 둘러보기</NanumTextDiv>
        <InterTextDiv>지금 바로 나의 PETG를 저장해보세요</InterTextDiv>
        <InterTextDiv margin="7px 0px 0px 0px">현재 인기 많은 아이는?</InterTextDiv>
      </MainHeader>
    </PageComponent>
  );
};

export default Main;

const PageComponent = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 0px 0px;
`;
const Image = styled.img`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "236px"};
  object-fit: contain;
  display: block;
  z-index: -1;
`;
const NanumTextDiv = styled.div`
  color: var(--Text-1, #1e1e1e);
  font-family: NanumSquareRound;
  font-size: 32px;
  font-style: normal;
  text-align: center;
  font-weight: 400;
  width: 329px;
  height: 47px;
  line-height: normal;
  margin: ${(props) => props.margin || "0px"};
`;

const InterTextDiv = styled.div`
  color: #000;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: ${(props) => props.fontSize || "20px"};
  margin: ${(props) => props.margin || "0px"};
`;
