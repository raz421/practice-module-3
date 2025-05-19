export default function Panel({ title, children, isValue, onSend }) {
  return (
    <>
      <h1>{title}</h1>
      {isValue ? <p>{children}</p> : <button onClick={onSend}>Show</button>}
    </>
  );
}
