import React from "react";
import CountdownTimer from "./CountDown";

const LimitOffer = () => {
  return (
    <div className="px-[100px]">
      <div className="grid  gap-5">

        
        <div className="[grid-column:1/4] [grid-row:1/2] relative h-[520px] bg-[url('/images/discount.png')] bg-cover bg-center bg-no-repeat">
          
        
          <div className="absolute inset-6 border border-white/70"></div>

         
          <div className="absolute inset-6 flex flex-col justify-center px-12">
            <h5 className="text-white text-[20px] mb-3">
              HOT DEAL FURNITURE
            </h5>

            <h1 className="text-white text-[48px] leading-tight font-semibold">
              Furniture Limit Offer <br /> 30% Off
            </h1>

            <button className="mt-8 text-white border border-white px-6 py-3 w-[170px] flex items-center justify-center gap-2">
              BUY NOW
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>

       
        <div className="[grid-column:4/6] [grid-row:1/2] relative h-[520px] bg-[url('/images/timer.png')] bg-cover bg-center bg-no-repeat">

         
          <div className="absolute inset-6 border border-white/70"></div>

         
          <div className="absolute inset-6 flex flex-col justify-center text-center px-12">
            <h5 className="text-white text-[20px] mb-3">
              HOT DEAL FURNITURE
            </h5>

            <h1 className="text-white text-[44px] leading-tight font-semibold">
              Deals OF The Week
            </h1>

            <div className="mt-6">
              <CountdownTimer />
            </div>

            <button className="mt-10 text-white border border-white px-6 py-3 w-[170px] self-center flex items-center justify-center gap-2">
              BUY NOW
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LimitOffer;
