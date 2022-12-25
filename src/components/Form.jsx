import React from "react";
import { Input, Radio, Checkbox } from "antd";
import Header from "./Header";

const Form = ({ key, value, formData, setFormData }) => {
  const { TextArea } = Input;

  const onChanges = (e, checks) => {
    if (e.target.checked) {
      let finalvalue = formData.map((val) => {
        if (val.id === value.id) {
          // if (fortodo === "desc") {
          val.diagnosed = e.target.value;

          // } else if (fortodo === "t2") {
          // val.todo2 = newdata;
          // } else {
          // val.todo3 = newdata;
          // }
        }
        return val;
      });
      setFormData(finalvalue);
    }
  };
  const handleFormChange = (newdata, fortodo) => {
    let finalvalue = formData.map((val) => {
      if (val.id === value.id) {
        if (fortodo === "desc") {
          val.description = newdata;
        } else if (fortodo === "t2") {
          val.todo2 = newdata;
        } else {
          val.todo3 = newdata;
        }
      }
      return val;
    });
    setFormData(finalvalue);
  };

  return (
    <div>
      <Header />
      <div className="form-wrapper" key={key}>
        <p>
          If You have problems with pain/aches,stiffness,weakness or functional
          problems describe this/these below. (List the symptoms in descending
          order with the most troublesome first)
        </p>
        <TextArea
          rows={4}
          value={value.description}
          onChange={(e) => handleFormChange(e.target.value, "desc")}
        />
        <div className="diagnosed-section">
          <p>Have You been Diagnosed with this problem ?</p>
          <Radio.Group onChange={onChanges} value={value.diagnosed}>
            <Radio value="nr">Not Relevent</Radio>
            <Radio checked={value.diagnosed === "yes"} value="yes">
              Yes
            </Radio>
            <Radio checked={value.diagnosed === "no"} value="no">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="diagnosed-section">
          <p>Did the Problem start after a physical trauma ?</p>
          <Radio.Group onChange={onChanges} value={value.physical}>
            <Radio value="nr">Not Relevent</Radio>
            <Radio checked={value.physical === "yes"} value="yes">
              Yes
            </Radio>
            <Radio checked={value.physical === "no"} value="no">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="diagnosed-section">
          <p>Did the Problem start after a mental trauma ?</p>
          <Radio.Group onChange={onChanges} value={value.mental}>
            <Radio value="nr">Not Relevent</Radio>
            <Radio checked={value.mental === "yes"} value="yes">
              Yes
            </Radio>
            <Radio checked={value.mental === "no"} value="no">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="exp-section">
          <p>How often do you experience the problem ?</p>
          <Radio.Group onChange={onChanges} value={value.timeProblem}>
            <Radio value="nr">Not Relevent</Radio>
            <Radio checked={value.mental === "Daily"} value="Daily">
              Daily
            </Radio>
            <Radio
              checked={value.mental === "Several times/week"}
              value="Several times/week"
            >
              Several times/week
            </Radio>
            <Radio
              checked={value.mental === "A few times/month"}
              value="A few times/month"
            >
              A few times/month
            </Radio>
            <Radio
              checked={value.mental === "A few times/year"}
              value="A few times/year"
            >
              A few times/year
            </Radio>
          </Radio.Group>
        </div>
        <div className="exp-section">
          <p>How often do you experience the problem ?</p>
          <div>
            <Checkbox onChange={onChanges} />
            <span className="check-fix">Not Relevent</span>
            <br />
            <Checkbox className="check-each" onChange={onChanges} />
            <span className="check-fix">When lying down</span>
            <br />
            <Checkbox className="check-each" onChange={onChanges} />
            <span className="check-fix">When sitting</span>
            <br />
            <Checkbox className="check-each" onChange={onChanges} />
            <span className="check-fix">Under Standing</span>
            <br />
            <Checkbox className="check-each" onChange={onChanges} />
            <span className="check-fix">In Walking</span>
          </div>
        </div>
        <div className="avg-section">
          <p>
            How intense is the experience of the problem on average on a 0-10
            scale?
          </p>
          <Radio.Group onChange={onChanges} value={value.rating}>
            <Radio value={0}>0</Radio>
            <Radio checked={value.rating === 1} value={1}>
              1
            </Radio>
            <Radio checked={value.rating === 1} value={2}>
              2
            </Radio>
            <Radio checked={value.rating === 3} value={3}>
              3
            </Radio>
            <Radio checked={value.rating === 4} value={4}>
              4
            </Radio>
            <Radio checked={value.rating === 5} value={5}>
              5
            </Radio>
            <Radio checked={value.rating === 6} value={6}>
              6
            </Radio>
            <Radio checked={value.rating === 7} value={7}>
              7
            </Radio>
            <Radio checked={value.rating === 7} value={8}>
              8
            </Radio>
            <Radio checked={value.rating === 9} value={9}>
              9
            </Radio>
            <Radio checked={value.rating === 10} value={10}>
              10
            </Radio>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default Form;
