import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function CorouselBanner() {
  return (
    <div className="lg:grid lg:grid-cols-[2vw,1fr,2vw] sm:min-w-full">
      <div className="col-span-3 px-2 max-w-[1280px] lg:mb-6  w-full md:h-[10rem] h-[12rem] xs:h-[8rem] rounded">
        <Carousel
          autoplay
          dots={false}
          infinite={true}
          className="md:h-[12rem] max-w-[1280px] h-[12rem] xs:h-[8rem] w-full "
        >
          <img
            src="/assets/banner1.webp"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/assets/banner2.webp"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/assets/banner3.webp"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/assets/banner4.webp"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default CorouselBanner;
