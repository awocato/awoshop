'use client'
import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then((res) => res.json());

export default function FetchData(url:string) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
