import React, { useState } from "react";
import Drawer from "../../../components/common/Drawer/drawer";
import Header from "../../../components/common/AppBar/AppBar";
import PreviewBoard from "../../../components/PreviewBoard/previewBoard";
import Board from "../../../components/Board/board";
import { Container, BillContainer, LeftBoard } from "./style";
import { fetchTypeFromUrl } from "../../../constant";

const BillBoard = (props) => {
  const {inputData}=props;
  console.log(inputData,"inputData")
  const [backgroundColor, setBackgroundColor] = useState("#3f8290");

  const fetchBoardColor = (color) => {
    console.log(color);
    setBackgroundColor(color);
  };


  return (
    <Container>
      <Drawer />
      <Header
        backgroundColor={backgroundColor}
        {...props}
      />
      <BillContainer>
        <LeftBoard>
          <Board
            fetchBoardColor={fetchBoardColor}
            {...props}
          />
        </LeftBoard>
        <PreviewBoard
          backgroundColor={backgroundColor}
          {...props}
        />
      </BillContainer>
    </Container>
  );
};

export default BillBoard;
