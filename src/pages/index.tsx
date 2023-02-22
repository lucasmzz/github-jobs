import Head from "next/head";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import Results from "@/components/Results";

const Home = ({ jobPosts }) => {
  return (
    <>
      <Head>
        <title>Github Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-main-gray min-h-screen py-8 px-32">
        <Header />
        <Search />
        <div className="flex flex-nowrap mt-6 gap-6">
          <Filters />
          <Results posts={jobPosts} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://6300ff309a1035c7f8fc2586.mockapi.io/jobposts"
  );
  const jobPosts = await res.json();
  return {
    props: {
      jobPosts,
    },
  };
};

export default Home;
