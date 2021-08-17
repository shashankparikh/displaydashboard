import React from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";
import {Container,AppBarContainer,DrawerContainer} from './style';

// const useStyles = makeStyles({
//   drawer: {
//     width: "190px"
//   }
// });

const Drawer = props => {
  const { history } = props;
//   const classes = useStyles();
  const itemsList = [
    {
      text: "Notice Board",
      icon: <InboxIcon />,
      onClick: () => history.push("/notice-board")
    },
    {
      text: "Song Board",
      icon: <MailIcon />,
      onClick: () => history.push("/song-board")
    },
    {
      text: "Bill Board",
      icon: <MailIcon />,
      onClick: () => history.push("/bill-board")
    }
  ];
  return (
      <>
      {/* <Container> */}
        {/* <AppBarContainer position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Praiseboard
          </Typography>
        </Toolbar>
      </AppBarContainer> */}
    <DrawerContainer variant="permanent" >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </DrawerContainer>
    {/* </Container> */}
    </>
  );
};

export default withRouter(Drawer);
