interface LoginProps {
  params: {
    credentials: string[];
  };
}

export default function page({ params }: LoginProps) {
  const [name, password] = params.credentials;

  return (
    <div className="bg-zinc-600 p-6 text-white flex gap-4 rounded-md mx-auto mt-6 max-w-[400px] flex-col font-bold">
      <h1>Login</h1>
      <input type="text" value={name} className="bg-amber-400/50 px-4" />
      <input type="text" value={password} className="bg-amber-400/50 px-4" />
    </div>
  );
}
