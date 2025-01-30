type VideoProps = {
  src: string;
  title?: string;
  channel?: string;
};

export default function Video({ src, title = '', channel = '' }: VideoProps) {
  return (
    <div>
      {title && (
        <div className="video-info">
          <span>"{title}"</span> {channel && <i>– {channel}</i>}
          <br />
        </div>
      )}
      <iframe
        width="560"
        height="315"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
