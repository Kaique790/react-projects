export async function WaitComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div className="bg-sky-300">Eu carreguei!!</div>;
}
