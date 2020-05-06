import Students from "./views/Students";
import Staffs from "./views/Staffs";
import SubjectsList from "./views/SubjectsList";

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
    path: "/subjects-list",
    name: "Subjects",
    icon: "ni ni-planet text-blue",
    component: SubjectsList,
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
];
export default routes;
