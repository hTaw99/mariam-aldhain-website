import NewsCard from "@/components/NewsCard";
import { BiSearch } from "react-icons/bi";

export default function NewsPage() {
  return (
    <div>
      <div className="mb-8 lg:w-1/2  mr-auto">
        <form className="z-10">
          <div className="flex">
            <div className=" w-full">
              <input
                className={` z-20 block w-full p-3 text-sm border 
                     border-gray-300 rounded-r-md bg-white focus:outline-none`}
                placeholder={"ابحث"}
                // onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className={`  bg-red-500 rounded-l-md text-white  inline-flex items-center flex-shrink-0 gap-1 px-10 text-sm font-medium text-center  border-gray-300 capitalize  hover:bg-red-550 focus:outline-none`}
              type="button"
            >
              بحث
            </button>
          </div>
        </form>
      </div>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}
        className="grid  gap-4"
      >
        {Array.from(
          [
            "/photo1.jpg",
            "/photo3.jpg",
            "/photo5.jpg",
            "/photo6.jpg",
            "/photo6.jpg",
          ],
          (el) => (
            <NewsCard key={el} src={el} />
          )
        )}
      </div>
    </div>
  );
}
