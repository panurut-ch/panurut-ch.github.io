import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

import BlockUi from "react-block-ui";
import "react-block-ui/style.css";

const DEFAULT_THROTTLING = 2500;

export const Table = () => {
  const api = "https://604c46ffd3e3e10017d51751.mockapi.io/api/v1/data1";

  const [data, setData] = useState([]);
  const [blocking, setBlocking] = useState(true);

  // Blocking ui when paging
  const [changePage, setChangePage] = useState(false);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setBlocking(false));
  }, []);

  // mockup loading blocked ui
  useEffect(() => {
    if (blocking && changePage) {
      setTimeout(() => {
        setBlocking(false);
        setChangePage(false);
      }, DEFAULT_THROTTLING);
    }
  }, [ blocking, changePage ]);

  // pre assign column from api
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

  // setState for blocking ui
  const onChangePage = () => {
    setBlocking(true);
    setChangePage(true);
  }

  return (
    <BlockUi tag="div" blocking={blocking}>
      <div>
        <MaterialTable
          title="Data Table"
          data={data}
          columns={columns}
          onChangePage={onChangePage}
          options={{
            grouping: true,
          }}
        />
      </div>
    </BlockUi>
  );
};

export default Table;
