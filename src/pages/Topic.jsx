/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PETG_img from "../assets/PETG.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import change_img from "../assets/change_img.svg";
import plus_img from "../assets/plus_img.svg";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";

const Topic = () => {
  const [topicList, setTopicList] = useState(null);
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate("/topic/detail");
  };

  const getTopicList = async () => {
    setTopicList([
      {
        id: 0,
        name: "한승우",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        id: 0,

        name: "한승우",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        id: 0,
        name: "한승우",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        id: 0,
        name: "한승우",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        id: 0,
        name: "한승우",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        name: "한승우",
        day: "2024년 1월 1일",
        id: 0,
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
      {
        name: "한승우",
        id: 0,
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
      },
    ]);
  };

  useEffect(() => {
    getTopicList();
  }, []);

  return (
    <PageComponent>
      <Topbar />
      <TopicHeader>
        <Image src={PETG_img} alt="PETG" />
        <NanumTextDiv margin="-19px 0px 0px 0px">내 PETG가 제일 잘하는 것은?</NanumTextDiv>
      </TopicHeader>
      <TopicHeaderBox>
        <TopicHeaderBoxInnerText>총 12개의 토픽이 있어요!</TopicHeaderBoxInnerText>
        <TopicHeaderBoxInnerText margin="0px 0px 0px 651px" fontWeight="500" color="#787878">
          최근 등록순
        </TopicHeaderBoxInnerText>
        <Image margin="0px 2px" src={change_img} alt="change" width="24px" height="24px" />
        <Image src={plus_img} alt="+" width="20px" height="20px" />
      </TopicHeaderBox>
      {topicList !== null ? (
        topicList.map((item) => {
          return (
            <EachTopicBox key={item.id} onClick={navigateToDetail}>
              <EachTopicTextBox>
                <EachTopicFirstLine margin="24px 0px 0px 24px">
                  <EachTopicFirstLineText>{item.name}</EachTopicFirstLineText>
                  <EachTopicFirstLineText margin="0px 4px">|</EachTopicFirstLineText>
                  <EachTopicFirstLineText fontWeight="500">{item.day}</EachTopicFirstLineText>
                </EachTopicFirstLine>
                <EachTopicSecondLineText margin="24px 0px 0px 24px">
                  {item.title}
                </EachTopicSecondLineText>
              </EachTopicTextBox>
              <Image src={item.img} alt="img" width="213px" height="100%" zIndex="1" />
            </EachTopicBox>
          );
        })
      ) : (
        <></>
      )}
    </PageComponent>
  );
};

export default Topic;

const PageComponent = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopicHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px 0px 0px 0px;
`;

const AbsoluteDiv = styled.div`
  position: relative;
  top: ${(props) => props.top || "0px"};
  right: ${(props) => props.right || "0px"};
`;

const Image = styled.img`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "208.191px"};
  margin: ${(props) => props.margin || "0px"};
  object-fit: contain;
  display: block;
  z-index: ${(props) => props.zIndex || "-1"};
`;

const NanumTextDiv = styled.div`
  color: var(--Main, #ec8007);
  text-align: center;
  font-family: NanumSquareOTF_ac;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: ${(props) => props.margin || "0px"};
`;

const TopicHeaderBox = styled.div`
  display: flex;
  align-items: center;
  color: #bbbbbb;
  width: 910px;
  height: 24px;
  margin: 43px 0px 0px 0px;
`;
const TopicHeaderBoxInnerText = styled.div`
  font-family: NanumSquareRound;
  font-style: normal;
  font-size: 14px;
  line-height: 160%; /* 22.4px */
  text-transform: capitalize;
  margin: ${(props) => props.margin || "0px"};
  color: ${(props) => props.color || "#bbb"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

const EachTopicBox = styled.div`
  display: flex;
  width: 910px;
  height: 109px;
  justify-content: center;
  border-radius: 16px;
  background: var(--White, #fff);

  /* card */
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.05);
  flex: 1 0 0;
  background: var(--White, #fff);
  margin: 20px 0px 0px 0px;
`;
const EachTopicTextBox = styled.div`
  width: 696px;
  height: 100%;
`;
const EachTopicFirstLine = styled.div`
  display: flex;
  margin: ${(props) => props.margin || "0px"};
`;
const EachTopicFirstLineText = styled.div`
  color: var(--gray-300, #bbb);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 12px;
  font-style: normal;
  line-height: 160%; /* 19.2px */
  text-transform: lowercase;
  font-weight: ${(props) => props.fontWeight || "400"};
  margin: ${(props) => props.margin || "0px"};
`;

const EachTopicSecondLineText = styled.div`
  color: var(--Text-1, #1e1e1e);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  align-self: stretch;
  margin: ${(props) => props.margin || "0px"};
`;
