import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Logo src={logo} onClick={navigateToHome} />
      <SignInButton onClick={navigateToSignUp}>로그인/회원가입</SignInButton>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 60px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 68px;
  height: 40px;
`;

const SignInButton = styled.button`
  display: flex;
  height: 36px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #ffa33c;
  color: white;
  font-family: NanumSquareRound;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  border: none;
`;
