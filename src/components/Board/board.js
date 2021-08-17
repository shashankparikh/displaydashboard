import React, { useState, useReducer, useEffect } from "react";
import get from "lodash/get";
import {
  TextFieldInput,
  Heading,
  TextWrapper,
  TextHeading,
  ColorSelectWrapper,
  ColorSelectHeading,
  ColorBox,
  ColorGrid,
  ColorName,
  TickMark,
  TextFieldSongInput,
  SongInputWrapper,
} from "./style";

import { fetchTypeFromUrl, PAGE_HEADINGS } from "../../constant";
import {
  colorPalette,
  initialNoticeState,
  initialBillState,
  initialSongState,
} from "./constant";

const Board = (props) => {
  const { fetchBoardColor, updateUserInput, inputData } = props;
  const [colorSelect, setColorSelect] = useState(colorPalette);
  const [backgroundColor, setBackgroundColor] = useState("#3f8290");
  const [userBillInput, setUserBillInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialBillState
  );
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialNoticeState
  );
  const [songInput, setSongInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialSongState
  );
  const { dashboardType } = fetchTypeFromUrl();

  useEffect(() => {
    if (userBillInput || userInput || songInput) {
      updateUserInput({
        billHeadline: userBillInput.billHeadline,
        billSubtext: userBillInput.billSubtext,
        billBodyCopy: userBillInput.billBodyCopy,
        headline: userInput.headline,
        subtext: userInput.subtext,
        songNo1: songInput.songNo1,
        songNo2: songInput.songNo2,
        songNo3: songInput.songNo3,
        songNo4: songInput.songNo4,
        songNo5: songInput.songNo5,
        stanza1: songInput.stanza1,
        stanza2: songInput.stanza2,
        stanza3: songInput.stanza3,
        stanza4: songInput.stanza4,
        stanza5: songInput.stanza5,
        version1: songInput.version1,
        version2: songInput.version2,
        version3: songInput.version3,
        version4: songInput.version4,
        version5: songInput.version5,
      });
    }
  }, [userInput, userBillInput, songInput]);

  const onInputChange = (evt) => {
    const { id, value } = evt.target;
    setUserInput({ [id]: value });
  };

  const onInputSongChange = (evt) => {
    const { id, value } = evt.target;
    setSongInput({ [id]: value });
  };

  const onInputBillChange = (evt) => {
    const { id, value } = evt.target;
    console.log({ [id]: value }, "id");
    setUserBillInput({ [id]: value });
  };

  const colorHandler = (item) => {
    const colorArr = [...colorSelect];
    const updatedArr = colorArr.map((el) => {
      if (el.name === item.name) {
        el.selected = true;
      } else {
        el.selected = false;
      }
      return el;
    });
    setColorSelect(updatedArr);
    setBackgroundColor(item.color);
    fetchBoardColor(item.color);
  };
  return (
    <>
      <Heading>{get(PAGE_HEADINGS, `${dashboardType}.title`) || ""}</Heading>
      <TextWrapper>
        <TextHeading>Text</TextHeading>
        {dashboardType === "NOTICE_BOARD_PAGE" ? (
          <>
            <TextFieldInput
              id="headline"
              label="Headline"
              variant="outlined"
              onChange={(event) => onInputChange(event)}
              value={inputData.headline}
            />
            <TextFieldInput
              id="subtext"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputChange(event)}
              value={inputData.subtext}
            />
          </>
        ) : dashboardType === "BILL_BOARD_PAGE" ? (
          <>
            <TextFieldInput
              id="billHeadline"
              label="Headline"
              variant="outlined"
              onChange={(event) => onInputBillChange(event)}
              value={inputData.billHeadline}
            />
            <TextFieldInput
              id="billSubtext"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputBillChange(event)}
              value={inputData.billSubtext}
            />
            <TextFieldInput
              id="billBodyCopy"
              label="Body Copy"
              variant="outlined"
              onChange={(event) => onInputBillChange(event)}
              value={inputData.billBodyCopy}
            />
          </>
        ) : (
          <SongInputWrapper>
            <TextFieldSongInput
              id="songNo1"
              label="Song No."
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="stanza1"
              label="Stanza"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="version1"
              label="Versions"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="songNo2"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="stanza2"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="version2"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="songNo3"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="stanza3"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="version3"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="songNo4"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="stanza4"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="version4"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="songNo5"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="stanza5"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
            <TextFieldSongInput
              id="version5"
              label="Subtext"
              variant="outlined"
              onChange={(event) => onInputSongChange(event)}
            />
          </SongInputWrapper>
        )}
      </TextWrapper>
      <ColorSelectWrapper>
        <ColorSelectHeading>Grid Color</ColorSelectHeading>

        {colorSelect &&
          colorSelect.map((item, key) => {
            return (
              <>
                <ColorGrid>
                  {item.selected === true ? <TickMark /> : null}
                  <ColorBox
                    bgColor={item.color}
                    borderRadius={item.selected ? "50%" : "unset"}
                    id={key}
                    onClick={() => colorHandler(item)}
                  ></ColorBox>
                  <ColorName>{item.name}</ColorName>
                </ColorGrid>
              </>
            );
          })}
      </ColorSelectWrapper>
    </>
  );
};

export default Board;
