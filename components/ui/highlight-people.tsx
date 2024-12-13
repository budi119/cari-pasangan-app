import React from 'react'
import Image from 'next/image';

interface HighlightPeopleProps {
  name: string;
  image: string;
  

}

const HighlightPeople = ({ image, name }: HighlightPeopleProps) => {
  return (
    <div>
        <div className="flex items-center transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full object-cover"
              src={image}
              alt={name}
              width={600}
              height={400}
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
          </div>
          <div>
          </div>
        </div>
    </div>
  )
}

export default HighlightPeople;
