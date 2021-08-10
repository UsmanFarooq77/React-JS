import {React} from 'react';

const StudentList = (props) => {
    return (
    <>
    
        <h1>{props.parent}</h1>
        <p>Hi, i am your child Student Lists.</p>
        {/* <p>{props.parent = "Child here"}</p> */}
    
    </>
    )
}
export default StudentList;