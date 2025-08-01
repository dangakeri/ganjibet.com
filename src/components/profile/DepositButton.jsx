function DepositButton({ title, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`lg:h-10 lg:w-full h-6 w-full  ${color} text-black lg:font-semibold lg:rounded-[12px] rounded-md text-sm`}
    >
      +{title}
    </button>
  );
}
export default DepositButton;
