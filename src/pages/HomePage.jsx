import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const HomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const handleSubmit = () => {
    localStorage.setItem("data", JSON.stringify(formData));
    navigate("/summary", { state: formData });
  };
  const handleRemove = () => {
    setFormData([
      {
        id: Math.random() * 1000,
        description: "",
        diagnosed: "nr",
        physical: "nr",
        mental: "nr",
        timeProblem: "nr",
        rating: 0,
      },
    ]);
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          id: Math.random() * 1000,
          description: "",
          diagnosed: "nr",
          physical: "nr",
          mental: "nr",
          timeProblem: "nr",
          rating: 0,
        },
      ])
    );
  };
  useEffect(() => {
    let newdata = JSON.parse(localStorage.getItem("data"));
    setFormData(newdata);
  }, []);
  return (
    <div>
      <Button className="btn-style-clear" onClick={() => handleRemove()}>
        Clear All Data
      </Button>
      {formData &&
        formData.map((val) => {
          return (
            <Form
              key={val.id}
              value={val}
              formData={formData}
              setFormData={setFormData}
              handleRemove={handleRemove}
            />
          );
        })}
      <div className="btn">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => {
            setFormData([
              ...formData,
              {
                id: Math.random() * 1000,
                description: "",
                diagnosed: "nr",
                physical: "nr",
                mental: "nr",
                timeProblem: "nr",
                rating: 0,
              },
            ]);
          }}
        />
      </div>
      <div className="back-next">
        <Button className="btn-style" type="primary">
          Back
        </Button>
        <Button className="btn-style" type="primary" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
