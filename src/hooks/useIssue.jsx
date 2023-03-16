import { useQuery } from "@tanstack/react-query";
import React from "react";
import githubApi from "../api/githubApi";

const useIssue = (issueNumber) => {
  const issueQuery = useQuery(
    ["issue", issueNumber],
    () => getIssue(issueNumber),
    {
      refetchOnWindowFocus: false,
    }
  );

  const commentsQuery = useQuery(
    ["comments", issueNumber],
    () => getIssueComments(issueNumber),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { issueQuery, commentsQuery };
};

export async function getIssue(number) {
  const { data } = await githubApi.get(`/issues/${number}`);
  return data;
}

export async function getIssueComments(number) {
  const { data } = await githubApi.get(`/issues/${number}/comments`);
  return data;
}

export default useIssue;
