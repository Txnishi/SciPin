import React, { useState } from 'react';
import { IoIosHeart } from 'react-icons/io';

const Pin = ({ title, imageUrl, articleLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (

    <div
      className="pin cursor-pointer relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={articleLink}>
        <img src={imageUrl} alt={title} className="h-auto" />
        <p className='text-sm hidden sm:inline-flex items-center'>{title}</p>
        {isHovered && (
          <div className="icon-overlay absolute top-4 left-4 p-2 opacity-70">
              <IoIosHeart className="heart-icon text-black-500 text-2xl" />
          </div>
        )}
      </a>
    </div>
  );
};

export default Pin;
