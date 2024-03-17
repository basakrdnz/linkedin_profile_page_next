import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon:string;

}

const Card = ({ title, description, imageUrl,icon }:CardProps) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </section>
  );
};

export default Card;
