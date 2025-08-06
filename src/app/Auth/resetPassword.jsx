import { Input, Button } from "antd";
import MoveBack from "../../components/MoveBack";
import PinInput from "react-pin-input";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import Footer from "../../components/profile/Footer";
import { useResetPassword } from "../../hooks/useAuth";

function ResetPassword() {
  const { resetPasswordAPI, isPending } = useResetPassword();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  const navigate = useNavigate();

  function submitData() {
    if (!otp || !newPassword || !phone) {
      toast.error("All fields are required");
      return;
    }
    const data = { otp, newPassword, phone };

    resetPasswordAPI(data, {
      onSuccess: (dt) => {
        if (dt?.success == true) {
          navigate("/login");
        }
      },
    });
  }
  return (
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />
      <div className="flex justify-between items-center flex-col bg-bgBody min-h-screen w-full overflow-x-auto">
        <div className="bg-secondary rounded-lg mx-4  p-6">
          <p className="text-base font-bold text-textGrey">
            Enter new password
          </p>
          <div className="flex justify-start flex-col">
            <p className="mt-3 text-textGrey">Enter Otp code</p>{" "}
            <PinInput
              length={6}
              initialValue=""
              onChange={(e) => setOtp(e)}
              type="numeric"
              inputMode="number"
              style={{
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                color: "#fff",
                gap: "3px",
              }}
              inputStyle={{
                borderColor: "#FF6D00",
                borderRadius: "10px",
                // margin: "5px",
                border: "solid #5E6268 1px",
                width: "100%",
                maxWidth: "50px",
                height: "50px",
                fontSize: "18px",
                textAlign: "center",
              }}
              inputFocusStyle={{ borderColor: "#FF6D00" }}
              autoSelect={true}
              regexCriteria={/^[0-9]*$/}
            />
          </div>
          <Input
            placeholder="new password"
            className="border-bgheader my-4"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button
            type="primar"
            className="bg-primary w-full mt-10 text-white"
            onClick={() => submitData()}
          >
            {isPending ? <Loader /> : "Confirm password"}
          </Button>
        </div>
        <Footer />
        <div className="md:px-4 px-4 py-4 mt-10"></div>
      </div>
    </div>
  );
}

export default ResetPassword;
