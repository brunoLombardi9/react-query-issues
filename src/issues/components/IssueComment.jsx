import ReactMarkdown from "react-markdown";

export const IssueComment = ({ data }) => {
  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img
            src={data.user.avatar_url}
            alt="User Avatar"
            className="avatar"
          />
          <span className="mx-2">{data.user.login}</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown>{data.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
