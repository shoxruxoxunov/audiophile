import { Link, useParams } from "react-router-dom";
import Brining from "../components/Brining";
//  async function getData(slug){
//   const req = await fetch("http://localhost:3000/data?=slug" + slug);
// }
async function Category() {
  const { slug } = useParams();
 

  // Fetch('http://localhost:3000/data/?slug')

  return (
    <>
      <section className="md:pt-[160px] md:mb-[160px]">
        <div className="container  md:flex md:items-center md:gap-[125px]">
          <div class="">
            <img
              className="w-[540px] h-[560px] rounded-md"
              src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="font-medium text-[14px] text-[#D87D4A] ">
              NEW PRODUCT
            </h3>
            <h1 className="font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px]">
              XX99 Mark II Headphones
            </h1>
            <p className="md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link className=" btn md:btn-md bg-[#FBAF85] text-white">
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="md:mb-[160px]">
        <div className="container  md:flex md:flex-row-reverse md:items-center md:gap-[125px]">
          <div class="">
            <img
              className="w-[540px] h-[560px] rounded-md"
              src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px]">
              XX99 Mark I Headphones
            </h1>
            <p className="md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link className=" btn md:btn-md bg-[#FBAF85] text-white">
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="md:mb-[160px]">
        <div className="container  md:flex  md:items-center md:gap-[125px]">
          <div class="">
            <img
              className="w-[540px] h-[560px] rounded-md"
              src="/assets/shared/desktop/image-xx59-headphones.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-[40px] md:w-[445px] text-[#000000] md:mb-[32px]">
              XX59 Headphones
            </h1>
            <p className="md:w-[445px] text-[#000000] font-semibold text-[15px] opacity-[50%] md:mb-[24px]">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link className=" btn md:btn-md bg-[#FBAF85] text-white">
              See Product
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white  md:pb-[120px] ">
        <div className="container flex flex-col md:flex-row gap-[30px]">
          <div className=" flex flex-col items-center mt-[150px]  bg-[#F1F1F1] rounded-[8px] w-[350px] h-[204px] ">
            <img
              className=" relative bottom-[50px] left-[0px] lg:w-[122px] lg:h-[160px] md:w-[80px] md:h-[104px] w-[80px] h-[104px] "
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
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
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
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
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
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
      <Brining />
    </>
  );
}

export default Category;
