import { useForm } from "react-hook-form";
import { Input, Button } from "antd";
import MoveBack from "../../components/MoveBack";
import { useNavigate } from "react-router";
import Footer from "../../components/profile/Footer";
import { useForgotPassword } from "../../hooks/useAuth";
import { Controller } from "react-hook-form";
import toast from "react-hot-toast";

function ForgotPasswordPage() {
  return (
    <div className="bg-bgBody min-h-screen overflow-x-auto">
      <MoveBack />
      <div className="flex items-center justify-center flex-col">
        <ForgotCard />
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

function ForgotCard() {
  const { forgotPasswordAPI, isPending } = useForgotPassword();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data) => {
    forgotPasswordAPI(data, {
      onSuccess: (dt) => {
        navigate(`/reset?phone=${data.phone}`);
        toast.success(dt?.message);
      },
      onError: (dt) => {
        toast.error(dt?.message || "Something went wrong ,Kindly try again");
      },
    });
  };

  return (
    <div className="px-4 lg:mx10 xs:mx-4 max-w-3xl py-4 mt-10 sm:px-6 lg:px-8 bg-secondary">
      <p className="text-base font-bold text-textGrey">Forgot Password</p>
      <p className="text-textGrey font-normal text-sm my-4">
        Enter your phone number to receive a reset code
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Please enter a valid phone number (10-15 digits)",
            },
          }}
          render={({ field }) => (
            <>
              <Input
                {...field}
                placeholder="Phone number"
                className="border-textGrey"
                status={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </>
          )}
        />

        <Button
          htmlType="submit"
          type="primary"
          className="bg-primary w-full mt-10 text-black"
          loading={isPending}
          disabled={isPending}
        >
          Send code
        </Button>
      </form>

      <p
        className="text-primary my-6 cursor-pointer"
        onClick={handleSubmit(onSubmit)}
      >
        Resend code
      </p>
    </div>
  );
}
