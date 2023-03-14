import react from "react";
import { useQuery } from "@tanstack/react-query";
import githubApi from "../../api/githubApi.js";
import useLabels from "../../hooks/useLabels.jsx";

export const LabelPicker = ({ selectedLabels, onLabelChange }) => {
  const labels = useLabels();

  return (
    <div>
      {labels.isLoading && <h1>Loading...</h1>}
      {labels.data?.map((label) => {
        const background = selectedLabels.includes(label.name) ? "labelActive" : "";

        return (
          <span
            key={label.id}
            className={`badge rounded-pill m-1 label-picker ${background}`}
            style={{
              border: `1px solid #${label.color}`,
              color: `#${label.color}`,
            }}
            onClick={() => onLabelChange(label.name)}
          >
            {label.name}
          </span>
        );
      })}
    </div>
  );
};
