import { Link, Navigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import useIssue from "../../hooks/useIssue.jsx";

export const IssueView = () => {
  const params = useParams();
  const { id = "0" } = params;
  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isFetching) {
    return <p>Loading...</p>;
  }

  if (!issueQuery.data) {
    return <Navigate to="./issues/list" />;
  }
  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      <IssueComment data={issueQuery.data} />

      {commentsQuery.isFetching && <p>Loading...</p>}
      {commentsQuery.data?.map((comment) => {
        return <IssueComment data={comment} key={comment.id} />;
      })}
    </div>
  );
};
