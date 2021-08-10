import {React} from 'react';
import { Link } from 'react-router-dom';
import StudentList from './Student-Lists';

const Student = () => {
    return (
    <>
        
            <StudentList parent="Hi i am Parent of all Student Lists."/>
            <p>Hi i am Student.</p>
            <Link to="/student-list">Student List</Link>
        
    </>
    )
}

export default Student;