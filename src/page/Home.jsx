import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-black  ">
        <div className="container bg-[url('./assets/home/mobile/image-header.jpg')] bg-center bg-cover lg:bg-[url('./assets/home/desktop/image-hero.jpg')] md:bg-[url('./assets/home/tablet/image-header.jpg')]">
          <div className="flex flex-col items-center md:items-start md:w-96">
            <h3 className="lg:w-[199px] md:w-[199px] font-medium text-[14px] text-[#FFFFFF] opacity-[50%] pt-[128px] pb-[24px] md:text-center lg:ml-[80px] md:ml-0">
              NEW PRODUCT
            </h3>
            <h1 className="font-bold text-[56px] text-[#FFFFFF] lg:w-[396px] md:w-[396px] w-[328px] pb-[24px] ">
              XX99 Mark II Headphones
            </h1>
            <p className="text-[15px] font-medium lg:w-[349px] md:w-[349px] w-[328px] text-[#FFFFFF] opacity-[75%] pb-[40px] text-center">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn md:btn-md lg:btn-lg bg-[#D87D4A] text-white mb-[158px] lg:ml-[80px] md:ml-0">
              See Product
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white  pb-[120px] ">
        <div className="container flex flex-col md:flex-row gap-[30px]">
          <div className=" flex flex-col items-center mt-[150px]  bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className=" relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px] "
              src="./assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                HEADPHONES
              </p>
              <Link className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%] ">
                Shop
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center mt-[150px]  bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className="  relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px]"
              src="./assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                HEADPHONES
              </p>
              <Link className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%]">
                Shop
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center mt-[150px] relative bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className="  relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px]"
              src="./assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
            <div className="text-center pb-[24px]">
              <p className="font-bold text-[18px] lg:w-[133px] text-[#000000]">
                HEADPHONES
              </p>
              <Link className="font-bold text-[13px] lg:w-[39px] text-[#000000] opacity-[50%]">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[30px]">
        <div className=" container bg-[#D87D4A] rounded-[8px] ">
          <div className=" flex flex-col items-center lg:flex-row  ">
            <img
              className=" w-[172px] h-[207px] lg:w-[410px] lg:h-[493px] md:w-[197px] md:h-[237px] relative top-10 "
              src="./assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
            <div className=" text-center relative top-[0px]">
              <h2 className=" w-[280px]  lg:-w[260px] md:w-[231px] font-bold text-[56px] text-white pb-[24px] lg:ml-[50px] md:ml-0 ">
                ZX9 <br /> SPEAKER
              </h2>
              <p className="lg:w-[349px] md:w-[349px] font-medium text-[15px] text-[#FFFFFF] opacity-[75%] pb-[40px] w-[280px] text-center">
                Upgrade to premium speakers that are <br /> phenomenally built
                to deliver truly remarkable sound.
              </p>
              <button className=" btn md:btn-md lg:btn-lg bg-[#4C4C4C] text-white">
                See Product
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[30px]">
        <div className="container flex  items-center lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]  md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')]   bg-cover h-[320px] rounded-[8px]">
          <div>
            <h2 className="text-[#000000] text-[28px] font-bold w-[202px] mb-[32px]">
              ZX7 SPEAKER
            </h2>
            <button className="btn bg-[#000000] text-white md:btn-md lg:btn-lg">
              See Product
            </button>
          </div>
        </div>
      </section>
      <section className="mb-[200px]">
        <div className="container  flex justify-between  gap-[50px] w-full ">
          <img
            className="rounded-[8px] lg:w-[540px] w-[320px] md:w-[339px] "
            src="./assets/home/mobile/image-earphones-yx1.jpg"
            alt=""
          />

          <div className="bg-[#F1F1F1] lg:w-[540px] w-[320px] md:w-[339px] h-[320px]   ">
            <div className="flex flex-col items-center">
              <h2
                className="text-[#000000] text-[28px] font-bold w-[202px] mb-[32px] pt-[20px] text-center
              "
              >
                YX1 EARPHONES
              </h2>
              <button className="btn bg-[#000000] text-white md:btn-md lg:btn-lg">
                See Product
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div>
            <h2 className="text-[#000000]  md:w-[445px] font-bold text-[40px]">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>
            <p className="md:w-[445px] font-medium text-[15px] text-black opacity-[50%]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="">
            <img
              className="rounded-[8px] relative top[50px] right-[10px]"
              src="./assets/shared/desktop/image-best-gear.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
