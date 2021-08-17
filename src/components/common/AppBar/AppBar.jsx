import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SdButton from "../../common/SdButton/sdButton";
import Button from "@material-ui/core/Button";
import fire from "../../../firebase/config";
import { fetchTypeFromUrl } from "../../../constant";
import {
  Container,
  AppBarContainer,
  DrawerContainer,
  ToolBarContainer,
  SdBtn,
  BtnContainer,
} from "./style";
import Logo from "../../../assets/logo.png";
import { pageTypeKeys } from "./method";
import get from "lodash/get";


const Header = (props) => {
  const { backgroundColor, inputData,history } = props;
  const currentUid = localStorage.getItem("uid");
  const { dashboardType } = fetchTypeFromUrl();
  const db = fire.firestore();

  const checkUid = (userDataArr) => {
    const inputData = [...userDataArr];
    console.log(inputData, "userFinalObj");
    const finalData = {
      bgColor: backgroundColor,
      textData: inputData,
      type: dashboardType,
    };

    let usersArr = [];
    let updatedObj;
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          usersArr.push({ id: doc.id, data: doc.data() });
          // console.log(doc.id, " => ", doc.data());
        });
        if (usersArr.findIndex((el) => el.id === currentUid) > -1) {
          let currentUserObj = usersArr.find((el) => el.id === currentUid);
          updatedObj = Object.assign({}, currentUserObj);
          const { code } = updatedObj.data;
          updatedObj.data = { finalData, code };
          db.collection("users").doc(currentUid).update(updatedObj);
          console.log(updatedObj, "updatedObj");
        } else {
          let val = Math.floor(1000 + Math.random() * 9000);
          console.log(val, "val");
          updatedObj = { ...finalData, code: val };
          updatedObj.id = currentUid;
          console.log(updatedObj, "updatedObj");

          const ref = db.collection("users").doc(currentUid);
          ref.set(updatedObj);
        }
        handlePraiseBoard(updatedObj);
      });
  };

  const handlePraiseBoard = (data) => {
    console.log(data, "data");
    let praiseBoardArr = [],
      updatedPraisedObj;

    db.collection("praiseboard")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          praiseBoardArr.push({ code: doc.id, data: doc.data() });
        });
        if (praiseBoardArr.findIndex((el) => el.code === data.code) > -1) {
          let boardObj = praiseBoardArr.find((el) => el.code === data.code);
          updatedPraisedObj = Object.assign({}, boardObj);
          updatedPraisedObj.data = data;
        } else {
          console.log(data,"data")
          const ref = db
            .collection("praiseboard")
            .doc(get(data,'data.code').toString());
          console.log(ref, "ref");
          ref
            .set(data)
            .then(() =>
              window.triggerAlert("success", `Presenting on screen having code ${get(data,'data.code')}`,0)
            );
        }
        console.log(updatedPraisedObj, "updatedObj");
      });
  };

  const handlePresentation = () => {
    let userDataArr = [];
    Object.keys(inputData || {}).map((item) => {
      if (pageTypeKeys(dashboardType).includes(item)) {
        console.log(item, "item");
        userDataArr.push({ key: inputData[item] });
        console.log(userDataArr, "userDataArr");
      userDataArr =   userDataArr.filter(item=>item.key !== '')
       console.log(userDataArr,"removeEmptyObj")
      }
    });

    checkUid(userDataArr);

    // Getting user id
  };

  const handleLogout=()=>{
    console.log('asfdgn')
    if(localStorage){
      localStorage.removeItem("uid")
      window.triggerAlert('success','Successfully Logged out.',2000)
      history.push('/login')

    }
  }

  console.log(backgroundColor, "backgroundColor");
  return (
    <AppBarContainer position="fixed">
      <ToolBarContainer>
        {/* <Typography variant="h6" noWrap>
          Praiseboard
        </Typography> */}
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <BtnContainer>

        <SdBtn text={"Present"} onClick={() => handlePresentation()} />
        <SdBtn text={"Logout"} onClick={() => handleLogout()} />
        </BtnContainer>
      </ToolBarContainer>
     
  
    </AppBarContainer>
  );
};

export default Header;
