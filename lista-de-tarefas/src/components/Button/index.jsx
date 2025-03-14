import { PaperPlaneTilt } from "@phosphor-icons/react";

export function Button({ name }) {
  return (
    <button
      type="submit"
      className="w-full text-white font-bold bg-green-600 text-[1rem] items-center flex justify-center gap-3 p-3 px-6 rounded-md duration-300 cursor-pointer hover:bg-green-500"
    >
      {name ? (
        name
      ) : (
        <>
          Enviar <PaperPlaneTilt />
        </>
      )}
    </button>
  );
}
