import Students from "./views/Students";
import Staffs from "./views/Staffs";
import SemesterList from "./views/SemesterList";
import Sessions from "./views/Session";

var routes = [
  {
    path: "/students-list",
    name: "Students",
    icon: "ni ni-tv-2 text-primary",
    component: Students,
  },
  {
    path: "/staffs-list",
    name: "Staffs",
    icon: "ni ni-planet text-blue",
    component: Staffs,
  },
  {
    path: "/semester-list",
    name: "Semesters",
    icon: "ni ni-planet text-blue",
    component: SemesterList,
  },
  {
    path: "/pages-list",
    name: "Pages",
    icon: "ni ni-planet text-blue",
    component: Staffs,
  },
  {
    path: "/news-events-list",
    name: "News & Events",
    icon: "ni ni-planet text-blue",
    component: Staffs,
  },
  {
    path: "/sessions",
    name: "Sessions",
    icon: "ni ni-planet text-blue",
    component: Sessions,
  },
];
export default routes;
