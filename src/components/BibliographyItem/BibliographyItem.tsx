import Image from 'next/image';

type BibliographyItemProps = {
  name: string;
  link?: string;
  description?: string;
  bookInfo?: {
    author: string;
    editorial: string;
    publishDate: string;
  };
  image?: string;
};

export const BibliographyItem = ({
  name,
  link,
  description,
  bookInfo,
  image,
}: BibliographyItemProps) => {
  let bookInformation;

  if (bookInfo) {
    const { publishDate = '', editorial = '', author } = bookInfo;

    bookInformation = (
      <>
        {author && <span>{author}</span>}

        <div className="editorial">
          {publishDate &&
            editorial && ( //TODO: improve validation
              <>
                <span>{`${publishDate} ${editorial} `}</span>
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
        {bookInformation}
        {description && (
          <>
            <span>{description}</span>
          </>
        )}
        {link && (
          <>
            <a href={link} target="_blank">
              {link}
            </a>
          </>
        )}
      </div>
    </div>
  );
};
