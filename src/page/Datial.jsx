import { Link, useParams } from "react-router-dom";
import Brining from "../components/Brining";

import { useEffect, useState } from "react";
async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}
function Datial() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData("http://localhost:3000/data?slug=" + slug);
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchData();
  }, [slug]);
  return (
    <>
     {slug.map((item)=>{
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
           <p className="font-bold text-[14px] text-[#000000] md:w-[73px] md:mb-[47px]">
             $ 2,999
           </p>
           <div className="md:flex md:items-center ">
             <button className="btn md:btn-md ">-</button>
             <div className="font-bold text-[14px] text-black w-[16px] text-center">
               1
             </div>
             <button className="btn md:btn-md md:mr-[16px]">+</button>
             <Link className=" btn md:btn-md bg-[#FBAF85] text-white">
               See Product
             </Link>
           </div>
         </div>
       </div>
     </section>
     <section className="md:mb-[160px]">
       <div className="container md:flex md:gap-[125px]">
         <div>
           <h2 className="font-bold text-[32px] md:w-[445px] text-[#000000] md:mb-[32px]">
             FEATURES
           </h2>
           <p className="font-medium text-[15px] md:w-[635px] text-[#000000] opacity-[0.5]">
             Featuring a genuine leather head strap and premium earcups, these
             headphones deliver superior comfort for those who like to enjoy
             endless listening. It includes intuitive controls designed for any
             situation. Whether you’re taking a business call or just in your
             own personal space, the auto on/off and pause features ensure that
             you’ll never miss a beat. <br />
             <br />
             <br /> The advanced Active Noise Cancellation with built-in
             equalizer allow you to experience your audio world on your terms.
             It lets you enjoy your audio in peace, but quickly interact with
             your surroundings when you need to. Combined with Bluetooth 5. 0
             compliant connectivity and 17 hour battery life, the XX99 Mark II
             headphones gives you superior sound, cutting-edge technology, and
             a modern design aesthetic.
           </p>
         </div>
         <div>
           <h2 className="font-bold text-[32px] md:w-[445px] text-[#000000] md:mb-[32px] ">
             in the box
           </h2>
           <ul>
             <li className="md:flex md:gap-[26px] md:mb-[8px]">
               <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px] ">
                 1x
               </span>
               <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                 Headphone Unit
               </p>
             </li>
             <li className="md:flex md:gap-[26px] md:mb-[8px]">
               <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                 1x
               </span>
               <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                 Headphone Unit
               </p>
             </li>
             <li className="md:flex md:gap-[26px] md:mb-[8px]">
               <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                 1x
               </span>
               <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                 Headphone Unit
               </p>
             </li>
             <li className="md:flex md:gap-[26px] md:mb-[8px]">
               <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                 1x
               </span>
               <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                 Headphone Unit
               </p>
             </li>
             <li className="md:flex md:gap-[26px] md:mb-[8px]">
               <span className="text-[#D87D4A] font-bold text-[15px] md:w-[15px]">
                 1x
               </span>
               <p className="text-[#000000] font-medium text-[15px] md:w-[115px] opacity-[0.5]">
                 Headphone Unit
               </p>
             </li>
           </ul>
         </div>
       </div>
     </section>
     <section className="md:mb-[160px]">
       <div className="container md:flex md:gap-[50px]">
         <div className="md:pb-[24px]">
           <img
             className="rounded-md md:w-[450px] md:h-[200px] md:pb-[24px] "
             src="/assets/shared/desktop/image-best-gear.jpg"
             alt=""
           />
           <img
             className="rounded-md md:w-[450px] md:h-[200px] "
             src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
             alt=""
           />
         </div>
         <div>
           <img
             className="rounded-md md:w-[600px] md:h-[400px] "
             src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
             alt=""
           />
         </div>
       </div>
     </section>
     <section className="md:mb-[160px]">
       <div className="container">
         <div className="md:flex md:justify-center md:mb-[64px]">
           <h1 className=" uppercase text-[#000000] text-[32px] md:w-[312px] font-bold md:text-center">
             you may also like
           </h1>
         </div>
         <div className="md:flex md:justify-between md:items-center md:gap-[30px]">
           <div>
             <img
               className="md:w-[350px] md:h-[318px] rounded-md"
               src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
               alt=""
             />
             <div className="md:flex md:flex-col md:items-center md:pt-[40px]">
               <p className="md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px]">
                 {/* XX99 MARK I */}
               </p>
               <Link className="btn md:btn-md bg-[#D87D4A] text-white">
                 See Product
               </Link>
             </div>
           </div>
           <div>
             <img
               className="md:w-[350px] md:h-[318px] rounded-md"
               src="/assets/shared/desktop/image-xx59-headphones.jpg"
               alt=""
             />
             <div className="md:flex md:flex-col md:items-center md:pt-[40px]">
               <p className=" md:text-center md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px]">
                 XX59
               </p>
               <Link className="btn md:btn-md bg-[#D87D4A] text-white">
                 See Product
               </Link>
             </div>
           </div>
           <div>
             <img
               className="md:w-[350px] md:h-[318px] rounded-md"
               src="/assets/shared/desktop/image-zx9-speaker.jpg"
               alt=""
             />
             <div className="md:flex md:flex-col md:items-center md:pt-[40px]">
               <p className="md:w-[163px] font-bold text-[24px] text-[#000000] md:mb-[32px]">
                 ZX9 SPEAKER
               </p>
               <Link className="btn md:btn-md bg-[#D87D4A] text-white">
                 See Product
               </Link>
             </div>
           </div>
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
     })}
    </>
  );
}

export default Datial;
