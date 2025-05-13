import { Fragment } from "react"
import {jobs} from "../../data"

function GetData() {

    const listItem = jobs.map(jobs =>
        <li key={jobs.Id}>
            <b>{jobs.CompanyName}</b>
            <p>{jobs.StartData} - {jobs.EndData}</p>
            <b>{jobs.JobTitle}</b>
            <p>{jobs.JobDesc}</p>
        </li>
    );

    return (
        <>
            <ul>{listItem}</ul>
        </>
    );
}



function JobCard()
{


    return (
        <>
            aa
        </>

    );
}



function Timeline()
{

    return (
        <>
        <GetData/>
        </>
    );
}

export default Timeline;