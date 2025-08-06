import { useAppState } from "../../context/AuthContext";
import MoveBack from "../../components/MoveBack";
import { Link, useNavigate } from "react-router";
import Loader from "../../components/Loader";
import { Smartphone } from "lucide-react";
import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Footer from "../../components/profile/Footer";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRegister } from "../../hooks/useAuth";

function RegisterPage() {
  const { registerFn, isLoading } = useRegister();
  const { dispatch } = useAppState();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();
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
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />{" "}
      <section className="bg-bgBody xs:py-2 lg:mb-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto md:mt-16">
            <div className="overflow-hidden bg-secondary rounded-md">
              <div className="flex justify-center items-center flex-col text-center my-6 gap-4">
                <h3 className="font-bold text-textGrey text-2xl">Welcome</h3>
                <p className="text-base text-textGrey font-light">
                  Bet wisely, enjoy responsibly, 18+!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit(submitData)}>
                  <div className="space-y-5">
                    <div>
                      <label className="text-base font-medium text-textGrey">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Smartphone />
                        </div>
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
                      </div>
                    </div>{" "}
                    <p className="text-textGrey">
                      Your Mpesa-number - winnings will be sent here{" "}
                    </p>
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-base font-medium text-textGrey">
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                        </div>

                        <input
                          type="passwor"
                          name="password"
                          {...register("password", { required: true })}
                          placeholder="Enter your password"
                          className="block w-full py-2 pl-10 pr-4 text-sm text-black  transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full lg:mt-6 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
                      >
                        {isLoading ? <Loader /> : "Register"}
                      </button>
                    </div>
                    <p className="text-sm text-textGrey text-center">
                      By clicking register in this site, You can confirm that
                      you are over 18 years old and you have read and agree to
                      the
                      <span className="underline cursor-pointer text-primary">
                        <Link to="/terms-and-conditions">
                          <p className="hover:underline">Terms of service</p>
                        </Link>
                      </span>
                    </p>
                    <div className="text-center">
                      <p className="text-base text-textGrey">
                        Already have an account?{" "}
                        <Link to="/login">
                          <a
                            href="#"
                            title=""
                            className="font-medium text-primary transition-all duration-200 hover:text-primary hover:underline"
                          >
                            Log In
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RegisterPage;
