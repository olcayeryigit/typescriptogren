import Link from 'next/link';
import React from 'react';


interface CardItem {
  href: string;
  icon: JSX.Element;
  title: string;
  description: string;
  isExternal?: boolean;
}

interface HomeProps {
  cardData: CardItem[];
}

const HomeCard: React.FC<HomeProps> = ({ cardData }) => {
  return (
    <div className="py-4  md:px-8 lg:px-12 xl:px-20">
      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        {cardData.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            target={card.isExternal ? "_blank" : undefined}
            className="group hover:bg-gray-50 bg-custom-blue rounded-xl p-4 md:p-5 text-center transition hover:text-custom-gray border-4 hover:border-custom-blue border-custom-gray shadow-sm hover:shadow-md "
            rel={card.isExternal ? "noopener noreferrer" : undefined}
          >
            <div className='mb-2  md:mb-0 flex justify-start items-center  gap-4 md:gap-1 md:flex-col'>
   <div className="md:mx-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-1.5 group-hover:text-white transition group-hover:bg-custom-blue rounded-full bg-white text-black" aria-label={`İkon: ${card.title}`}>
              {card.icon}
            </div>
            <h2 className="text-lg md:text-xl font-semibold group-hover:text-custom-blue text-black">{card.title}</h2>
          </div>
         
            <p className="mt-1 text-sm md:text-md text-start md:text-center group-hover:text-custom-gray text-white">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
