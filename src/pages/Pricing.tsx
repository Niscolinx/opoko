import { ReactNode, useState } from 'react';

interface Card {
  title: string;
  description: string;
  Icon: ReactNode;
  bgColor: string;
}
export const Card = ({ title, description, Icon, bgColor }: Required<Card>) => {
  return (
    <div
      className={`h-[40rem] max-w-[27rem] grid gap-8 justify-start  text-white px-[2rem] py-[4rem] ${bgColor}`}
      style={{
        background: `url(/asset/cardBg.svg) no-repeat ${bgColor}`,
      }}
    >
      <p className="font-medium text-[3rem]">{title}</p>
      <p className="text-[1.4rem] ">{description}</p>
      <p className="text-[3rem] mt-auto">{Icon}</p>
    </div>
  );
};

type Plan = 'annually' | 'monthly';
const plans: Plan[] = ['annually', 'monthly'];

function Pricing() {
  const [currentPlan, setCurrentPlan] = useState<Plan>('annually');
  return (
    <div className="grid gap-[10rem]">
      <section className="grid gap-16 bg-color-blue text-white justify-items-center h-[60vh]  clipFull-blue py-8 blogBg">
        <div className="grid content-center justify-items-center gap-8 max-w-[60rem]">
          <p
            className="text-[6rem] font-extrabold text-center"
            style={{
              lineHeight: '7rem',
            }}
          >
            Simple and affordable pricing
          </p>
          <p className="text-[#4CFF8F] font-semibold">
            Our pricing and services are as transparent as possible.
          </p>
        </div>

        <div className="bg-[#020269] text-white flex  justify-items-center rounded-[4rem] overflow-hidden self-end capitalize font-semibold">
          {plans.map((item, i) => (
            <>
              <input
                type="radio"
                name="plan"
                id={item + i}
                className="hidden"
                checked={item === currentPlan}
                onChange={() => setCurrentPlan(item)}
              />
              <label
                htmlFor={item + i}
                className={` cursor-pointer py-4 px-8 w-[15rem] text-center rounded-[4rem] ${
                  item === currentPlan && 'text-[#020269] bg-white ' 
                }`}
              >
                {item}
              </label>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pricing;
