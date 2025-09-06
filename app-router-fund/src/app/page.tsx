export default async function Home() {
  const res = await fetch("https://api.github.com/users/kaique790");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Meu github</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
