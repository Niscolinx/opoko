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

const FOOTERLINKS = [
  'About',
  'Features',
  'Pricing',
  'Privacy Policy',
  'Terms of Use',
  'Legal',
];

type Question = Record<'question' | 'answer', string>;
const QUESTIONS: Question[] = [
  {
    question: 'What is a Opoko?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita iure sit! Et iusto itaque labore consequatur repudiandae voluptatibus aperiam distinctio officiis qui exercitationem cumque architecto, sapiente quasi veritatis nulla!',
  },
  {
    question:
      'Do I need to pay to Opoko even when there is no transaction going on in my business?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita iure sit! Et iusto itaque labore consequatur repudiandae voluptatibus aperiam distinctio officiis qui exercitationem cumque architecto, sapiente quasi veritatis nulla!',
  },
  {
    question: 'What platforms does Opoko payment gateway support?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita iure sit! Et iusto itaque labore consequatur repudiandae voluptatibus aperiam distinctio officiis qui exercitationem cumque architecto, sapiente quasi veritatis nulla!',
  },
  {
    question: 'Does Opoko provide international payments support?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita iure sit! Et iusto itaque labore consequatur repudiandae voluptatibus aperiam distinctio officiis qui exercitationem cumque architecto, sapiente quasi veritatis nulla!',
  },
  {
    question:
      'Is there any setup fee or annual maintainance fee that I need to pay regularly?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia expedita iure sit! Et iusto itaque labore consequatur repudiandae voluptatibus aperiam distinctio officiis qui exercitationem cumque architecto, sapiente quasi veritatis nulla!',
  },
];

const pricing = ['annually', 'monthly'];

function Pricing() {
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

        <div>
          {pricing.map((item, i) => (
            <></>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pricing;
