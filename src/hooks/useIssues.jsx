import { useQuery } from "@tanstack/react-query";
import React from "react";
import githubApi from "../api/githubApi";

async function getIssues(labels, state) {
  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", "1");
  params.append("per_page", "5");

  const { data } = await githubApi.get("/issues", { params });

  return data;
}

const useIssues = ({ state, labels }) => {
  const issuesQuery = useQuery(
    ["issues", { state, labels }],
    () => getIssues(labels, state),
    { refetchOnWindowFocus: false }
  );

  return { issuesQuery };
};

export default useIssues;
