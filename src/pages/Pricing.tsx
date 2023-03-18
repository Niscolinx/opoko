import { useState } from 'react';
import { BsRecordCircle } from 'react-icons/bs';

interface Card {
  title: string;
  amount: number;
  description: string;
  list: string[];
}
export const Card = ({ title, description, list, amount }: Required<Card>) => {
  return (
    <div
      className={`w-[35rem] grid gap-8 justify-start  text-black bg-white pt-[4rem] $`}
    >
      <div className="px-8">
        <p className="font-medium text-[3rem] capitalize">{title}</p>
        <p className="font-bold text-[5rem]">${amount.toLocaleString()}</p>
        <p className="text-[1.4rem] ">{description}</p>
        <div className="grid gap-4 p-8">
          {list.map((item, i) => (
            <p className="flex items-center gap-4">
              <BsRecordCircle className="text-[#12129A]" />
              {item}
            </p>
          ))}
        </div>
      </div>
      <button className="bg-[#12129A] text-white py-6 px-8 text-center">
        Get started today
      </button>
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
      <section
        className="grid gap-8 bg-[#F7F8FC] p-8"
        style={{
          boxShadow: `0 0 0 100vmax #F7F8FC`,
          clipPath: `inset(0 -100vmax)`,
        }}
      >
        <p className="font-bold text-[3rem] text-center">
          Choose a plan that suits you
        </p>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
          }}
        >
          <Card
            title={'Basic'}
            amount={350}
            description={
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
            }
            list={[
              'It is long established',
              'It is long established',
              'It is long established',
            ]}
          />
          <Card
            title={'professional'}
            amount={1000}
            description={
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
            }
            list={[
              'It is long established',
              'It is long established',
              'It is long established',
            ]}
          />
          <Card
            title={'enterprise'}
            amount={350}
            description={
              'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem'
            }
            list={[
              'It is long established',
              'It is long established',
              'It is long established',
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Pricing;
