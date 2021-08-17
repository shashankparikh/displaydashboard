import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

export const LoginContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  // height: 100vh;
  margin: 20px;
`;

export const LoginHeader = styled.div`
 flex: 1;
  display: flex;
  align-items: center;
`;
export const LoginWrapper = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginContent = styled.div`
  margin: 10px 0;
`;

export const LoginFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
    justify-content: center;
   a{
    color: #2a33ff;
   } 
`;

export const ImageContainer = styled.div`
  flex: 3;
  img{
    width:100%;
  }
`;

export const TextFieldInput = styled(TextField)`
  &.MuiFormControl-root{
min-width:320px;
margin-bottom:20px;
}
`
