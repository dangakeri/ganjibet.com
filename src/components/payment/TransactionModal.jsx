import { Modal } from "antd";

function TransactionModal({ open, onOk, icon, title }) {
  return (
    <Modal footer centered open={open}>
      <div className="text-center">{icon}</div>
      <h2 className="font-bold text-center py-5 text-3xl">{title}</h2>
      <div class="border-t-2 border-dashed border-gray-400 my-4 pl-2 pr-2"></div>
      <div className="flex justify-between p-3">
        <p className="text-black font-semibold">Amount</p>
        <p className="text-black font-semibold">KES100.00</p>
      </div>
      <div className="flex justify-between p-3">
        <p className="text-black font-semibold">Transaction ID </p>
        <p className="text-black font-semibold">SKJ56G6K</p>
      </div>
      <div className="text-center">
        <button
          onClick={onOk}
          type="submit"
          className="w-[320px] font-bold h-12 rounded-xl text-textGrey bg-primary border-primary text-xl mt-5"
        >
          Done
        </button>
      </div>
    </Modal>
  );
}

export default TransactionModal;

{
  /* <ModalDisplay
  open={isModalOpen}
  title="Deposit Successful"
  onOk={handleOk}
  onCancel={handleCancel}
  icon={<i class="bi bi-credit-card text-primary h-20 text-7xl"></i>}
/>; */
}
