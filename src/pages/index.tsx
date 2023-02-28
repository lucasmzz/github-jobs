import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import Results from "@/components/Results";
import { NextPage } from "next";
import { PageHomeProps, JobPost } from "@/types";

const Home: NextPage<PageHomeProps> = ({ jobPosts }) => {
  const [cities, setCities] = useState<Array<string>>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [showFulltimeOnly, setShowFulltimeOnly] = useState<boolean>(false);
  const [locationSearchTerm, setLocationSearchTerm] = useState<string>("");
  const [jobTitleSearchTerm, setJobTitleSearchTerm] = useState<string>("");
  const [filteredJobPosts, setFilteredJobPosts] = useState<Array<JobPost>>([]);

  useEffect(() => {
    if (!jobPosts || !jobPosts.length) {
      return;
    }

    setFilteredJobPosts(jobPosts);

    const uniqueCities = jobPosts
      .map((post) => post.city)
      .filter((value, index, self) => self.indexOf(value) === index);

    if (uniqueCities.length) setCities(uniqueCities);
  }, [jobPosts]);

  useEffect(() => {
    let filteredPosts = jobPosts;

    if (showFulltimeOnly) {
      filteredPosts = jobPosts.filter(
        (post) => post.fulltime === showFulltimeOnly
      );
    }

    if (!selectedCity) {
      if (locationSearchTerm) {
        filteredPosts = filteredPosts.filter((post) =>
          post.city.toLowerCase().includes(locationSearchTerm.toLowerCase())
        );
      }
    } else if (selectedCity) {
      filteredPosts = filteredPosts.filter(
        (post) => post.city === selectedCity
      );
    }

    if (jobTitleSearchTerm) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(jobTitleSearchTerm.toLowerCase())
      );
    }

    filteredPosts
      ? setFilteredJobPosts(filteredPosts)
      : setFilteredJobPosts(jobPosts);
  }, [
    showFulltimeOnly,
    locationSearchTerm,
    selectedCity,
    jobTitleSearchTerm,
    jobPosts,
  ]);

  const onSelectCity = (
    event: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
  ) =>
    setSelectedCity(
      selectedCity !== event.currentTarget.value
        ? event.currentTarget.value
        : ""
    );
  const onSelectFulltime = (event: ChangeEvent<HTMLInputElement>) =>
    setShowFulltimeOnly(event.currentTarget.checked);
  const onLocationSearchTermChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLocationSearchTerm(event.currentTarget.value);
  const onJobTitleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) =>
    setJobTitleSearchTerm(event.currentTarget.value);

  return (
    <>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Job Board" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Search
          jobTitleSearchTerm={jobTitleSearchTerm}
          onJobTitleSearchTermChange={onJobTitleSearchTermChange}
        />
        <div className="flex flex-nowrap mt-6 gap-6">
          <Filters
            cities={cities}
            selectedCity={selectedCity}
            showFulltimeOnly={showFulltimeOnly}
            locationSearchTerm={locationSearchTerm}
            onSelectCity={onSelectCity}
            onSelectFulltime={onSelectFulltime}
            onLocationSearchTermChange={onLocationSearchTermChange}
          />
          <Results posts={filteredJobPosts} />
        </div>
      </>
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
