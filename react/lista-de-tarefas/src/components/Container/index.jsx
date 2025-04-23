export function Container({ children }) {
  return (
    <>
    <section className="max-w-180 mx-auto text-white font-bold p-8 rounded-md flex flex-col gap-6 items-center mt-8 text-2xl bg-blue-500">
      {children}
    </section>
    </>
  );
}
