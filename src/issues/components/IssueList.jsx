import { IssueItem } from './IssueItem';

export const IssueList = ({issues, state, onStateChange}) => {

    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className={`nav-link ${!state ? "active" : ""}`}
                        onClick={() => onStateChange()}
                        >All</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${state === "open"? "active" : ""}`}
                        onClick={() => onStateChange("open")}
                        >Open</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${state === "closed" ? "active": ""}`}
                        onClick={() => onStateChange("closed")}
                        >Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    issues.map( issue => (
                        <IssueItem issue={issue} key={issue.id} />
                    ))
                
                }                
            </div>
        </div>
    )
}
