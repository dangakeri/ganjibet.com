import Navbar from "../../components/Navbar";
import PromotionsCard from "../../components/promotions/PromotionsCard";

function PromotionsPage() {
  return (
    <div className="min-h-screen bg-bgBody  overflow-y-scroll no-scrollbar ">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-3 mb-16 max-w-6xl mx-auto">
        <PromotionsCard src="/assets/banner1.webp" />
        <PromotionsCard src="/assets/banner2.webp" />
        <PromotionsCard src="/assets/banner3.webp" />
        <PromotionsCard src="/assets/banner4.webp" />
      </div>{" "}
      <div className="pb-10"></div>
    </div>
  );
}

export default PromotionsPage;
