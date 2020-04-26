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
    input: "",
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
  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }
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
        <div key={i} className="col-12 col-sm-6 col-lg-4  mb-5 mb-lg-5">
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
        <div className="site-blocks-cover inner-page-cover overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 text-center">
                <h1 className="text-white">STUDENTS</h1>
                <p>Search.</p>
                <input
                  value={this.state.input}
                  type="text"
                  onChange={this.onChangeHandler.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="our-speaker-area section-padding-100">
          <br />
          <div className="container">
            {this.state.replists &&
              this.state.replists
                .filter((data) => {
                  return data.name.toLowerCase().indexOf(this.state.input) > -1;
                })
                .map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="col-12 col-sm-6 col-lg-4  mb-5 mb-lg-5"
                    >
                      <UserListCard
                        html={data.name}
                        profileData={data}
                        profileRef={getStudentId(data)}
                        viewLink={true}
                        editLink={true}
                        openUserModal={this.openUserModal}
                        openUserView={this.openUserView}
                        editPath="/student/edit/"
                        viewPath="/student/"
                      />
                    </div>
                  );
                })}
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
            <span className="text-info text-white text-uppercase">
              {this.state.studentModelData.name}
            </span>
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
