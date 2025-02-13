import { books, websites } from './bibliography';
import { BibliographyItem } from '@/components/BibliographyItem';

export default function Page() {
  return (
    <section>
      <h2>Bibliografía</h2>
      <h3>Websites:</h3>
      <ul className="references-list">
        {websites.map((itemInfo, index) => (
          <li key={index}>
            <BibliographyItem {...itemInfo} />
          </li>
        ))}
      </ul>
      <h3>Libros:</h3>
      <p>
        Esta es una lista en mi{' '}
        <a
          href="https://www.goodreads.com/review/list/1090861-aiman-abdel-samad?shelf=chaos"
          target="_blank"
        >
          Goodreads
        </a>{' '}
        de libros sobre caos y fractales. A continuación, una selección de mis
        favoritos:
      </p>
      <ul className="references-list">
        {books.map(({ title, author, edition, link, image }, index) => (
          <li key={index}>
            <BibliographyItem
              name={title}
              link={link}
              bookInfo={{ author, edition }}
              image={image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
