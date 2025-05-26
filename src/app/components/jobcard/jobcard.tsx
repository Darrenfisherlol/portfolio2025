import { Fragment } from "react"
import {jobs} from "../../data"

import "./Jobcard.css"

function GetData() {
    return (
        <div className="jobSection">
            {jobs.map((job) => (
                <div key={job.Id}>
                    <div className="jobBox">
                        <h4>
                            <strong>{job.CompanyName}</strong> - {job.JobTitle}
                        </h4>
                        <p>{job.StartData} - {job.EndData}</p>
                        <p>{job.JobDesc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default function JobCard()
{

    return (
        <div id="ExperienceSection" className="experienceSection">
            <h2> Experience </h2>
            <GetData/>
        </div>       
    );
}