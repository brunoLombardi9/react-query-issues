import { useQuery } from "@tanstack/react-query";
import React from "react";
import githubApi from "../api/githubApi";

const useIssue = ( issueNumber ) => {
  const issueQuery = useQuery(["issue", issueNumber], getIssue, {
    refetchOnWindowFocus: false,
  });

  console.log(issueNumber);

  async function getIssue() {
    const { data } = await githubApi.get(`/issues/${issueNumber}`);
console.log(data)
    return data;
  }

  return issueQuery;
};

export default useIssue;
