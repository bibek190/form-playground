import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormInput from "./FormInput";
import { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
];

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = form;
      const authSnapPromise = signInWithEmailAndPassword(auth, email, password);
      const { user } = await authSnapPromise;

      toast.success("Success....");
      navigate("/");
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
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
