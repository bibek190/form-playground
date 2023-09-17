import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import { useState } from "react";

const inputs = [
  {
    id: 1,
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "text",
  },
  {
    id: 2,
    name: "password",
    label: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    id: 3,
    name: "fName",
    label: "First Name",
    placeholder: "Place your First name",
    type: "text",
  },
  {
    id: 4,
    name: "lName",
    label: "Last Name",
    placeholder: "Place your last name",
    type: "text",
  },
];

function Register() {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className=" d-flex justify-content-center align-items-center  h-100">
      <Form
        className="flex-column p-5 mt-4  bg-red bg-secondary border"
        onSubmit={handleOnSubmit}
      >
        {inputs.map((item, i) => (
          <FormInput {...item} key={i} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit" className="w-50">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
