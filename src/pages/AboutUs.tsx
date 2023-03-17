import React, { ReactNode } from 'react';
import { GoLaw } from 'react-icons/go';

interface Card {
  title: string;
  description: string;
  Icon: ReactNode;
  bgColor: string;
}
export const Card = ({ title, description, Icon, bgColor }: Required<Card>) => {
  return (
    <div className={`h-[40rem] grid gap-8 justify-start ${bgColor} text-white`}>
      <p className="font-medium text-[3rem]">{title}</p>
      <p className="text-[1.4rem] ">{description}</p>
      <p>{Icon}</p>
    </div>
  );
};


function AboutUs() {
  return (
    <div className="grid gap-16">
      <div className="grid gap-16 text-justify">
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
      </div>
      <div className="grid gap-8">
        <p className="text-[4rem]">Our Services</p>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
          }}
        >
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'bg-[#203C82]'}
          />
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'bg-[#203C82]'}
          />
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'bg-[#203C82]'}
          />
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'bg-[#203C82]'}
          />
          <Card
            title={'The laws'}
            description={
              'This segment collates the applicable law for the specialized area. It is promptly updated to highlight legal changes and provide relevant, current information at all times'
            }
            Icon={<GoLaw />}
            bgColor={'bg-[#203C82]'}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
