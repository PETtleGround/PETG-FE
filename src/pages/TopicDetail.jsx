/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PETG_img from "../assets/PETG.svg";
import Topbar from "../components/Topbar";
import BlankHeart from "../assets/blank_heart.svg";
import ParticipateModal from "../components/ParticipateModal";

const TopicDetail = () => {
  const [petList, setPetList] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const getTopicList = async () => {
    setPetList([
      {
        id: 0,
        name: "한승우",
        day: "2024년 1월 1일",
        category: "육군",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        id: 0,

        name: "한승우",
        day: "2024년 1월 1일",
        category: "육군",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        id: 0,
        name: "한승우",
        category: "육군",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        id: 0,
        name: "한승우",
        category: "육군",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        id: 0,
        name: "한승우",
        category: "육군",
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        name: "한승우",
        category: "육군",
        day: "2024년 1월 1일",
        id: 0,
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
      },
      {
        name: "한승우",
        category: "육군",
        id: 0,
        day: "2024년 1월 1일",
        title: "물구나무 잘 서는 PETG 다모여",
        img: PETG_img,
        heart: 213,
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
        <NanumTextDiv>물구나무 잘 서는 PETG 다모여</NanumTextDiv>
        <WriteButton onClick={openModalHandler}>참전하기</WriteButton>
        <ParticipateModal isOpen={isModalOpen} onClose={closeModalHandler} />
      </TopicHeader>
      <PetListTotal>
        {petList !== null ? (
          petList.map((item) => {
            return (
              <PetDetailBox key={item.id}>
                <Image
                  src={item.img}
                  alt="pet"
                  zIndex="1"
                  width="235px"
                  height="246px"
                  borderRadius="200px"
                  margin="24px 0px 0px 0px"
                />
                <PetDetailTitle margin="21px 0px 0px 0px">{item.title}</PetDetailTitle>
                <RowFlex>
                  {" "}
                  <PetDetailName>{item.name}</PetDetailName>
                  <PetDetailCategory>{item.category}</PetDetailCategory>
                  <Image src={BlankHeart} alt="heart" width="24px" height="24px" />
                  <HeartText>{item.heart}</HeartText>
                </RowFlex>
              </PetDetailBox>
            );
          })
        ) : (
          <></>
        )}
      </PetListTotal>
    </PageComponent>
  );
};

export default TopicDetail;

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
  border-radius: ${(props) => props.borderRadius || "0px"};
`;

const NanumTextDiv = styled.div`
  color: var(--sub-2, #ec8007);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const WriteButton = styled.button`
  position: absolute;
  width: 80px;
  height: 30px;
  top: 311px;
  right: 265px;
  color: var(--sub-2, #ffc47e);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: capitalize;
  border-radius: 8px;
  background: var(--Main, #ec8007);
  color: var(--White, #fff);
  font-family: NanumSquareRound;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 22.4px */
  border: none;
`;
const PetListTotal = styled.div`
  width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px 0px 0px 0px;
  padding-bottom: 100px;
`;

const PetDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 370px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 2px solid var(--Main, #ec8007);
  background: rgba(255, 255, 255, 0.64);
  padding: 12px 20px;
`;

const PetDetailTitle = styled.div`
  color: var(--Text-1, #1e1e1e);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: capitalize;
  margin: ${(props) => props.margin || "0px"};
`;

const RowFlex = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: 21px 0px 0px 0px;
`;
const PetDetailName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const PetDetailCategory = styled.div`
  display: inline-flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--gray-100, #f3f3f3);
  color: var(--gray-400, #787878);
  font-family: NanumSquareRound;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  text-transform: lowercase;
  margin: 0px 3px 0px 8px;
`;
const HeartText = styled.div`
  color: #000;
  font-family: NanumSquareRound;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 19.2px */
  text-transform: lowercase;
  margin: 0px 21px 0px 6px;
`;
