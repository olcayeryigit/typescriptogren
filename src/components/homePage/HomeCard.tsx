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
    <div className="p-6">
      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            target={card.isExternal ? "_blank" : undefined}
            className="group hover:bg-gray-50 bg-custom-blue rounded-xl p-6 text-center transition hover:text-custom-gray border-4 hover:border-custom-blue border-custom-gray shadow-sm hover:shadow-md"
            rel={card.isExternal ? "noopener noreferrer" : undefined}
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center p-2 group-hover:text-white transition group-hover:bg-custom-blue rounded-full bg-white text-black" aria-label={`İkon: ${card.title}`}>
              {card.icon}
            </div>
            <h2 className="text-lg font-semibold group-hover:text-custom-blue text-black">{card.title}</h2>
            <p className="group-hover:text-custom-gray text-white">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
