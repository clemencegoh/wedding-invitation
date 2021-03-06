import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Family, GuestList, GuestListContext } from "../guestlist.data";

export function useFamily() {
  const { invitationCode } = useParams();
  const [family, setFamily] = useState<Family | undefined>();
  const [language, setLanguage] = useState<"english" | "chinese">("english");
  const [loadingGuestlist, setLoadingGuestlist] = useState<boolean>(true);
  const guestList = useContext<GuestList>(GuestListContext);

  useEffect(() => {
    if (guestList == null) {
      return;
    }
    if (invitationCode && invitationCode in guestList) {
      const selectedFamily = guestList[invitationCode];
      setFamily(selectedFamily);
      setLanguage(selectedFamily.language);
      setLoadingGuestlist(false);
    }
  }, [invitationCode, guestList]);

  return { family, language, invitationCode, loadingGuestlist };
}
