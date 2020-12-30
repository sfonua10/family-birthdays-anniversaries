export default function Month({ month, celebrants }) {
  return (
    <div className="my-4 mx-4">
      <h1 className="font-bold">{month}</h1>
      {celebrants?.map((celebrant) => (
        <p>{celebrant}</p>
      ))}
    </div>
  );
}
