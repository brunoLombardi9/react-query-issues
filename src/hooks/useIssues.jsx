import { useQuery } from "@tanstack/react-query";
import React from "react";
import githubApi from "../api/githubApi";

const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues , {refetchOnWindowFocus: false});

  async function getIssues() {
    const { data } = await githubApi.get("/issues");

    return data;
  }

  return { issuesQuery };
};

export default useIssues;
