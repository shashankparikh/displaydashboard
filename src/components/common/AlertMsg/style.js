import styled from "styled-components"
import Snackbar from "@material-ui/core/Snackbar";

export const MessageContainer = styled.div`
display: flex;
align-items: center;
z-index:99999;
span{
    margin-left: 15px;
}
`
export const SnackBarContainer = styled(Snackbar)`
&.MuiSnackbar-root{
    z-index: 99999;
}
`