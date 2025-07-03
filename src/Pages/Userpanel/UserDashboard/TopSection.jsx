import React from 'react';
import { FaGift } from 'react-icons/fa';

const TopSection = ({user}) => {
  const cards = [
    {
      img:"https://img.icons8.com/3d-fluency/94/receive-cash.png",
      amount: user?.investment,
      label: 'Total Investment',
    },
    {
      img:"https://img.icons8.com/3d-fluency/94/cash-in-hand.png",
      amount: user?.correntIncome,
      label: 'Wallet Balance',
    },
    {
      img:"https://img.icons8.com/3d-plastilina/69/share--v1.png",
      amount: user?.referralIncome,
      label: 'Referral Income',
    },
    {
      img:"https://img.icons8.com/3d-fluency/94/features-list.png",
      amount: user?.levelIncome,
      label: 'Level Income',
    },
  ];

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 text-white font-sans rounded-xl">
      <div className="bg-[#ffffff13] col-span-1 backdrop-blur-md p-4 rounded-xl ">
        <h2 className="text-lg font-semibold capitalize">
          <span className="text-white">Congratulations</span>  {user?.username} 🎉
        </h2>
        <p className="mt-2">
          We are happy to see you.<br />Here's your dashboard. <FaGift className="inline text-red-500" />
        </p>
        <p className="text-2xl font-bold mt-2">Rank Beginner</p>
      </div>

      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:col-span-2  gap-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#ffffff13] backdrop-blur-md p-4 rounded-xl flex flex-col justify-center items-start "
          >
            <div className="">
              <img src={card.img} className='h-20' alt="" />
            </div>
            <p className="text-xl font-semibold">$ {Number(card.amount || 0).toFixed(3)}</p>
            <p className="text-sm text-gray-400">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
