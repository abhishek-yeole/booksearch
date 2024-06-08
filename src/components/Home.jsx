import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import BookCard from './Card/Card';
import loader from '../assets/loader.gif';
import Background from './Background/Background';
import { Icon } from '@iconify-icon/react';
import Footer from './Footer/Footer';

const Home = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  });

  useEffect(() => {
    if (query.length > 0) {
      const fetchData = async () => {
        setLoading(true);
        setBooks([]);
        if (query) {
          const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
          const data = await response.json();
          setBooks(data.docs);
          setLoading(false);
          toast.success("Got Results")
        }
      };
      const debounceFetch = setTimeout(fetchData, 500);

      return () => clearTimeout(debounceFetch);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    try {
      const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
      if (savedBookshelf) {
        const isBookInShelf = savedBookshelf.some((shelfBook) => shelfBook.key === book.key);
        if (!isBookInShelf) {
          const newBookshelf = [...savedBookshelf, book];
          setBookshelf(newBookshelf);
          localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
          toast.success("Added to Bookshelf")
        }
        else {
          toast.error("Already added to bookshelf")
        }
      }
      else {
        const newBookshelf = [book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
        toast.success("Added to Bookshelf")
      }
    } catch (error) {
      console.log(error)
      toast.error("Already added to bookshelf")
    };
  };

  return (
    <>
      <Background />
      <Toaster position="top-right" reverseOrder={false} />
      <div className={`${query.length > 0 ? 'h-full' : 'h-[100dvh]'} w-full flex flex-col justify-center items-center p-4 gap-5 transition-all`}>
        <div className='flex flex-wrap justify-center items-center gap-5 z-20'>
          <div className='flex flex-row gap-0 justify-center items-center'>
            <p className={`${query.length > 0 ? 'p-2' : 'p-5 text-[24px]'} bg-slate-200 rounded-full rounded-tr-none rounded-br-none transition-all`}>🔎</p>
            <input
              type='text'
              placeholder='Enter book title here...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${query.length > 0 ? 'p-2 w-[300px]' : 'p-5 text-[24px] w-full'} bg-slate-200 rounded-full rounded-tl-none rounded-bl-none border-none outline-none focus-visible:outline-none transition-all`}
            />
          </div>
          <Link to='/bookshelf' className={`${query.length > 0 ? 'p-2' : 'p-5'} bg-blue-600 text-white text-center items-center flex justify-center gap-2 font-bold rounded-full`}>
            My Bookshelf <Icon icon={'hugeicons:bookshelf-01'} style={{fontSize:'24px'}} />
          </Link>
        </div>
        {query.length > 0 && (
          <div className='flex flex-wrap justify-center gap-5'>
            {books.map((book, index) => (
              <div key={index} className='h-auto w-[300px] m-2'>
                <BookCard
                  link={book.key}
                  publicationYear={book.first_publish_year}
                  edition={book.edition_count}
                  bookName={book.title}
                  authorName={book.author_name && book.author_name.join(', ')}
                  coverId={book.cover_i}
                  authorId={book.author_key && book.author_key[0]}
                  onAddToBookshelf={() => addToBookshelf(book)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {loading && (
        <div className='h-[100dvh] w-[100dvw] backdrop-blur-sm fixed top-0 z-10 flex flex-col justify-center items-center transition-all'>
          <img src={loader} alt='loader' width={'200px'} /><br />
          <p className='font-bold text-lg'>Searching...</p>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Home;