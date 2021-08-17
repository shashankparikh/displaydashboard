import get from "lodash/get";

export const SUPPORTED_URLS = {
  BILL_BOARD_PAGE: {
    url: "/bill-board",
  },
  NOTICE_BOARD_PAGE: {
    url: "/notice-board",
  },
  SONG_BOARD_PAGE: {
    url: "/song-board",
  },
};

export const PAGE_HEADINGS = {
  BILL_BOARD_PAGE: {
    title: "Bill Board",
  },
  NOTICE_BOARD_PAGE: {
    title: "Notice Board",
  },
  SONG_BOARD_PAGE: {
    title: "Song Board",
  },
};

export const fetchTypeFromUrl = (url = get(window, "location.pathname")) => {
  let dashboardType = "NOTICE_BOARD_PAGE";
  Object.keys(SUPPORTED_URLS).forEach((type) => {
    Object.keys(SUPPORTED_URLS[type]).forEach((view) => {
      if (SUPPORTED_URLS[type][view] === url) {
        dashboardType = type;
        return null;
      }
    });
  });
  return { dashboardType };
};
