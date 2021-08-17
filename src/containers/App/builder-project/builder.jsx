import React, { useEffect } from "react";
import { Container } from "./style";
import ClickCounter from "../../../components/builder-project/clickCounter";
import HoverCounter from "../../../components/builder-project/hoverCounter";
import AlertMsg from "../../../components/common/AlertMsg/alertMsg";
import SdButton from "../../../components/common/SdButton/sdButton";
import SdCheckBox from "../../../components/common/SdCheckBox/SdCheckBox";
import SdRadio from "../../../components/common/SdRadio/sdRadio";

const Builder = (props) => {
  console.log(props, "props");
  const { getCategoryList, listData, updateUserInput } = props;

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    if (listData) {
      console.log(listData, "listData");
    }
  }, [listData]);

  return (
    <Container>
      builder page
      <ClickCounter />
      <HoverCounter />
      <AlertMsg />
      <SdButton />
      <SdCheckBox />
      <SdRadio />
    </Container>
  );
};

export default Builder;
