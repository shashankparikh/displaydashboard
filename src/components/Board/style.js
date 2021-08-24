import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const TextFieldInput = styled(TextField)`
  &.MuiFormControl-root {
    min-width: 100px;
    margin-bottom: 20px;
  }
`;
export const Heading = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #141d3a;
`;
export const TextWrapper = styled.div`
  padding: 20px 0;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #141d3a;
`;
export const TextHeading = styled.div`
  padding-bottom: 20px;
`;

export const ColorSelectWrapper = styled.div`
  padding: 20px 0;
`;
export const ColorSelectHeading = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #141d3a;
`;
export const ColorBox = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
`;
export const ColorGrid = styled.div`
  display: flex;
  margin: 10px 0;
  position: relative;
`;
export const ColorName = styled.div`
font-size: 14px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #5a6075;
`;

export const TickMark = styled.div`
position: absolute;
display: inline-block;
transform: rotate(45deg);
height: 10px;
left: 7px;
top: 2px;
width: 4px;
border-bottom: 2px solid #78b13f;
border-right: 2px solid #78b13f;
}
`;

export const TextFieldSongInput = styled(TextField)`
flex: 1 1 30%; /*grow | shrink | basis */
padding:10px;

&.MuiFormControl-root {
  margin:3px;
}
label {
  z-index: 1;
  transform: translate(14px, 12px) scale(1);
  pointer-events: none;
  font-size:14px;
}
input{
  padding:10px;
}
`;

export const SongInputWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
