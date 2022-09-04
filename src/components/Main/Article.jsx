export default function Article(props) {
  const { title, thumb, content } = props;
  return (
    <article>
      <h2>{title}</h2>
      <img src={thumb} alt="article banner" />
      <p>{content}</p>
    </article>
  );
}
