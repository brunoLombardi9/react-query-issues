import { useState } from "react";
import useIssues from "../../hooks/useIssues";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { issuesQuery } = useIssues();

  function onLabelChange(labelName) {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  }

  return (
    <div className="row mt-5">  
      <div className="col-8">
        {issuesQuery.isLoading ? <p>Loading...</p> : <IssueList issues={issuesQuery.data || []}/>}
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
