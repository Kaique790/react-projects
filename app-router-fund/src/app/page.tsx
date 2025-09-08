import { WaitComponent } from "@/components/wait-component";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/kaique790");
  const data = await res.json();

  return (
    <div>
      <h1>Meu github</h1>
      <hr />
      <Suspense
        fallback={
          <p className="bg-amber-300 text-black">Carrregando componente sky</p>
        }
      >
        <WaitComponent />
      </Suspense>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
