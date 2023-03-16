import { useQueryClient } from "@tanstack/react-query";
import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { timeSince } from "../../helpers/time-since";
import { getIssue, getIssueComments } from "../../hooks/useIssue";

export const IssueItem = ({ issue }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // function prefetchIssue(){

  //   queryClient.prefetchQuery(
  //     ["issue", issue.number],
  //     () => getIssue(issue.number)
  //   )

  //   queryClient.prefetchQuery(
  //     ["comments", issue.number],
  //     () => getIssueComments(issue.number)
  //   )

  //   }

  function presetIssue() {
    queryClient.setQueryData(["issue", issue.number], issue);
  }
  
  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${issue.number}`)}
      // onMouseEnter={prefetchIssue}
      onMouseEnter={presetIssue}
    >
      <div className="card-body d-flex align-items-center">
        {issue.state === "open" ? (
          <FiCheckCircle size={30} color="red" />
        ) : (
          <FiInfo size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{issue.title}</span>
          <span className="issue-subinfo">
            {issue.number} opened {timeSince(issue.created_at)} days ago by{issue.user.login}
            <span className="fw-bold">{issue.user.login}</span>
           
           
            {issue.labels.map((label) => (
              <span
                key={label.id}
                className="badge rounded-pill m-1"
                style={{
                  backgroundColor: `#${label.color}`,
                  color: "black",
                }}
              >
                {label.name}
              </span>
            ))}

            
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={issue.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
