export default function SearchForm() {
  return (
    <form className="w-full text-base-text">
      <input
        type="text"
        placeholder="Buscar postagem"
        className="mt-6 bg-base-input w-full px-4 py-3 border-3 border-base-border rounded-md placeholder:text-base-label"
      />
    </form>
  );
}
