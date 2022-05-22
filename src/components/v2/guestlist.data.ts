import { createContext } from "react";
import { BASE_URL } from "./apiConstants";

export interface Family {
  address: string;
  language: "english" | "chinese";
  members: Array<string>;
}

export interface GuestList {
  [code: string]: Family;
}

interface expectedRes {
  code: string;
  language: "english" | "chinese";
  members: string[];
  address: string;
}

export const GuestListContext = createContext({});

export const guestList = async () => {
  const dynamicListRes = await fetch(
    BASE_URL +
      new URLSearchParams({
        action: "guestlist",
      })
  );
  const dynamicList = (await dynamicListRes.json()) as expectedRes[];
  let guestList = {} as GuestList;
  dynamicList.forEach((item) => {
    guestList[item.code] = {
      language: item.language,
      members: item.members,
      address: item.address,
    };
  });
  return guestList;
};
