export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Ocorreu um erro na aplicação</h1>
      <p className="text-center text-accent-foreground">
        Ocorreu um error interno, tente novamente mais tarde. <br /> Caso o erro
        persista, entre em contato com o suporte.
      </p>
    </div>
  );
}
