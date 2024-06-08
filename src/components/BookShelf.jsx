import React, { useState } from 'react';
import BookCard from './Card/Card';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Background from './Background/Background';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  });

  const removeFromBookshelf = (bookToRemove) => {
    const newBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    toast.success("Removed from Bookshelf")
  };

  return (
    <>
      <Background />
      <Toaster position="top-right" reverseOrder={false} />
      <div className='h-full w-full flex flex-col justify-center items-center p-4 gap-5'>
        <Link to='/' className='p-2 bg-blue-600 text-white rounded'>
          Back to Search
        </Link>
        {bookshelf.length > 0 ? (
          <div className='flex flex-wrap justify-center gap-5'>
            {bookshelf.map((book, index) => (
              <div key={index} className='h-auto w-[300px] m-2'>
                <BookCard
                  link={book.key}
                  publicationYear={book.first_publish_year}
                  edition={book.edition_count}
                  bookName={book.title}
                  authorName={book.author_name && book.author_name.join(', ')}
                  coverId={book.cover_i}
                  authorId={book.author_key && book.author_key[0]}
                  onRemoveFromBookshelf={() => removeFromBookshelf(book)}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className='text-red-600 font-bold text-xl'>Bookshelf is empty.</p>
        )}
      </div>
    </>
  );
};

export default Bookshelf;