import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

export const Table = () => {
  const api = "https://604c46ffd3e3e10017d51751.mockapi.io/api/v1/data1";

  const [data, setData] = useState([]);
  const [blocking, setblocking] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((date) => setblocking(!blocking));
    console.log("🚀 ~ file: App.js ~ line 31 ~ useEffect ~ data", data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "First Name",
      field: "firstname",
    },
    {
      title: "Last Name",
      field: "lastname",
    },
    {
      title: "Amount",
      field: "balance",
    },
  ];

  return (
    <BlockUi tag="div" blocking={blocking}>
      <div>
        <MaterialTable
          title="Data Table"
          data={data}
          columns={columns}
          options={{
            grouping: true,
          }}
        />
      </div>
    </BlockUi>
  );
};

export default Table;
