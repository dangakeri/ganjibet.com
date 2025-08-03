import MoveBack from "../../components/MoveBack";
import { Link, useNavigate } from "react-router";
import { useAppState } from "../../context/AuthContext";
import Loader from "../../components/Loader";
import { Fingerprint } from "lucide-react";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import Footer from "../../components/profile/Footer";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useLogIn } from "../../hooks/useAuth";

function LoginPage() {
  const { dispatch } = useAppState();
  const { logInFn, isLoading } = useLogIn();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleSubmit, register } = useForm();
  function submitLoginData(data) {
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
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />
      <section className="bg-bgBody xs:py-2 xs:pb-6 lg:mb-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto md:mt-16">
            <div className="overflow-hidden bg-secondary rounded-md">
              <div className="flex justify-center items-center flex-col text-center my-6 gap-4">
                <h3 className="font-bold text-textGrey text-2xl">Welcome</h3>
                <p className="text-base text-textGrey font-light">
                  Bet smart. Play responsibly. 18+ only!
                </p>
              </div>
              <div className="px-4 pb-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit(submitLoginData)}>
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base text-textGrey font-medium"
                      >
                        Phone number
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
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
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-textGrey"
                        >
                          Password{" "}
                        </label>

                        <Link to={`/forgotpassword`}>
                          <a
                            href="#"
                            title=""
                            className="text-sm font-medium text-primary transition-all duration-200 hover:text-primary focus:text-primary hover:underline"
                          >
                            Forgot password?
                          </a>
                        </Link>
                      </div>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Fingerprint />
                        </div>

                        <input
                          type="passwor"
                          name="password"
                          id=""
                          {...register("password", { required: true })}
                          placeholder="Enter your password"
                          className="block w-full py-2 pl-10 pr-4 text-sm text-black transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full lg:mt-6 text-white  px-4 py-2 text-base font-semibold transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-primary focus:bg-primary"
                      >
                        {isLoading ? <Loader /> : "Login"}
                      </button>
                    </div>
                    <p className="text-sm text-textGrey text-center">
                      By clicking login in this site, You can confirm that you
                      are over 18 years old and you have read and agree to the
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
                    <div className="text-center">
                      <p className="text-base text-textGrey">
                        Don’t have an account?
                        <Link to={`/register`}>
                          <a
                            href="#"
                            title=""
                            className="font-medium text-primary transition-all duration-200 hover:text-primary hover:underline"
                          >
                            Create account
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        <Footer />
      </section>
    </div>
  );
}

export default LoginPage;
