import React from "react";
import styled from "styled-components";

const SignUpSuccess = () => {
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <Wrapper>
      <img
        src="https://raw.githubusercontent.com/MinJaeSon/assets/296d931e80748c9dd2fe9cc12924d2076d5685c6/con_icon.svg"
        alt="축하하는 아이콘"
      />
      <h3>회원가입이 완료되었어요!</h3>
      <p>로그인하고 나만의 영상 아카이빙을 시작해요</p>
      <button onClick={navigateToHome}>홈 화면으로 가기</button>
    </Wrapper>
  );
};

export default SignUpSuccess;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px;
  img {
    width: 156px;
    height: 156px;
    margin-bottom: 20px;
  }
  h3 {
    color: #ec8007;
    font-family: NanumSquareRound;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
  }
  p {
    color: #bbb;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    margin-top: 8px;
    margin-bottom: 60px;
  }
  button {
    display: flex;
    width: 494px;
    height: 56px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    background: #ec8007;
    color: #fff;
    border: none;
    font-family: NanumSquareRound;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
