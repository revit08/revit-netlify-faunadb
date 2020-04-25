import React, { Component } from "react";
import classnames from "classnames";
import FileBase64 from "react-file-base64";
import { ToastsContainer, ToastsStore } from "react-toasts";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import UserListCard from "./../components/list/userListCard";
import UserItemCard from "./../components/item/userItemCard";
import FormGroupInput from "./../components/form/formGroupInput";
import CellLinkRenderer from "./../components/grid/cellLinkRender";

import api from "./../utils/api";
import sortByDate from "./../utils/sortByDate";
import isLocalHost from "./../utils/isLocalHost";

const userbase = {
  roll: 0,
  spr: 0,
  designation: "",
  verified: true,
  name: "",
  email: "",
  othername: "",
  dob: "",
  anniversary: "",
  married: false,
  native: "",
  location: "",
  work: "",
  social: {},
  url: "",
  flagimg: "",
};
export default class Students extends Component {
  state = {
    todos: [],
    cardview: true,
    context: { componentParent: this },
    student: {},
    studentModelData: { ...userbase },
    studentModal: false,
    studentViewModal: false,
    showMenu: false,
    iconTabs: 1,
    textTabs: 4,

    defaultColDef: {
      sortable: true,
      filter: true,
    },
    frameworkComponents: {
      CellLinkRenderer,
    },
  };
  componentDidMount() {
    // Fetch all todos
    api.readAllStudents().then((replists) => {
      if (replists.message === "unauthorized") {
        if (isLocalHost()) {
          alert(
            "FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info"
          );
        } else {
          alert(
            "FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct"
          );
        }
        return false;
      }
      const optimisedData = [];
      if (replists.length > 0) {
        replists.forEach(function (item, index) {
          let itemis = item.data;
          itemis.act = index;
          itemis.id = getStudentId(item);
          optimisedData.push(itemis);
        });
        this.setState({
          replists: replists,
          gridData: optimisedData,
        });
      } else {
        this.setState({
          replists: [],
          gridData: [],
        });
      }
    });
  }
  toggle = () => {
    const { studentModal } = this.state;
    this.setState({
      studentModal: !studentModal,
    });
  };

  openUserModal = (id) => {
    console.log("openUserModal", id);
    const studentItem = this.state.gridData.find((o) => o.id === id);
    if (Object.keys(studentItem.social).length === 0) {
      studentItem.social = { ...userbase.social };
    }
    console.log(studentItem);
    this.setState({
      studentModal: true,
      studentModelData: studentItem,
    });
  };
  openUserView = (id) => {
    console.log("openUserView", id);
    const { studentViewModal } = this.state;
    const studentItem = this.state.gridData.find((o) => o.id === id);
    this.setState({
      studentViewModal: !studentViewModal,
      studentModelData: studentItem,
    });
  };
  toogleStudentView = () => {
    const { studentViewModal } = this.state;
    this.setState({
      studentViewModal: !studentViewModal,
    });
  };
  toogleGridTable = () => {
    const { cardview } = this.state;
    this.setState({
      cardview: !cardview,
    });
  };

  onChange = (e) => {
    console.log("ose", e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onInputChange = (na, val) => {
    const { studentModelData } = this.state;
    studentModelData[na] = val;
    this.setState({ studentModelData });
  };
  onInputSocialChange = (na, val) => {
    console.log(`SO  ${na} ${val}`);
    const { studentModelData } = this.state;
    studentModelData.social[na] = val;
    this.setState({ studentModelData });
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  download = () => {
    console.log("coming soon");
  };
  renderStudents() {
    const { replists } = this.state;

    if (!replists || !replists.length) {
      // Loading State here
      return null;
    }

    const timeStampKey = "ts";
    const orderBy = "asc"; // or ` desc`
    const sortOrder = sortByDate(timeStampKey, orderBy);
    const replistsByDate = replists.sort(sortOrder);

    return replistsByDate.map((replist, i) => {
      const { data } = replist;
      const id = getStudentId(replist);
      // only show delete button after create API response returns

      return (
        <div key={i} className="col-12 col-sm-6 col-lg-4 ">
          <UserListCard
            html={data.name}
            profileData={data}
            profileRef={id}
            viewLink={true}
            editLink={true}
            openUserModal={this.openUserModal}
            openUserView={this.openUserView}
            editPath="/student/edit/"
            viewPath="/student/"
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="app">
        <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcrumb-content">
                  <h2 className="page-title">STUDENTS</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        STUDENTS
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-speaker-area section-padding-100">
          <br />
          <div className="container">
            {this.state.cardview ? (
              <div className="row">{this.renderStudents()}</div>
            ) : (
              <div className="row"></div>
            )}
          </div>
        </section>
        <Modal
          isOpen={this.state.studentViewModal}
          toggle={this.toogleStudentView}
          className="modal-xl"
        >
          <ModalHeader toggle={this.toogleStudentView}>
            <hr className="line-info" />
            <h3>
              <span className="text-info">
                {" "}
                {this.state.studentModelData.name}{" "}
              </span>
            </h3>
          </ModalHeader>
          <ModalBody>
            <UserItemCard student={this.state.studentModelData} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function getStudentId(todo) {
  if (!todo.ref) {
    return null;
  }
  return todo.ref["@ref"].id;
}
