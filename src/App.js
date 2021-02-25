import Book from "./components/Book";
import books from './data/books';

export default () => {
    let key = 0;
    const bookComponents = books.map(book => <Book key={ ++key } title={ book.title } author={ book.author } />);

    return (
        <div>
            { bookComponents }
        </div>
    );
};
