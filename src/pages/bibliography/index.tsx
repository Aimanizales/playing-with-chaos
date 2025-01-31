import { books, websites } from './bibliography';
import { BibliographyItem } from '@/components/BibliographyItem';

export default function Page() {
  return (
    <section>
      <h2>Bibliografía</h2>
      <h3>Websites:</h3>
      <ul className="references-list">
        {websites.map(({ name, link, description }, index) => (
          <li key={index}>
            <BibliographyItem
              name={name}
              description={description}
              link={link}
            />
          </li>
        ))}
      </ul>
      <h3>Libros:</h3>
      <p>Acá una selección de mis favoritos:</p>
      <ul className="references-list">
        {books.map(
          ({ title, author, editorial, publishDate, link, image }, index) => (
            <li key={index}>
              <BibliographyItem
                name={title}
                link={link}
                bookInfo={{ author, editorial, publishDate }}
                image={image}
              />
            </li>
          )
        )}
      </ul>
      <p>
        Esta es una lista en mi{' '}
        <a
          href="https://www.goodreads.com/review/list/1090861-aiman-abdel-samad?shelf=chaos"
          target="_blank"
        >
          Goodreads
        </a>{' '}
        de libros.
      </p>
    </section>
  );
}
