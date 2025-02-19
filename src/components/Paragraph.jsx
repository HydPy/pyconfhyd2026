const Paragraph = ({
  text,
  isHtml = false,
  numberOfLines = 3,
  className = '',
}) => {
  return (
    <div
      className={`relative text-gray-700 dark:text-gray-300 text-sm overflow-hidden ${className}`}
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: numberOfLines,
        textOverflow: 'ellipsis',
      }}
    >
      {isHtml ? (
        <p className="m-0" dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <p className="m-0">{text}</p>
      )}
    </div>
  );
};

export default Paragraph;