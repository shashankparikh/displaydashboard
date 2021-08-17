export const pageTypeKeys = (page) => {
  switch (page) {
    case "BILL_BOARD_PAGE":
      return ["billHeadline", "billSubtext", "billBodyCopy"];

    case "NOTICE_BOARD_PAGE":
      return ["headline", "subtext"];
    case "SONG_BOARD_PAGE":
      return [
        "songNo1",
        "songNo2",
        "songNo3",
        "songNo4",
        "songNo5",
        "stanza1",
        "stanza2",
        "stanza3",
        "stanza4",
        "stanza5",
        "version1",
        "version2",
        "version3",
        "version4",
        "version5",
      ];
    default:
    // code block
  }
};
