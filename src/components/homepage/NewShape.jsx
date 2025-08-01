function NewShape({ title, color, subtitle }) {
  return (
    <div className="flex gap-3 items-center">
      <h2 className="text-md font-medium text-textGrey">{title}</h2>

      <div
        style={{ backgroundColor: color }}
        className={`inline-block text-textGrey font-semibold text-xs sm:text-sm px-4 sm:px-3 py-0.5 transform -skew-x-12 shadow-md hover:shadow-lg transition-all duration-200`}
      >
        <span className="inline-block transform skew-x-12 text-sm sm:text-base">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default NewShape;
