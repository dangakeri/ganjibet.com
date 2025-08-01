function PromotionsCard({ src }) {
  return (
    <div className="overflow-hidden rounded shadow hover:shadow transition-all duration-200">
      <div className="h60">
        <img className="h-full w-full object-cover" src={src} alt="Promotion" />
      </div>
      <div className="px-3 py-5 bg-secondary flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-base text-textGrey truncate">
            Aviatro Freebets
          </h2>
          <p className="text-sm text-textGrey mt-0.5">Ends Tomorrow</p>
        </div>
        <button className="bg-primary text-black font-medium py-1.5 px-3 rounded-md text-xs hover:bg-yellow-600 transition-colors whitespace-nowrap">
          View Offer
        </button>
      </div>
    </div>
  );
}

export default PromotionsCard;
