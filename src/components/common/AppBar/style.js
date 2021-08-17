import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SdButton from "../../common/SdButton/sdButton";


export const AppBarContainer = styled(AppBar)`
  & .MuiTypography-h6 {
    color: black;
  }

  &.MuiPaper-elevation4 {
    box-shadow: unset;
  }
  &.MuiAppBar-root {
    z-index: 9999;
    background-color: #dcdde2;
  }
`;

export const ToolBarContainer = styled(Toolbar)`
&.MuiToolbar-root{
display:flex;
justify-content: space-between;
}
`
export const SdBtn =styled(SdButton)`

`
export const BtnContainer =styled.div`
display:flex;
div{
  margin:10px;

}
`