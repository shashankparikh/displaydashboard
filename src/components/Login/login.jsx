import React from "react";
import TextField from "@material-ui/core/TextField";
import fire from "../../firebase/config";
import SdButton from "../common/SdButton/sdButton";
import {
  Container,
  LoginContainer,
  ImageContainer,
  LoginHeader,
  LoginWrapper,
  LoginFooter,
  LoginContent,
  TextFieldInput,
} from "./style";
import PraiseBoardBackground from "../../assets/bg.svg";
import Logo from "../../assets/logo.png";

const Login = (props) => {
  const {history} = props;
  const handleLogin = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u, "success");
        console.log(u.user.uid, "u.user.uid");
        localStorage.setItem("uid", u.user.uid);
        window.triggerAlert('success','Successfully Logged In',2000)
        history.push('/bill-board')
      })
      .catch((err) => {
        console.log(err, "error");
        window.triggerAlert('error','Incorrect Username',2000)
      });
  };
  return (
    <Container>
      <LoginContainer>
        <LoginHeader>
          <img src={Logo} alt="logo" />
        </LoginHeader>
        <LoginWrapper>
          <LoginContent> Login to Praiseboard</LoginContent>
          <TextFieldInput id="email" label="Email" variant="outlined" />
          <TextFieldInput
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <SdButton text={"Submit"} onClick={() => handleLogin()} />
        </LoginWrapper>
        <LoginFooter>Need access Please reach out to&nbsp;<a>info@praiseboard.com</a></LoginFooter>
      </LoginContainer>
      <ImageContainer>
        <img src={PraiseBoardBackground} alt="Girl in a jacket" />
      </ImageContainer>
    </Container>
  );
};

export default Login;
