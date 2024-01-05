/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PETG_img from "../assets/PETG.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trophy_img from "../assets/trophy.svg";

const Main = () => {
  return (
    <PageComponent>
      <div>메뉴바</div>
      <MainHeader>
        <Image src={PETG_img} alt="PETG" />
        <NanumTextDiv margin="-24px 0px 0px 0px">토픽 TOP3</NanumTextDiv>
        <InterTextDiv>지금 바로 나의 PETG를 저장해보세요</InterTextDiv>
        <InterTextDiv margin="7px 0px 0px 0px">현재 인기 많은 PETG는?</InterTextDiv>
      </MainHeader>
      {/* slick 슬라이드 */}

      <ButtonDiv margin="95px 0px 0px 0px">모든 토픽 보러가기</ButtonDiv>
      <TrophyImage width="97.656px" height="94px" src={trophy_img} alt="trophy" />
    </PageComponent>
  );
};

export default Main;

const PageComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "236px"};
  object-fit: contain;
  display: block;
  z-index: -1;
`;

const TrophyImage = styled.img`
  position: absolute;
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "236px"};
  object-fit: contain;
  display: block;
  z-index: -1;
  bottom: 77px;
  right: 56.34px;
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

const ButtonDiv = styled.button`
  display: flex;
  width: 600px;
  height: 58px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  background: var(--Main, #ec8007);
  color: var(--White, #fff);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  border: none;
  margin: ${(props) => props.margin || "0px"};
`;
