import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import {Drawer} from "@material-ui/core";



export const AppBarContainer = styled(AppBar)`

& .MuiTypography-h6{
    color:black;
}

&.MuiPaper-elevation4{
    box-shadow:unset;
}
&.MuiAppBar-root{
    z-index: 9999;
    background-color: #dcdde2;

}
`;

export const DrawerContainer = styled(Drawer)`
display: block;
    min-width: 180px;
    & .MuiDrawer-paper{
    background-color: #dcdde2;
}
& .MuiDrawer-paperAnchorDockedLeft{
    border-right:0;
}
& .MuiList-padding{
    margin-top:64px;
}
}

& .MuiListItem-root{
    margin:10px 0;
    &:hover,&:active{
        //  border-radius: 22px;
        background-color: #2155f4 !important;
        color:#ffffff !important;
        //  border-bottom-right-radius: 100%;
            // border-top-right-radius: 100%;
    }

}
// & .MuiListItemText-primary{
//     font-size: 16px;
//     font-weight: bold;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: normal;
//     letter-spacing: normal;
//     text-align: center;
//     color: #141d3a;
//     &:hover,&:active{
//         // border-radius: 22px;
//         background-color: #2155f4;
//         color:#ffffff;
//      //   border-bottom-right-radius: 100%;
//         //   border-top-right-radius: 100%;
//     }
// }
& .MuiListItemIcon-root{
    min-width:56px;
}
&:after{
    background-color: #eeeef1;
    content: "";
  
  }
`;