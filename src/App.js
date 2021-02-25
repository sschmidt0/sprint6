import Book from "./components/Book"

export default () => {
    const title = 'Viatge a la lluna';

    return (
        <div>
            <Book title={ title} />
        </div>
    );
};
