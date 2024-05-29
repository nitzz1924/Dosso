import React from "react";
import { Navigate } from "react-router-dom";



// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";



// Dashboard
import Dashboard from "../pages/Dashboard/index";

//Pages
import PagesStarter from "../pages/Utility/pages-starter";
import PagesTimeline from "../pages/Utility/pages-timeline";
import PagesFaqs from "../pages/Utility/pages-faqs";
import PagesPricing from "../pages/Utility/pages-pricing";


// App Routes
import Contests from "pages/ContestPage/Contests";
import Rounds from "pages/ContestPage/Rounds";
import Spingame from "pages/ContestPage/GamePage/Spingame";
import History from "pages/ContestPage/History";
import StudentRegistration from "pages/Registration/StudentRegistration";
import Home from "pages/Homepage/HomeDashbaord";
import MyFund from "pages/Authentication/Wallet/MyFund";
import Refer from "pages/Referrals/refer";
import AddFund from "pages/Authentication/Wallet/AddFund";
import LeaderBoard from "pages/ContestPage/GamePage/LeaderBoard";
import Playerkyc from "pages/Authentication/kyc/playerkyc";
import Privacypolicy from "pages/Policies/Privacypolicy";
import Termsandcondistions from "pages/Policies/Termsandcondistions";
import Refundpolicy from "pages/Policies/Refundpolicy";
import Ourmission from "pages/Policies/Ourmission";
import Rewards from "pages/ContestPage/Rewards";
import Notifications from "pages/ContestPage/Notifications";
import Verify from "pages/Authentication/Wallet/verify";

const authProtectedRoutes = [
  { path: "/", component: <Contests /> },
  { path: "/contests", component: <Contests /> },
  { path: "/rounds", component: <Rounds /> },
  { path: "/spingame", component: <Spingame /> },
  { path: "/history", component: <History /> },
  { path: "/studentRegistration", component: <StudentRegistration /> },
  { path: "/myFund", component: <MyFund /> },
  { path: "/addFund", component: <AddFund /> },
  { path: "/leaderbaord", component: <LeaderBoard /> },
  { path: "/rewards", component: <Rewards /> },
  { path: "/notifications", component: <Notifications /> },
  { path: "/verify", component: <Verify /> },
  
  //profile
  { path: "/profile", component: <UserProfile /> },
  { path: "/playerkyc", component: <Playerkyc /> },
  { path: "/refer", component: <Refer /> },

  { path: "/dashboard", component: <Dashboard /> },


  //Utility
  { path: "/pages-starter", component: <PagesStarter /> },
  { path: "/pages-timeline", component: <PagesTimeline /> },
  { path: "/pages-faqs", component: <PagesFaqs /> },
  { path: "/pages-pricing", component: <PagesPricing /> },
  
  { path: "/termsandcondistions", component: <Termsandcondistions /> },
  { path: "/refundpolicy", component: <Refundpolicy /> },
  { path: "/ourmission", component: <Ourmission /> },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/contests" />,
  },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  { path: "/privacypolicy", component: <Privacypolicy /> },
  

];

export { authProtectedRoutes, publicRoutes };
