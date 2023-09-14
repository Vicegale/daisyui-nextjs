export default function Prompt() {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 rounded-xl bg-white pt-20 pb-20 pl-12 pr-12 w-1/2">
        <h1 className="font-bold text-xl text-gray-700 font-sans text-center">
          Remove profile picture?
        </h1>
        <p className="font-semibold font-sans text-center text-gray-500">
          Are you sure you want to completely remove your profile picture?
          <br /> This action cannot be undone.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          <button className="h-10 w-32 rounded-xl transition bg-red-400 hover:bg-red-300 active:bg-red-700 md:hover:scale-105 md:active:scale-100 active:scale-95 font-semibold text-white">
            Remove
          </button>
          <button className="h-10 w-32 rounded-xl transition bg-gray-400 hover:bg-gray-300 active:bg-gray-700 font-semibold text-white md:hover:scale-105 md:active:scale-100 active:scale-95">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
