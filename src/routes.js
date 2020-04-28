/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Students from "./views/Students";
import Staffs from "./views/Staffs";

var routes = [
  {
    path: "/students",
    name: "students",
    icon: "ni ni-tv-2 text-primary",
    component: Students,
  },
  {
    path: "/staffs",
    name: "Staffs",
    icon: "ni ni-planet text-blue",
    component: Staffs,
  },
];
export default routes;
