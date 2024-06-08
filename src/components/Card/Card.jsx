import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react';
import './card.css';

const generateRandomGradient = () => {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFF5', '#A633FF', '#FF8A33'
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

const BookCard = ({ link, publicationYear, edition, bookName, authorName, coverId, authorId, onAddToBookshelf, onRemoveFromBookshelf }) => {
  const [useBookCover, setUseBookCover] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    if (!coverId) {
      setBackgroundStyle({
        background: generateRandomGradient(),
      });
    }
  }, [coverId]);

  const handleAuthorImageLoad = (e) => {
    const img = e.target;
    if (img.naturalWidth === 1 && img.naturalHeight === 1) {
      setUseBookCover(true);
    }
  };

  return (
    <div className='relative rounded-xl overflow-hidden' style={backgroundStyle}>
      <div className='overflow-hidden backdrop-blur-[8px] rounded-br-xl absolute top-0 left-0 w-[50px] bg-black bg-opacity-30 shadow-small z-10'>
        <p className="w-full text-white/80 font-bold text-center">{publicationYear}</p>
      </div>
      <div className="ribbon"><span>{edition}<sup> th</sup></span></div>
      <a href={`https://openlibrary.org${link}`} target='blank'><img src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`} alt="Card Hero" className='w-full h-[400px] object-cover hover:scale-[1.1] transition-all' /></a>
      <div className='flex justify-between items-center gap-3 py-2 px-2 backdrop-blur-[8px] rounded-xl bg-white bg-opacity-20 border border-white/20 overflow-hidden absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'>
        {coverId && (
          <img
            src={useBookCover || !authorId ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg` : `https://covers.openlibrary.org/a/olid/${authorId}-S.jpg`}
            alt="author hero"
            className='rounded-xl'
            onLoad={handleAuthorImageLoad}
          />
        )}
        <div className='flex flex-col w-full'>
          <p className="text-left text-black text-[14px] font-semibold">{bookName}</p>
          <p className="text-left text-black text-[12px]">{authorName}</p>
        </div>
        {onAddToBookshelf && (
          <button onClick={onAddToBookshelf} className='text-black font-bold bg-green-500 p-1 rounded'>
            <Icon icon={'icon-park-outline:bookshelf'} size={'24px'} />
          </button>
        )}
        {onRemoveFromBookshelf && (
          <button onClick={onRemoveFromBookshelf} className='text-black font-bold bg-red-500 p-1 rounded'>
            <Icon icon={'icon-park-outline:delete'} size={'24px'} />
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
