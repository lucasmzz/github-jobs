import { FiltersProps } from "@/types";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Filters({
  cities,
  selectedCity,
  showFulltimeOnly,
  locationSearchTerm,
  onSelectCity,
  onSelectFulltime,
  onLocationSearchTermChange,
}: FiltersProps) {
  return (
    <div className="w-1/3 flex flex-col gap-6">
      <div className="flex gap-2">
        <input
          type="checkbox"
          name="fulltime"
          id="show-fulltime"
          checked={showFulltimeOnly}
          onChange={onSelectFulltime}
        />
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
            placeholder="Type a city name..."
            name="input-location"
            id="input-location"
            value={locationSearchTerm}
            onChange={onLocationSearchTermChange}
          />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <form onReset={onSelectCity}>
          {selectedCity && (
            <div className="controls">
              <input
                type="reset"
                value="Clear"
                className="text-xs bg-gray-400 px-1 py-0.5 rounded-sm"
              />
            </div>
          )}
          {cities &&
            cities.map((city) => (
              <div key={city} className="flex flex-nowrap gap-2">
                <input
                  id={`radio-city-${city.replace(/\s/g, "")}`}
                  type="radio"
                  name="radio-city"
                  value={city}
                  checked={selectedCity === city}
                  onChange={onSelectCity}
                />
                <label
                  className="text-sm text-[#334680]"
                  htmlFor={`radio-city-${city
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  {city}
                </label>
              </div>
            ))}
        </form>
      </div>
    </div>
  );
}
