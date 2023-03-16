import { useState } from "react";
import useIssues from "../../hooks/useIssues";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [state, setState] = useState();
  const { issuesQuery } = useIssues({state, labels: selectedLabels});

  function onLabelChange(labelName) {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  }

  function onStateChange(option) {
    setState(option);
  }

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <p>Loading...</p>
        ) : (
          <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={onStateChange}
          />
        )}
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onLabelChange={onLabelChange}
        />
      </div>
    </div>
  );
};
