import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Button from "../button";

function AuthNavs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  function showModal() {
    setIsModalOpen(true);
  }
  function showRegisterModal() {
    setRegisterModalOpen(true);
  }
  function handleOk() {
    setIsModalOpen(false);
  }
  function registerHandleOk() {
    setRegisterModalOpen(false);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }
  function registerHandleCancel() {
    setRegisterModalOpen(false);
  }

  function showLoginForm() {
    setRegisterModalOpen(false);
    setIsModalOpen(true);
  }

  function showRegisterForm() {
    setRegisterModalOpen(true);
    setIsModalOpen(false);
  }
  return (
    <div className="space-x-2 flex flex-row">
      <Button title="Login" color="bg-primary" onClick={showModal} />
      <LoginModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        showRegisterModal={showRegisterForm}
      />
      <Button title="Register" onClick={showRegisterModal} />
      <RegisterModal
        open={isRegisterModalOpen}
        onCancel={registerHandleCancel}
        onOk={registerHandleOk}
        showLoginForm={showLoginForm}
      />
    </div>
  );
}
export default AuthNavs;
