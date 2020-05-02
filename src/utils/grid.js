import isLocalHost from "./isLocalHost";

export const setFlter = (type) => {
  switch (type) {
    case "number":
      return "agNumberColumnFilter";
    case "date":
      return "agDateColumnFilter";
    case "email":
      return "agTextColumnFilter";
    default:
      return "agTextColumnFilter";
  }
};

export const getFieldClass = (type) => {
  switch (type) {
    case "textarea":
      return "com-sm-12";
    default:
      return "com-sm-6";
  }
};

export const gridConfigure = (list) => {
  const gridConfig = [
    {
      headerName: "ID",
      field: "id",
      sortable: false,
      filter: false,
    },
  ];
  list.forEach(function (item) {
    item.list.forEach(function (i) {
      let col = {
        headerName: i.name,
        field: `${item.tab}_${i.field}`,
        sortable: true,
        filter: setFlter(i.type),
      };
      if (
        item.tab === "basic" &&
        (i.field === "fName" || i.field === "title")
      ) {
        col.pinned = "left";
        col.cellRenderer = "CellLinkRenderer";
      }
      gridConfig.push(col);
    });
  });
  console.log("gridConfig", gridConfig);
  return gridConfig;
};

export const getGridData = (list) => {
  const result = [];
  list.forEach(function (item) {
    let row = {};

    Object.keys(item).forEach(function (i) {
      if (Array.isArray(item[i]) && item[i].length > 0) {
        item[i].forEach(function (j) {
          row[`${i}_${j.field}`] = j.val || "";
        });
      }
      if (i === "id") {
        row.id = item[i];
      }
    });
    result.push(row);
  });
  return result;
};

export const getListData = (list, format) => {
  const result = [];
  const listArr = ["basic", "contact", "social", "subjects"];
  list.forEach(function (item, i) {
    const ob = { data: [], id: item.id };
    const dataFormat = JSON.parse(JSON.stringify(format));
    dataFormat.forEach(function (tab, j) {
      if (tab.list && item[tab.tab]) {
        if (listArr.includes(tab.tab)) {
          tab.list.forEach(function (field, k) {
            field.val = item[tab.tab][k].val || "";
            console.log();
          });
        } else {
          tab.list = item[tab.tab];
        }
      }
    });
    ob.data = dataFormat;
    result.push(ob);
  });
  return result;
};

export const downloadExcelFormat = (params) => {
  if (params.value) {
    if (params.column.colDef.filter === "agDateColumnFilter") {
      const replaceDate = new Date(params.value);
    }
  }

  return params.value;
};

export const getRecordID = (rec) => {
  if (!rec.ref) {
    return null;
  }
  return rec.ref["@ref"].id;
};

export const responseValidator = (response) => {
  if (response.message === "unauthorized") {
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
};
