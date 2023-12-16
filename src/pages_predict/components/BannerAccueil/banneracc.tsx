import React from 'react';
import  Clock  from "../../../assets/icons/Clock.svg";
import CheckBox from '../checkbox/checkbox';

const Banneracc = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between p-[25px] relative bg-[#f5f5fe] rounded-[4px_4px_1px_1px] border-b-4 [border-bottom-style:solid] border-[#000091]">
      <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
      <img src={Clock} alt="Clock" className="!relative !w-[41px] !h-[41px]" />
        <div className="relative w-fit [font-family:'Marianne-Medium',Helvetica] font-medium text-black text-[24px] tracking-[0] leading-[20px] whitespace-nowrap">
          25 jours restants
        </div>
      </div>
      <div className="relative w-[127px] h-[60px] [font-family:'Marianne-Medium',Helvetica] font-medium text-black text-[64px] tracking-[0] leading-[20px]">
        KPI
      </div>
      <div className="inline-flex flex-col items-end gap-[12px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Marianne-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[20px] whitespace-nowrap">
            Reste à faire :
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[10px] pl-[10px] pr-0 py-0 self-stretch w-full relative flex-[0_0_auto]">
          <CheckBox className="!flex-[0_0_auto]" property1="not" />
          <CheckBox className="!flex-[0_0_auto]" property1="not" />
          <CheckBox className="!flex-[0_0_auto]" property1="not" />
        </div>
        {/* Répétition des CheckBox si nécessaire */}
      </div>
    </div>
  );
};

export default Banneracc;
