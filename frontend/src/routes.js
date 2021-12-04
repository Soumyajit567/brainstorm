/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Assignment from "@material-ui/icons/Assignment";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import advCourse from "./views/CoursePage/advCourse";
import AdvAnmt from "./views/AnnouncementsPage/advAnmt";
import advSearch from "./views/SearchPage/advSearch";
import advChat from "./views/ChatPage/advChat";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/Courses",
    name: "Courses",
    icon: Assignment,
    component: advCourse,
    layout: "/admin",
  },
  {
    path: "/Anmt",
    name: "Announcements",
    courses: ["poop", "butt"],
    icon: Assignment,
    component: AdvAnmt,
    layout: "/admin",
  },
  {
    path: "/Chat",
    name: "Chat",
    icon: Assignment,
    component: advChat,
    layout: "/admin",
  },
  {
    path: "/Search",
    name: "Search",
    icon: Assignment,
    component: advSearch,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: Assignment,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
