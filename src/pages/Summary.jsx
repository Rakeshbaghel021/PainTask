import { Button, Table } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Summary = () => {
  const { state } = useLocation();

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Diagnosed",
      dataIndex: "diagnosed",
      key: "diagnosed",
    },
    {
      title: "Physical",
      dataIndex: "physical",
      key: "physical",
    },
  ];
  console.log(state);
  return (
    <div className="header">
      <h2>Summary </h2>
      <Table dataSource={state} columns={columns} />;
      <div className="back-next">
        <Link to="/">
          <Button className="btn-style" type="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
