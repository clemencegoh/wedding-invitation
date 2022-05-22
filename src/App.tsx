import { BrowserRouter, Routes, Route } from "react-router-dom";
import { paths } from "./app-constants";
import Version2Landing from "components/v2/Version2Landing";
import FormFill from "components/v2/formfill/FormFill";
import EventDetails from "components/v2/formfill/EventDetails";
import InvitationCodeNotFound from "components/v2/InvitationCodeNotFound";
import { createContext, useEffect, useState } from "react";
import {
  guestList,
  GuestList,
  GuestListContext,
} from "components/v2/guestlist.data";

function Home() {
  return <Version2Landing />;
}

function App() {
  const [guestlist, setGuestlist] = useState<GuestList>({});

  useEffect(() => {
    guestList().then((list) => {
      setGuestlist(list);
    });
  }, []);

  return (
    <GuestListContext.Provider value={guestlist}>
      <BrowserRouter>
        <Routes>
          <Route path={paths.oopsPage} element={<InvitationCodeNotFound />} />
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.formFill} element={<FormFill />} />
          <Route
            path={paths.eventDetails}
            element={<EventDetails attending={[]} />}
          />
        </Routes>
      </BrowserRouter>
    </GuestListContext.Provider>
  );
}

export default App;
