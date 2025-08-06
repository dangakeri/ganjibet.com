import { Carousel } from "antd";

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
            src="/banner1.png"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/banner2.png"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/banner3.png"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
          <img
            src="/banner4.png"
            alt="most populars banner"
            className="object-fit w-full h-full lg:h-[12rem]"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default CorouselBanner;
