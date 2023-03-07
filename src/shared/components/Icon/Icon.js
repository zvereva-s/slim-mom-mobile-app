import React from "react";
import { SvgXml } from "react-native-svg";

import * as icons from "./icons";

export default function Icon({ type, focused, size, theme, colorProp, OS }) {
  let xml;

  switch (type) {
    case "plus":
      xml = icons.plusIcon(focused, theme, colorProp);
      break;
    case "close":
      xml = icons.closeIcon(focused, theme, colorProp);
      break;
    case "calendar":
      xml = icons.calendarIcon(focused, theme, colorProp);
      break;
    case "arrowBack":
      xml = icons.arrowBackIcon(focused, theme, colorProp);
      break;
    case "sun":
      xml = icons.sunIcon();
      break;
    case "moon":
      xml = icons.moonIcon(focused, theme, colorProp);
      break;
    case "calendarMenu":
      xml = icons.calendarMenuIcon(theme, focused);
      break;
    case "diary":
      xml = icons.diaryIcon(theme, focused);
      break;

    default:
      xml = "";
  }

  return (
    <>
      <SvgXml xml={xml} width={size} height={size} />
    </>
  );
}
