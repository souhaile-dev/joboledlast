import Register from "./components/Register";
import TwoFactorAuth from "./components/TwoFactorAuth";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Login from "./components/Login";
import Error from "./components/Error";
// import Landing from "./components/Landing/Landing";
import Team from "./components/dashboard/Team";
import SavedProfiles from "./components/dashboard/SavedProfiles";
import Schedule from "./components/dashboard/Schedule";
import Company from "./components/dashboard/Company";
import DashboardLayout from "./components/layout/DashboardLayout";
import LandingPage from "./components/LandingPage";
import PitshLandingPage from "./components/PitshLandingPage";
import OffersApplyView from "./components/dashboard/OffersApplyView";
import CompanyProfile from "./components/dashboard/CompanyProfile";
import { CandidateProfile } from "./components/Candidate/CandidatProfilOverview";
import AfterRegister from "./components/AfterRegister";
import VoiceCreation from "./components/VoiceCreation";
import Intro from "./components/voice-creation/Intro";
import WelcomeAfterRegistration from "./components/WelcomeAfterRegistration";
import AfterRegister2 from "./components/AfterRegister2";

import { OfferCreation } from "./components/offerCreation/OfferCreation";
import { OfferCreation2 } from "./components/offerCreation/OfferCreation2";
import { OfferCreation3 } from "./components/offerCreation/OfferCreation3";
import Cnv from "./components/convertResume/Cnv";
import Cnv2 from "./components/convertResume/Cnv2";
import { Profiles } from "./components/settings/profiles";
import { Profile2 } from "./components/settings/Profile2";
import Frame from "./components/dashboard/Frame";
import Job from "./components/Jobseeker/Job";
import Job2 from "./components/Jobseeker/Job2";
import Saved from "./components/Jobseeker/Saved";
// import { getMonth } from "./util";
// import CalendarHeader from "./components/CalendarDash/CalendarHeader";
// import Sidebardash from "./components/CalendarDash/Sidebardash";
// import Month from "./components/CalendarDash/Month";
// import GlobalContext from "./context/GlobalContext";
// import EventModal from "./components/CalendarDash/EventModal";
import Cal from "./components/CalendarDash/Cal";
import Jobs from "./components/Jobseeker/Jobs";
import Jobs2 from "./components/Jobseeker/Jobs2";
import Suspended from "./components/Jobseeker/Suspended";
import Ended from "./components/Jobseeker/Ended";
import Draft from "./components/Jobseeker/Draft";
import Candidate from "./components/JobSeekercandidate/Candidate";
import Mkp from "./components/voice-creation/components/Mkp";

/**router **/
function App() {

  return (
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<PitshLandingPage />} />{" "}
        <Route path="/mvc" element={<VoiceCreation />} />{" "}
        <Route path="/CandidateProfile" element={<CandidateProfile />} />{" "}
        <Route path="/hello" element={<Intro />} />{" "}
        <Route path="/1" element={<LandingPage />} />{" "}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<Dashboard />} />{" "}
          <Route path="candidate" element={<Candidate />} />{" "}
          <Route path="team" element={<Team />} />{" "}
          <Route path="company" element={<Company />} />{" "}
          <Route path="settings" element={<Profiles />} />{" "}
          <Route path="job" element={<Job />} />{" "}
          <Route path="jobs" element={<Jobs />} />{" "}
          <Route path="jobs2" element={<Jobs2 />} />{" "}
          <Route path="job2" element={<Job2 />} />{" "}
          <Route path="suspended" element={<Suspended />} />{" "}
          <Route path="ended" element={<Ended />} />{" "}
          <Route path="draft" element={<Draft />} />{" "}
          <Route path="saved" element={<Saved />} />{" "}
          <Route path="saved-profiles" element={<SavedProfiles />} />{" "}
          <Route path="schedule" element={<Schedule />} />{" "}
          <Route path="frame" element={<Frame />} />{" "}
          <Route path="offer-apply" element={<OffersApplyView />} />{" "}
          <Route path="company-profile" element={<CompanyProfile />} />{" "}
        </Route>{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route
          path="/register-welcome"
          element={<WelcomeAfterRegistration />}
        />{" "}
        <Route path="/pre-registration" element={<AfterRegister />} />{" "}
        <Route path="/pre-registration2" element={<AfterRegister2 />} />{" "}
        <Route path="/offer" element={<OfferCreation />} />{" "}
        <Route path="/offer2" element={<OfferCreation2 />} />{" "}
        <Route path="/offer3" element={<OfferCreation3 />} />{" "}
        <Route path="/cnv" element={<Cnv />} />{" "}
        <Route path="/cnv2" element={<Cnv2 />} />{" "}
        <Route path="*" element={<Error />} />{" "}
        <Route path="/Sett" element={<Profiles />} />{" "}
        <Route path="/Sett2" element={<Profile2 />} />{" "}
        <Route path="/cal" element={<Cal />} />{" "}
        <Route path="/mkp" element={<Mkp />} />{" "}
       
        {/* <Route path="/cal" element={<Cal showEventModal={true} currenMonth="September"} /> */}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
