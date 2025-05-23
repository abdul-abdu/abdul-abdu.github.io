export function KBarSearchButton() {
  return (
    <div className="relative flex items-center">
      <input
        id="search"
        name="search"
        placeholder="Search..."
        type="text"
        className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-xs ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm/6"
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd className="inline-flex items-center rounded-sm border border-gray-200 px-1 font-sans text-xs text-gray-400">
          ⌘K
        </kbd>
      </div>
    </div>
  );
}
