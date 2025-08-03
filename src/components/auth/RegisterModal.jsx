import { Modal, Button } from "antd";

import { useAppState } from "../../context/AuthContext";
import Loader from "../Loader";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import { Fingerprint } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRegister } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
function RegisterModal({ open, onOk, onCancel, showLoginForm }) {
  const { registerFn, isLoading } = useRegister();
  const { dispatch } = useAppState();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  async function submitData(data) {
    registerFn(data, {
      onSuccess: (user) => {
        if (!user?.user) {
          toast.error("Registration failed");
          return;
        }
        dispatch({ type: "createAccount", payload: user?.user });
        localStorage.setItem("user", JSON.stringify(user?.user));
        toast.success("Registered Successfully");
        navigate("/");
      },
      onError: (error) => {
        toast.error(error?.message);
      },
    });
  }

  return (
    <Modal
      className="custom-modal text-black"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      title="Register Here"
      footer={null}
      style={{ top: 20 }}
      centered={false}
    >
      <form
        onSubmit={handleSubmit(submitData)}
        className=" h-full p-0 m-0 text-textGrey"
      >
        <p className="text-white pb-2 mt-10">Phone Number</p>
        <div className="w-full  focus-within:ring-orange1 focus-within:border-orange1 rounded-md transition-all duration-200 border border-gray-200">
          <InputGroup>
            <InputLeftAddon className="rounded-l-md bg-gray-100 text-gray-700">
              +254
            </InputLeftAddon>
            <input
              type="tel"
              placeholder="phone number"
              className="w-full text-gray-600 bg-white py-2 pl-4 pr-4 text-sm rounded-r-md focus:outline-none"
              {...register("phone", {
                required: "Phone number is required",
                setValueAs: (v) => {
                  let value = v.replace(/\D/g, "");
                  if (/^7/.test(value)) value = `0${value}`;
                  return value.slice(0, 10);
                },
                validate: (v) =>
                  /^0\d{9}$/.test(v) ||
                  "Phone number must be 10 digits starting with 0",
              })}
              name="phone"
            />
          </InputGroup>
        </div>
        <p className="text-textGrey mt-2">
          Your Mpesa-number - winnings will be sent here
        </p>
        <p className="text-textGrey pt-6 pb-2">Password</p>
        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Fingerprint />
          </div>

          <input
            type="passwor"
            name="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className="block w-full py-2 pl-10 pr-4 text-sm text-black  transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
          />
        </div>

        <button
          className="w-full py-3 rounded-md my-6 bg-primary text-white"
          style={{ backgroundColor: "#FF6D00" }}
          type="submit"
        >
          {isLoading ? <Loader /> : "Register"}
        </button>
        <p className="text-sm text-center text-textGrey">
          By clicking register in this site, You can confirm that you are over
          18 years old and you have read and agree to the
          <span className="underline cursor-pointer text-primary">
            <a
              href="/pdf/terms-and-condition.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Terms of service
            </a>
          </span>
        </p>
        <p className="text-textGrey text-center my-6 ">
          Already have an account?{" "}
          <span
            className="underline cursor-pointer text-primary"
            onClick={() => showLoginForm()}
          >
            Log In?
          </span>
        </p>
      </form>
    </Modal>
  );
}

export default RegisterModal;
