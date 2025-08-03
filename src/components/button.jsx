function Button({ title, color = "bg-primary", onClick }) {
  return (
    <div>
      <button
        className={`px-3 py-1.5 border-gray-50 text-white text-sm font-medium w-max xs:w-max rounded-md ${color}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
