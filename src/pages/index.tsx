import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Filters from "@/components/Filters";
import Results from "@/components/Results";

const Home = ({ jobPosts }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [showFulltimeOnly, setShowFulltimeOnly] = useState(false);
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [jobTitleSearchTerm, setJobTitleSearchTerm] = useState("");
  const [filteredJobPosts, setFilteredJobPosts] = useState([]);

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
          post.city.includes(locationSearchTerm)
        );
      }
    } else if (selectedCity) {
      filteredPosts = filteredPosts.filter(
        (post) => post.city === selectedCity
      );
    }

    if (jobTitleSearchTerm) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.includes(jobTitleSearchTerm)
      );
    }

    filteredPosts
      ? setFilteredJobPosts(filteredPosts)
      : setFilteredJobPosts(jobPosts);
  }, [showFulltimeOnly, locationSearchTerm, selectedCity, jobTitleSearchTerm]);

  const onSelectCity = (event) =>
    setSelectedCity(
      selectedCity !== event.target.value ? event.target.value : ""
    );
  const onSelectFulltime = (event) => setShowFulltimeOnly(event.target.checked);
  const onLocationSearchTermChange = (event) =>
    setLocationSearchTerm(event.target.value);
  const onJobTitleSearchTermChange = (event) =>
    setJobTitleSearchTerm(event.target.value);

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

  // const jobPosts = [
  //   {
  //     title: "Customer Marketing Supervisor",
  //     description: "District",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/fashion",
  //     location: "Communications",
  //     company: "Considine - Lang",
  //     city: "Deonton",
  //     id: "1",
  //   },
  //   {
  //     title: "Central Intranet Representative",
  //     description: "Future",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/abstract",
  //     location: "Intranet",
  //     company: "Bradtke, Feest and Kohler",
  //     city: "South Moisesfurt",
  //     id: "2",
  //   },
  //   {
  //     title: "Dynamic Applications Engineer",
  //     description: "Dynamic",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/animals",
  //     location: "Group",
  //     company: "Lockman - Stracke",
  //     city: "East Meredith",
  //     id: "3",
  //   },
  //   {
  //     title: "Customer Security Coordinator",
  //     description: "Principal",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/people",
  //     location: "Response",
  //     company: "Schaden - Hagenes",
  //     city: "East Lenna",
  //     id: "4",
  //   },
  //   {
  //     title: "District Security Technician",
  //     description: "Principal",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/food",
  //     location: "Functionality",
  //     company: "Wisoky - Bahringer",
  //     city: "West Elmerchester",
  //     id: "5",
  //   },
  //   {
  //     title: "Senior Applications Orchestrator",
  //     description: "Principal",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/business",
  //     location: "Communications",
  //     company: "Kilback and Sons",
  //     city: "Boscoshire",
  //     id: "6",
  //   },
  //   {
  //     title: "Customer Accountability Analyst",
  //     description: "Senior",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/sports",
  //     location: "Functionality",
  //     company: "Considine - Quigley",
  //     city: "Charlottesville",
  //     id: "7",
  //   },
  //   {
  //     title: "Chief Accountability Liaison",
  //     description: "Senior",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/abstract",
  //     location: "Metrics",
  //     company: "West - Schiller",
  //     city: "Cape Coral",
  //     id: "8",
  //   },
  //   {
  //     title: "Chief Accountability Facilitator",
  //     description: "National",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/food",
  //     location: "Brand",
  //     company: "Balistreri, Feil and Quigley",
  //     city: "Cristobalton",
  //     id: "9",
  //   },
  //   {
  //     title: "Product Assurance Associate",
  //     description: "National",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/business",
  //     location: "Functionality",
  //     company: "McClure, Armstrong and Crooks",
  //     city: "Fredastead",
  //     id: "10",
  //   },
  //   {
  //     title: "Dynamic Group Assistant",
  //     description: "Future",
  //     fulltime: false,
  //     logo: "https://loremflickr.com/640/480/fashion",
  //     location: "Division",
  //     company: "Emard and Sons",
  //     city: "Fort Malikastead",
  //     id: "11",
  //   },
  //   {
  //     title: "Corporate Creative Facilitator",
  //     description: "Product",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/sports",
  //     location: "Configuration",
  //     company: "Volkman LLC",
  //     city: "North Kristahaven",
  //     id: "12",
  //   },
  //   {
  //     title: "Future Response Orchestrator",
  //     description: "Chief",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/technics",
  //     location: "Security",
  //     company: "Klein LLC",
  //     city: "Fullerton",
  //     id: "13",
  //   },
  //   {
  //     title: "Product Directives Analyst",
  //     description: "Chief",
  //     fulltime: true,
  //     logo: "https://loremflickr.com/640/480/animals",
  //     location: "Creative",
  //     company: "Turcotte Inc",
  //     city: "Fort Haskellboro",
  //     id: "14",
  //   },
  // ];
  return {
    props: {
      jobPosts,
    },
  };
};

export default Home;
