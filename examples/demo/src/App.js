import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [loadingBooks, setLoadingBooks] = useState(false);
  const [booksError, setBooksError] = useState('');
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function getBooks() {
      setLoadingBooks(true);
      setBooks([]);
      try {
        // const response = await fetch(`https://gutendex.com/boolks/?page=${currentPage}`);
        // const json = await response.json();
        // setHasPreviousPage(json.previous !== null);
        // setBooks(json.results);
        const { data } = await axios.get(`https://gutendex.com/books/?page=${currentPage}`)
        setHasPreviousPage(data.previous !== null);
        setBooks(data.results);
      } catch (error) {
        setBooksError(error.message); 
        // setBooksError(error.response.data)
      }
      setLoadingBooks(false);
    }
    getBooks();
  }, [currentPage]);
  return (
    <div className="container">
      {loadingBooks && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {/* {booksError && <h4>{booksError}</h4>} */}
      {booksError ? <h4>{booksError}</h4> : null}
      {!loadingBooks && (
        <div>
          {hasPreviousPage && (
            <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-primary">
              Previous Page
            </button>
          )}
          <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-primary">
            Next Page
          </button>
        </div>
      )}
      <div className="row">
        {books.map((book) => (
          <div className="card col-3" key={book.id}>
            <img src={book.formats['image/jpeg']} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">
                {book.authors.map((author) => (
                  <span key={author.name}>{author.name} ({author.birth_year} - {author.death_year})</span>
                ))}
              </p>
              <a href="#" className="btn btn-primary">View Book</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
