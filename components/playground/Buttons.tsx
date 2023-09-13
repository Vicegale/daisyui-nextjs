export default function Buttons() {
  return (
    <div className="grid space-y-2 place-content-center border-solid border-2 border-primary rounded-lg w-96">
      <button className="h-10 w-32 rounded-full bg-red-500 font-sans font-semibold text-white transition hover:scale-110 hover:bg-red-400 active:scale-105 active:bg-red-700">
        Click here!
      </button>
      <button className="h-10 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-sans font-semibold text-white transition hover:scale-110 hover:from-cyan-400 hover:to-blue-400 active:scale-105 active:from-cyan-700 active:to-blue-700">
        Click here!
      </button>
    </div>
  );
}
