import { Modal } from "antd";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router";
import { useAppState } from "../../context/AuthContext";
import Loader from "../Loader";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import { Fingerprint } from "lucide-react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLogIn } from "../../hooks/useAuth";

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  showRegisterModal: PropTypes.func.isRequired,
};

function LoginModal({ open, onOk, onCancel, showRegisterModal }) {
  const { dispatch } = useAppState();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { logInFn, isLoading } = useLogIn();

  const { register, handleSubmit } = useForm();

  function submitData(data) {
    logInFn(data, {
      onSuccess: (data) => {
        if (!data?.user) {
          return;
        }
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch({ type: "createAccount", payload: data?.user });
        toast.success("Log in successful");
        navigate("/");
      },
      onError: (err) => {
        toast.error(err?.message);
      },
    });
  }

  return (
    <Modal
      className="custom-modal text-black"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      style={{ top: 20 }}
      centered={false}
      title="Login Here"
      footer={null}
    >
      <form
        className="h-full p-0 m-0 text-black"
        onSubmit={handleSubmit(submitData)}
      >
        <p className="text-textGrey pb-2 mt-10">Phone Number</p>
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
        <p className="text-textGrey pt-6 pb-2">Password</p>
        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Fingerprint />
          </div>

          <input
            type="passwor"
            {...register("password", { required: true })}
            name="password"
            id=""
            placeholder="Enter your password"
            className="block w-full py-2 pl-10 pr-4 text-sm text-black  transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
          />
        </div>
        <Link to="/forgotpassword">
          <p className="text-primary cursor-pointer my-6 underline">
            Forgot Password
          </p>
        </Link>

        <button
          className="w-full py-3 rounded-md mb-6 bg-primary text-black"
          style={{ backgroundColor: "#FFD600" }}
          type="submit"
        >
          {isLoading ? <Loader /> : "Login"}
        </button>
        <p className="text-sm text-center text-textGrey">
          By clicking login in this site, You can confirm that you are over 18
          years old and you have read and agree to the
          <span className="underline cursor-pointer text-primary">
            <a
              href="/pdf/terms-and-condition.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:underline cursor-pointer"
            >
              Terms of Service
            </a>
          </span>
        </p>
        <p className="text-textGrey text-center my-6">
          Don't have an account?
          <span
            className="underline text-primary cursor-pointer"
            onClick={() => showRegisterModal()}
          >
            Create Account?
          </span>
        </p>
      </form>
    </Modal>
  );
}

export default LoginModal;
