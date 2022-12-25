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
    {
      title: "Mental",
      dataIndex: "mental",
      key: "mental",
    },
    {
      title: "TimeProblem",
      dataIndex: "timeProblem",
      key: "timeProblem",
    },
    {
      title: "Average",
      dataIndex: "multicheck",
      key: "multicheck",
      render: (multicheck) => <>{multicheck.join(" , ")}</>,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];
  return (
    <div className="header-table">
      <h2 style={{ marginBottom: "1rem", color: "#3672af" }}>Summary</h2>
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
