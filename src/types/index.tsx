import { ChangeEvent, FormEvent, ReactNode } from "react";

export interface JobPost {
  title: string;
  description: string;
  fulltime: boolean;
  logo: string;
  location: string;
  company: string;
  city: string;
  created: string;
  details: string;
  id: string;
}
export interface PageHomeProps {
  jobPosts: Array<JobPost>;
}

export interface PageJobDetailProps {
  post: JobPost;
}

export interface FiltersProps {
  cities: Array<string>;
  selectedCity: string;
  showFulltimeOnly: boolean;
  locationSearchTerm: string;
  onSelectCity: (
    event: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
  ) => void;
  onSelectFulltime: (event: ChangeEvent<HTMLInputElement>) => void;
  onLocationSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ResultsProps {
  posts: Array<JobPost>;
}

export interface SearchProps {
  jobTitleSearchTerm: string;
  onJobTitleSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
