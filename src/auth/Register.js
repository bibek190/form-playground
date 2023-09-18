import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

const inputs = [
  {
    id: 1,
    name: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    required: true,
  },
  {
    id: 2,
    name: "password",
    label: "password",
    placeholder: "Password",
    type: "password",
    required: true,
  },
  {
    id: 3,
    name: "fName",
    label: "First Name",
    placeholder: "Place your First name",
    type: "text",
    required: true,
  },
  {
    id: 4,
    name: "lName",
    label: "Last Name",
    placeholder: "Place your last name",
    type: "text",
    required: true,
  },
];

function Register() {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password, fName, lName } = form;
      const authPromise = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await authPromise;
      const data = { email, fName, lName };

      const docRef = await addDoc(collection(db, "users"), {
        ...data,
      });

      console.log(docRef);
      toast.success("success");
    } catch (error) {
      toast.error(error.message);
    }
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
