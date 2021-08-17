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
`;
export const TextWrapper = styled.div`
  padding: 20px 0;
`;
export const TextHeading = styled.div`
  padding-bottom: 20px;
`;

export const ColorSelectWrapper = styled.div`
  padding: 20px 0;
`;
export const ColorSelectHeading = styled.div`
  padding-bottom: 10px;
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
export const ColorName = styled.div``;

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
&.MuiFormControl-root {
  margin:5px;
}
`;

export const SongInputWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
