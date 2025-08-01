function HotShape() {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-textGrey">🔥 Hot Games</h2>

      <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white font-bold text-xs sm:text-sm px-4 py-1 transform -skew-x-12 shadow-md hover:shadow-lg transition-all duration-300">
        <span className="inline-block transform skew-x-12 text-textGrey">
          Hot
        </span>
      </div>
    </div>
  );
}

export default HotShape;
