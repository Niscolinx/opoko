import React, { ReactNode } from 'react';
import { GoLaw } from 'react-icons/go';
import { TfiReload } from 'react-icons/tfi';
import { HiTrendingUp } from 'react-icons/hi';
import {TbMessageDots} from 'react-icons/tb'

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
        background: `url(/asset/cardBg.svg) no-repeat ${bgColor}`
      }}
    >
      <p className="font-medium text-[3rem]">{title}</p>
      <p className="text-[1.4rem] ">{description}</p>
      <p className="text-[3rem] mt-auto">{Icon}</p>
    </div>
  );
};

function AboutUs() {
  return (
    <div className="grid gap-[10rem]">
      <section className="grid gap-16 text-justify">
        <p
          className="font-bold text-[5rem] text-color-blue text-center max-w-[50rem] mx-auto capitalize"
          style={{
            lineHeight: '5rem',
          }}
        >
          The one-stop shop for all things law
        </p>
        <p>
          Opoko is a legal research tool designed to provide users with relevant
          laws, case law, and international events. It caters to legal
          professionals, in-house attorneys, and business enthusiasts who
          require up-to-date legal information. The platform is a comprehensive
          source of data on specific practice areas, making it a useful tool for
          conducting legal research on the go. With Opoko, users have access to
          a vast library of information that covers a range of legal topics.
          This includes laws, regulations, and case law from different
          jurisdictions around the world. The platform also provides users with
          useful insights into legal issues, making it an essential tool for
          anyone who requires the latest legal information. Overall, Opoko is a
          valuable resource for anyone who needs to stay up-to-date on legal
          developments. Its mobile-friendly design and comprehensive database
          make it an ideal tool for legal professionals, in-house attorneys, and
          business enthusiasts alike. Whether you need to research specific
          legal issues or stay abreast of the latest legal developments, Opoko
          has everything you need to stay informed.
        </p>
      </section>
      <section className="grid gap-8">
        <p className="text-[4rem]">Our Services</p>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
          }}
        >
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'#203C82'}
          />
          <Card
            title={'Precedents'}
            description={
              'As pronouncements are made in Courts of record, this segment is updated to promptly offer users the Court’s interpretation of the law and interplay of certain facts existing legal principles. It also contains forms and template documents.'
            }
            Icon={<TfiReload />}
            bgColor={'#319F5A'}
          />
          <Card
            title={'Insights'}
            description={
              'A compendium of industry developments to keep the user abreast of changes in the specific industry globally, and weighing plausible national and regional effects on the industry. It is the cutting-edge service that seeks to bridge the gap between law and practice'
            }
            Icon={<HiTrendingUp />}
            bgColor={'#FF7900'}
          />
          <Card
            title={'Case Review'}
            description={
              'A pre-set body of questions designed to generate a report on answers given. This section grants the user an immediate opinion'
            }
            Icon={<TbMessageDots />}
            bgColor={'#464545'}
          />
        </div>
      </section>
      <section className="grid gap-8">
        <p className="text-[4rem]">Frequently Asked Questions</p>

        <div className='grid grid-cols-8'>
          <div>
            
          </div>
          <div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
