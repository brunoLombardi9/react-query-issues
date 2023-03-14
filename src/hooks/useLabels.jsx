import { useQuery } from "@tanstack/react-query";
import React from "react";
import githubApi from "../api/githubApi";

const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    refetchOnWindowFocus: false, //evita refrescar la consulta cuando se hace foto en la pestaña
  });   

  async function getLabels() {
    const { data } = await githubApi.get("/labels");
    return data;
  }

  return labelsQuery;
};

export default useLabels;
