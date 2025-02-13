import Image from 'next/image';

type BibliographyItemProps = {
  name: string;
  link?: string;
  description?: string;
  bookInfo?: {
    author: string;
    edition: string;
  };
  image?: string;
  site?: string;
};

export const BibliographyItem = ({
  name,
  link,
  description,
  bookInfo,
  site,
  image,
}: BibliographyItemProps) => {
  let bookInformation;

  if (bookInfo) {
    const { edition = '', author } = bookInfo;

    bookInformation = (
      <>
        {author && <span>{author}</span>}

        <div className="small">
          {edition && (
            <>
              <span>{edition}</span>
            </>
          )}
        </div>
      </>
    );
  }

  return (
    <div className="bibliography-item">
      {image && (
        <Image
          src={image}
          alt={name}
          width={100}
          height={150}
          className="image"
        />
      )}
      <div className="item-info">
        <strong>{name} </strong>
        {site && <i className="small">{site}</i>}
        {bookInformation}
        {description && <span>{description}</span>}
        {link && (
          <a href={link} target="_blank" className="small">
            {link}
          </a>
        )}
      </div>
    </div>
  );
};
