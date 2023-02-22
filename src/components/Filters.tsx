import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Filters() {
  return (
    <div className="w-1/3 flex flex-col gap-6">
      <div className="flex gap-2">
        <input type="checkbox" name="fulltime" id="show-fulltime" />
        <label className="text-sm text-[#334680]" htmlFor="show-fulltime">
          Full time
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold text-[#B9BDCF]">LOCATION</p>
        <div className="flex flex-nowrap items-center bg-white shadow-sm">
          <GlobeAltIcon className="pl-1 h-5 w-5 text-gray-300" />
          <input
            className="pl-2 py-3 text-xs w-full outline-none"
            type="text"
            placeholder="City, state, zip code or country"
            name="input-location"
            id="input-location"
          />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-nowrap gap-2">
          <input
            type="radio"
            name="radio-city"
            value="London"
            id="radio-city-lhr"
          />
          <label className="text-sm text-[#334680]" htmlFor="radio-city-lhr">
            London
          </label>
        </div>
        <div className="flex flex-nowrap gap-2">
          <input
            type="radio"
            name="radio-city"
            value="Amsterdam"
            id="radio-city-ams"
          />
          <label className="text-sm text-[#334680]" htmlFor="radio-city-ams">
            Amsterdam
          </label>
        </div>
        <div className="flex flex-nowrap gap-2">
          <input
            type="radio"
            name="radio-city"
            value="London"
            id="radio-city-nyc"
          />
          <label className="text-sm text-[#334680]" htmlFor="radio-city-nyc">
            New York
          </label>
        </div>
        <div className="flex flex-nowrap gap-2">
          <input
            type="radio"
            name="radio-city"
            value="Berlin"
            id="radio-city-ber"
          />
          <label className="text-sm text-[#334680]" htmlFor="radio-city-ber">
            Berlin
          </label>
        </div>
      </div>
    </div>
  );
}
