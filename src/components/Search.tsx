export default function Search() {
  return (
    <div className="flex items-center justify-center rounded-lg h-36 bg-[url('../../public/images/bgsearch.png')] bg-no-repeat bg-cover bg-center mt-8">
      <div className="w-9/12 h-14 flex content-center relative">
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          className="h-full w-full rounded-md text-sm px-4"
        />
        <div className="bg-blue-600 text-white px-12 py-4 absolute top-1 right-1 h-12 rounded-md hover:cursor-pointer">
          <p className="leading-4">Search</p>
        </div>
      </div>
    </div>
  );
}
