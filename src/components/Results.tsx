import Image from "next/image";
import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { getDaysSincePost } from "@/utils/dateUtils";
import { ResultsProps } from "@/types";

const Results = ({ posts }: ResultsProps) => {
  return (
    <div className="grow">
      <div className="flex flex-col flex-nowrap gap-4">
        {posts &&
          posts.map((post) => (
            <Link key={post.id} href={`/job/${post.id}`}>
              <div className="flex flex-nowrap items-start justify-start gap-4 p-4 bg-white shadow-sm rounded-sm">
                <Image
                  src={post.logo}
                  alt="logo"
                  width="90"
                  height="90"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col flex-nowrap w-full gap-2">
                  <div className="h-full flex flex-col pt-1 flex-nowrap justify-between gap-1">
                    <p className="text-xs font-semibold">{post.company}</p>
                    <p className="text-md font-light">{post.title}</p>
                  </div>
                  <div className="flex flex-nowrap justify-between items-center">
                    {post.fulltime && (
                      <span className="text-[9px] text=[#334680] font-bold py-[2px] px-[4px] border border-[#334680] rounded-md w-fit">
                        Full time
                      </span>
                    )}
                    <div className="grow flex flex-nowrap gap-6 items-center justify-end">
                      <p className="text-2xs font-semibold flex flex-nowrap items-center gap-1">
                        <GlobeAltIcon className="pl-1 h-5 w-5 text-gray-300" />
                        {post.city}
                      </p>
                      <p className="text-2xs font-semibold flex flex-nowrap items-center gap-1">
                        <ClockIcon className="pl-1 h-5 w-5 text-gray-300" />
                        {getDaysSincePost(post.created)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Results;
