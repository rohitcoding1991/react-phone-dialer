import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import DialerScreen from "./components/DialerScreen";
import CallLogs from "./components/CallLogs";
import CallingPage from "./components/CallingPage";
import CallDenyPage from "./components/CallDenyPage";
import VoiceMail from "./components/Voicemail";
import Conversations from "./components/Conversations";
import Settings from "./components/Settings";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dialer" element={<DialerScreen />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/call-logs" element={<CallLogs />} />
        <Route path="/ongoing" element={<CallingPage />} />
        <Route path="/call-deny" element={<CallDenyPage />} />
        <Route path="/voice-mail" element={<VoiceMail />} />
        <Route path="/conversation" element={<Conversations />} />
        <Route path="/setting" element={<Settings/>}/>
      </Routes>
  );
};

export default App;
