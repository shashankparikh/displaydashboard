import React from "react";
import { fetchTypeFromUrl, PAGE_HEADINGS } from "../../constant";
import {
  PreviewContainer,
  CardWrapper,
  CardContent,
  CardBackGround,
  CardHeading,
  CardSubtext,
  SongCardContainer,
  SongCardContent,
  ImgContainer,
} from "./style";
import Adventist from "../../../src/assets/adventist-symbol-black.png";

const PreviewBoard = (props) => {
  const { backgroundColor, inputData } = props;
  const { dashboardType } = fetchTypeFromUrl();
  console.log(inputData);
  return (
    <PreviewContainer>
      <CardWrapper>
        {dashboardType === "NOTICE_BOARD_PAGE" ? (
          <CardContent>
            <CardHeading> {inputData && inputData.headline}</CardHeading>
            <CardSubtext> {inputData && inputData.subtext}</CardSubtext>
          </CardContent>
        ) : dashboardType === "BILL_BOARD_PAGE" ? (
          <CardContent>
            <CardHeading> {inputData && inputData.billHeadline}</CardHeading>
            <CardSubtext> {inputData && inputData.billSubtext}</CardSubtext>
            <CardSubtext> {inputData && inputData.billBodyCopy}</CardSubtext>
          </CardContent>
        ) : (
          <SongCardContainer>
            <SongCardContent>{inputData && inputData.songNo1}</SongCardContent>
            <SongCardContent>{inputData && inputData.stanza1}</SongCardContent>
            <SongCardContent>{inputData && inputData.version1}</SongCardContent>
            <SongCardContent>{inputData && inputData.songNo2}</SongCardContent>
            <SongCardContent>{inputData && inputData.stanza2}</SongCardContent>
            <SongCardContent>{inputData && inputData.version2}</SongCardContent>
            <SongCardContent>{inputData && inputData.songNo3}</SongCardContent>
            <SongCardContent>{inputData && inputData.stanza3}</SongCardContent>
            <SongCardContent>{inputData && inputData.version3}</SongCardContent>
            <SongCardContent>{inputData && inputData.songNo4}</SongCardContent>
            <SongCardContent>{inputData && inputData.stanza4}</SongCardContent>
            <SongCardContent>{inputData && inputData.version4}</SongCardContent>
            <SongCardContent>{inputData && inputData.songNo5}</SongCardContent>
            <SongCardContent>{inputData && inputData.stanza5}</SongCardContent>
            <SongCardContent>{inputData && inputData.version5}</SongCardContent>
          </SongCardContainer>
        )}
        <CardBackGround bgColor={backgroundColor}>
          <ImgContainer>
            <img src={Adventist} alt="adventist" />
          </ImgContainer>
        </CardBackGround>
      </CardWrapper>
    </PreviewContainer>
  );
};

export default PreviewBoard;
