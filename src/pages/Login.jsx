import React, { useState } from "react";
import styled from "styled-components";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [LoginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  return (
    <PageComponent>
      <FlexBox>
        <LoginTotalComponent>
          <LoginHeader>Login</LoginHeader>
          <LoginInput placeholder="아이디를 입력해주세요." />
          <LoginInput placeholder="비밀번호를 입력해주세요." />
        </LoginTotalComponent>
      </FlexBox>
    </PageComponent>
  );
};

export default Login;

const PageComponent = styled.div`
  width: 100vw;
  height: 100vh;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginTotalComponent = styled.div`
  width: 700px;
  height: 400px;
  border: 1px solid black;
`;

const LoginHeader = styled.h3`
  font-size: 20px;
`;

const LoginInput = styled.input`
  width: 280px;
  height: 40px;
  display: block;
`;
