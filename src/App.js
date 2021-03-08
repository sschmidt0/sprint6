import Book from "./components/Book";
import books from './data/books';

export default () => {
    const bookComponents = books.map( (book, key) => <Book key={key } title={ book.title } author={ book.author } />);

    return (
        <div>
            { bookComponents }
        </div>
    );
};
