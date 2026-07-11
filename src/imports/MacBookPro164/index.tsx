import imgRanikhet11 from "./d92dba1e42ae601c519592713fc99dac0339c60e.png";
import imgStarryNight1 from "./460a817ffc3817a18f5ccbaedfe13adc1e08a022.png";
import imgKainchiDham1 from "./fb47273566670376a0305867fe3b59a7a01e01a2.png";

export default function MacBookPro() {
  return (
    <div className="bg-black relative size-full" data-name="MacBook Pro 16' - 4">
      <a className="[word-break:break-word] absolute block cursor-pointer font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[0] left-[44px] text-[32px] text-white top-[38px] whitespace-nowrap">
        <p className="leading-[normal]">A A H A N</p>
      </a>
      <a className="[word-break:break-word] absolute block cursor-pointer font-['Cormorant_Garamond:Bold',sans-serif] font-bold leading-[0] left-[547px] text-[#d9d4cc] text-[24px] top-[53px] whitespace-nowrap">
        <p className="leading-[normal]">STORY</p>
      </a>
      <a className="[word-break:break-word] absolute block cursor-pointer font-['Cormorant_Garamond:Bold',sans-serif] font-bold leading-[0] left-[674px] text-[#d9d4cc] text-[24px] top-[53px] whitespace-nowrap">
        <p className="leading-[normal]">EXPERIENCE</p>
      </a>
      <p className="[word-break:break-word] absolute font-['Cormorant_Garamond:Bold',sans-serif] font-bold leading-[normal] left-[866px] text-[#d9d4cc] text-[24px] top-[53px] whitespace-nowrap">{`GALLERY `}</p>
      <p className="[word-break:break-word] absolute font-['Cormorant_Garamond:Bold',sans-serif] font-bold leading-[normal] left-[1021px] text-[#d9d4cc] text-[24px] top-[53px] whitespace-nowrap">LOCATION</p>
      <div className="absolute h-[23px] left-[1484px] top-[53px] w-[201px]" data-name="BOOK YOUR STAY">
        <div className="[word-break:break-word] absolute font-['Cormorant_Garamond:Bold',sans-serif] font-bold inset-0 leading-[0] text-[#d9d4cc] text-[24px]">
          <p className="leading-[normal] mb-0">BOOK YOUR STAY</p>
          <p className="leading-[normal]">​</p>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] left-[44px] text-[#ffd68b] text-[24px] top-[142px] whitespace-nowrap">Days at Aahan</p>
      <p className="[word-break:break-word] absolute font-['Cormorant_Garamond:Regular',sans-serif] font-normal leading-[normal] left-[44px] text-[24px] text-white top-[192px] w-[1487px]">{`The mountains have a way of calling everyone differently. Some answer with long hikes through the pines. Others with a quiet sunrise and a cup of chai overlooking the hills. However Nainital speaks to you, we'll help you discover it.`}</p>
      <div className="absolute h-[749px] left-[39px] top-[297px] w-[421px]" data-name="Ranikhet (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRanikhet11} />
      </div>
      <div className="absolute h-[746px] left-[1282px] top-[297px] w-[419px]" data-name="Starry Night 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStarryNight1} />
      </div>
      <div className="absolute h-[749px] left-[1273px] top-[297px] w-[422px]" data-name="Starry Night 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStarryNight1} />
      </div>
      <div className="absolute h-[750px] left-[473px] top-[296px] w-[787px]" data-name="Kainchi Dham 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[156.95%] left-[0.26%] max-w-none top-[-34.15%] w-full" src={imgKainchiDham1} />
        </div>
      </div>
    </div>
  );
}