import { render } from '@testing-library/react';
import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import StudentList from './Student-Lists';
const Student = () => {

    // This way of method is used in Class Components.
    // handleCallback = (childData) => {
    //     this.setState({ data: childData })
    // }
    
    const [value, setValue] = useState('goos')
    
    const onchange = (dataFromChild) => {
        setValue(dataFromChild);
        // console.log('Data from child is = ', dataFromChild);
        // render() {
    }
    return (
        <>
            {/* This way is used in Class componets. */}
            {/* <StudentList parent="Hi i am Parent of all Student Lists." parentCallback={this.handleCallback} /> */}
            <StudentList parent="Hi i am Parent of all Student Lists." onchange={(e) => { onchange(e) }} />
            <p>Hi i am Student.</p>
            <Link to="/student-list">Student List</Link>
            <p>{value}</p>
        </>
    )
    // }
}
export default Student;