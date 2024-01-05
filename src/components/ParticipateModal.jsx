import React, { useState } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const ParticipateModal = ({ isOpen, onClose }) => {
  const [selectedType, setSelectedType] = useState();

  const handleTypeSelect = (e) => {
    e.preventDefault();
    setSelectedType(e.target.value);
  };

  return (
    <div>
      {isOpen ? (
        <Wrapper>
          <CloseButton
            src="https://raw.githubusercontent.com/MinJaeSon/assets/f182363f5313d93e96d5207715ba71c80491acc8/close.svg"
            onClick={onClose}
          />
          <h3>내 PETG 자랑하기</h3>
          <Form>
            <UploadSection>
              <img
                src="https://raw.githubusercontent.com/MinJaeSon/assets/a25e1da2d65c3a03a493d02768c9415f7a58684a/image_upload.svg"
                alt="갤러리 아이콘"
              />
            </UploadSection>
            <TypeSelectBox>
              <TypeButton
                value="육군"
                onClick={handleTypeSelect}
                selected={selectedType === "육군"}
              >
                육군
              </TypeButton>
              <TypeButton
                value="해군"
                onClick={handleTypeSelect}
                selected={selectedType === "해군"}
              >
                해군
              </TypeButton>
              <TypeButton
                value="공군"
                onClick={handleTypeSelect}
                selected={selectedType === "공군"}
              >
                공군
              </TypeButton>
            </TypeSelectBox>
            <ContentSection placeholder="배틀을 작성해주세요"></ContentSection>
            <Button>등록하기</Button>
          </Form>
        </Wrapper>
      ) : null}
    </div>
  );
};

export default ParticipateModal;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 800px;
  height: 682px;
  padding: 40px 61px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #e8e8e8;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

// const ModalBackdrop = styled.div`
//   z-index: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(235, 235, 235, 0.4);
//   border-radius: 10px;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// `;

const CloseButton = styled.img`
  position: absolute;
  top: 40px;
  right: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UploadSection = styled.div`
  border-radius: 200px;
  border: 2px dashed #a9a9a9;
  width: 196.5px;
  height: 197px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75.255px;
    height: 72.073px;
  }
`;

const TypeSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const TypeButton = styled.button`
  width: 158px;
  height: 54px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  background: #fff;
  color: #787878;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
  ${(props) =>
    props.selected &&
    `
      background: #EC8007;
      color: #fff;
    `}
`;

const ContentSection = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 24px 20px;
  gap: 20px;
  flex: 1 0 0;
  border-radius: 12px;
  border: none;
  margin-top: 8px;
  background: #f3f3f3;
  margin-bottom: 12px;
  margin-top: 40px;
`;

const Button = styled.button`
  border-radius: 12px;
  background: #ec8007;
  color: #fff;
  display: flex;
  width: 494px;
  height: 56px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1rem;
  font-family: NanumSquareRound;
`;
