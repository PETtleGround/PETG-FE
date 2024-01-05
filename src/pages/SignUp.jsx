import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const [dragOver, setDragOver] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [selectedSex, setSelectedSex] = useState();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const handleTypeSelect = (e) => {
    e.preventDefault();
    setSelectedType(e.target.value);
  };

  const handleSexSelect = (e) => {
    e.preventDefault();
    setSelectedSex(e.target.value);
  };

  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData();
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          console.log(e, ".... file[" + i + "].name = " + file.name);
          formData.append("image", file);
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        console.log(e, "... file[" + i + "].name = " + e.dataTransfer.files[i].name);
        formData.append("image", e.dataTransfer.files[i]);
      }
    }
    // axios.post(`/api/workspaces/${workspace}/channels/${channel}/images`, formData).then(() => {
    //   setDragOver(false);
    //   revalidate();
    // });
  }, []);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
    console.log(name);
  }, []);

  const onChangeYear = useCallback((e) => {
    setYear(e.target.value);
    console.log(year);
  }, []);

  const onChangeMonth = useCallback((e) => {
    setMonth(e.target.value);
    console.log(month);
  }, []);

  const onChangeDate = useCallback((e) => {
    setDate(e.target.value);
    console.log(date);
  }, []);

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    console.log(nickname);
  }, []);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식이 아닙니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
    console.log(email);
  }, []);

  const onChangePassword = useCallback(
    (e) => {
      const passwordRegex = /^[A-Za-z0-9]{8,16}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);
      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage("8-16자로 입력해주세요.");
        setIsPassword(false);
      } else {
        setPasswordMessage("");
        setIsPassword(true);
      }
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
      console.log(passwordCheck);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password, passwordCheck, name, nickname);
      if (!mismatchError) {
        console.log("서버로 회원가입하기");
      }
    },
    [email, password, passwordCheck, name, nickname, mismatchError],
  );

  const navigate = useNavigate();
  const onApply = () => {
    if (nickname && email && password && passwordCheck && !mismatchError) {
      // 서버에 데이터 전송
      onRegisterUserInfo();
      console.log("유저 정보 등록 완료");
      if (name && selectedType && selectedSex && year && month && date) {
        onRegisterPetInfo();
      }
      console.log("반려동물 정보 등록 완료");
      // navigate("/signedup");
    } else {
      alert("입력값을 확인해주세요.");
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const onRegisterUserInfo = async () => {
    try {
      const res = await axios.post(
        "http://ec2-43-201-127-147.ap-northeast-2.compute.amazonaws.com:8080/v1/api/auth/join",
        {
          email: email,
          password: password,
          name: nickname,
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onRegisterPetInfo = async () => {
    try {
      const res = await axios.post(
        "http://ec2-43-201-127-147.ap-northeast-2.compute.amazonaws.com:8080//v1/api/pet/add",
        {
          name: name,
          birth: year + ":" + month + ":" + date,
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <LogoSection>
        <img
          src="https://raw.githubusercontent.com/MinJaeSon/assets/c953f5989fe1fa9b26e7d438559653d24ff5062c/biglogo.svg"
          alt="로고 이미지"
        />
      </LogoSection>
      <InputSection>
        <Intro>
          <img src={logo} alt="로고 이미지" />
          <h3>회원가입</h3>
          <p>새로운 계정을 생성하고 나만의 영상 아카이빙을 시작해요</p>
        </Intro>
        <Form onSubmit={onSubmit}>
          <Label>
            <span>반려동물 프로필 사진</span>
            <DropZone onDrop={onDrop} onDragOver={onDragOver}>
              <img
                src="https://raw.githubusercontent.com/MinJaeSon/assets/a25e1da2d65c3a03a493d02768c9415f7a58684a/image_upload.svg"
                alt="갤러리 아이콘"
              />
              <p>이미지를 드래그해서 추가</p>
            </DropZone>
          </Label>
          <Label>
            <span>종류 (육군/해군/공군)</span>
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
          </Label>
          <Label>
            <span>반려동물 이름</span>
            <InputBox
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChangeName}
            ></InputBox>
          </Label>
          <Label>
            <span>성별</span>
            <SexSelectBox>
              <SexButton value="남자" onClick={handleSexSelect} selected={selectedSex === "남자"}>
                남자
              </SexButton>
              <SexButton value="여자" onClick={handleSexSelect} selected={selectedSex === "여자"}>
                여자
              </SexButton>
            </SexSelectBox>
          </Label>
          <Label>
            <span>생년월일</span>
            <BirthInputSection>
              <BirthInputBox
                type="text"
                id="year"
                name="year"
                value={year}
                placeholder="YYYY"
                onChange={onChangeYear}
              ></BirthInputBox>
              <BirthInputBox
                type="text"
                id="month"
                name="month"
                value={month}
                placeholder="MM"
                onChange={onChangeMonth}
              ></BirthInputBox>
              <BirthInputBox
                type="text"
                id="date"
                name="date"
                value={date}
                placeholder="DD"
                onChange={onChangeDate}
              ></BirthInputBox>
            </BirthInputSection>
          </Label>
          <Label>
            <span>닉네임</span>
            <InputBox
              type="text"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChangeNickname}
            ></InputBox>
          </Label>
          <Label>
            <span>이메일</span>
            <InputBox
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            ></InputBox>
            {!isEmail && <Error>{emailMessage}</Error>}
          </Label>
          <Label>
            <span>비밀번호</span>
            <InputBox
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            ></InputBox>
            {!isPassword && <Error>{passwordMessage}</Error>}
          </Label>
          <Label>
            <span>비밀번호 재입력</span>
            <InputBox
              type="password"
              id="passwordCheck"
              name="passwordCheck"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            ></InputBox>
            {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          </Label>
          <ButtonSection>
            <Button type="submit" onClick={onApply}>
              가입하기
            </Button>
            <p>
              이미 계정이 있으신가요? <button onClick={navigateToLogin}>로그인</button>
            </p>
          </ButtonSection>
        </Form>
      </InputSection>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoSection = styled.div`
  display: flex;
  width: 50%;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 594px;
  height: 600px;
  margin-top: 60px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  img {
    width: 68px;
    height: 40px;
    margin-bottom: 8px;
  }
  h3 {
    color: #ec8007;
    font-family: NanumSquareRound;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #bbb;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 1284px;
  overflow: scroll;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #787878;
  font-weight: 400;
  margin-bottom: 40px;
  span {
    padding-left: 4px;
    margin-bottom: 8px;
  }
`;

const DropZone = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 10px;
  border: 2px dashed #a9a9a9;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  img {
    width: 120px;
    height: 120px;
  }
  p {
    color: #898787;
    font-size: 16px;
    font-family: NanumSquareRound;
    margin: 0;
  }
`;

const TypeSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
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

const SexSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

const SexButton = styled.button`
  width: 242px;
  height: 54px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  background: #ffffff;
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

const BirthInputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const BirthInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 56px;
  padding: 24px 20px;
  margin-right: 10px;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  background: #fff;
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 494px;
  height: 56px;
  padding: 24px 20px;
  gap: 20px;
  flex: 1 0 0;
  border-radius: 12px;
  border: 1.5px solid #e8e8e8;
  margin-top: 8px;
`;

const Error = styled.p`
  color: #eb5353;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  padding-left: 4px;
`;

const ButtonSection = styled.div`
  width: 494px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
  p {
    color: #bbbbbb;
    font-size: 0.9rem;
    button {
      background: none;
      border: none;
      color: #1e1e1e;
      font-weight: 600;
      font-family: NanumSquareRound;
      font-size: 0.9rem;
      &:hover {
        cursor: pointer;
        color: #ec8007;
      }
    }
  }
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
`;
