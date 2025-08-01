import Navbar from "../../components/Navbar";
import PromotionsCard from "../../components/promotions/PromotionsCard";

function FreeBetsPage() {
  return (
    <div className="min-h-screen bg-bgBody overflow-y-scroll no-scrollbar ">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 mx-2 mb-12 place-items-center">
        <PromotionsCard src="/assets/promo4.png" />
        <PromotionsCard src="/assets/promo1.png" />
      </div>

      <div className="mb-20"></div>
    </div>
  );
}
export default FreeBetsPage;
