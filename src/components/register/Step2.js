import React, { Component } from "react";
import { Typography } from "antd";
import FormData from "./FormData";

const { Title } = Typography;

class Step2 extends Component {

  render() {
    const { form, data, formFields } = this.props;

    return (
      <div className="register_stepper_form">
        <Title className="text_app_color_light" level={4}>
          {data.title}
        </Title>

        {/* dynamic question start */}
        <FormData form={form} data={data} formFields={formFields} />
        {/* dynamic question end */}
      </div>
    );
  }
}

export default Step2;
