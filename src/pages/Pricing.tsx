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
      <section className="grid gap-16 bg-color-blue text-white justify-items-center h-[50vh] content-center clipFull-blue">
        <p
          className="text-[6rem] font-extrabold"
          style={{
            lineHeight: '5rem',
          }}
        >
          Simple and affordable pricing
        </p>
        <p className="text-[#4CFF8F] font-semibold">
          Our pricing and services are as transparent as possible.
        </p>

        <div className="bg-[#020269] text-white rounded-3xl flex">
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
                className={` flex items-center ${
                  item === currentPlan ? '' : ''
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
