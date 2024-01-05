/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PETG_img from "../assets/PETG.svg";
import Topbar from "../components/Topbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trophy_img from "../assets/trophy.svg";
import dummy from "../dummy.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();
  const navigateToAll = () => {
    navigate("/topic");
  };

  const [hotItems, setHotItems] = useState(null);

  useEffect(() => {
    // fetchHotItems();
  }, []);

  // const fetchHotItems = async () => {
  //   try {
  //     const res = await axios.get(
  //       "http://ec2-43-201-127-147.ap-northeast-2.compute.amazonaws.com:8080/v1/api/topic",
  //     );
  //     console.log(res);
  //     setHotItems(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <PageComponent>
      <Topbar />
      <MainHeader>
        <Image
          src="https://raw.githubusercontent.com/MinJaeSon/assets/3ae20162d9140b9992bc25c6024bb94fffa7c2ab/letter_logo.svg"
          alt="PETG"
        />
        <NanumTextDiv margin="-24px 0px 0px 0px">토픽 TOP3</NanumTextDiv>
        <InterTextDiv>지금 바로 나의 PETG를 저장해보세요</InterTextDiv>
        <InterTextDiv margin="7px 0px 0px 0px">현재 인기 많은 PETG는?</InterTextDiv>
      </MainHeader>
      <ListWrapper>
        {dummy.hotItems.map((item) => (
          <CardWrapper key={item.id}>
            <h4>{item.topic}</h4>
            <img src={item.img} alt={item.topic} />
            <p>
              {item.name}({item.nickname})
            </p>
          </CardWrapper>
        ))}
      </ListWrapper>
      <ButtonDiv margin="95px 0px 0px 0px" onClick={navigateToAll}>
        모든 토픽 보러가기
      </ButtonDiv>
      <TrophyImage width="97.656px" height="94px" src={trophy_img} alt="trophy" />
    </PageComponent>
  );
};

export default Main;

const PageComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
  height: 60px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const TrophyImage = styled.img`
  position: fixed;
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "236px"};
  object-fit: contain;
  display: block;
  z-index: -1;
  bottom: 68px;
  right: 56.34px;
`;

const NanumTextDiv = styled.div`
  color: #ec8007;
  font-family: NanumSquareRound;
  font-size: 1.8rem;
  margin-top: -20px;
  font-style: normal;
  text-align: center;
  font-weight: 600;
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
  font-size: 1rem;
  line-height: normal;
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin || "0px"};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border: 2px solid #ec8007;
  width: 300px;
  height: 340px;
  padding: 16px 36px 16px 36px;
  img {
    border-radius: 10px;
    width: 240px;
    height: 240px;
  }
  h4,
  p {
    color: #1e1e1e;
    font-family: NanumSquareRound;
    font-size: 16px;
    font-style: normal;
  }
  &:not(:last-of-type) {
    margin-right: 40px;
  }
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
  margin-top: 60px;
  margin-bottom: 80px;
`;
