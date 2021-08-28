import { React } from 'react';

// const StudentList = ({ parent, onchange }) => {

    const StudentList = (props) => {

    // This method is used in Class Components.
    // onTrigger = (event) => {
    //     this.props.parentCallback("Data from child");
    //     event.preventDefault();
    // }

    // This method is used in functional Components.
    const onTrigger = (event) => {
        props.onchange(event.target.value);
        // event.preventDefault();
    }

    return (
        <>
            <h1>{props.parent}</h1>
            {/* <h1>{parent}</h1> */}
            <p>Hi, i am your child Student Lists.</p>
            {/* <p>{props.parent = "Child here"}</p> */}
            <div>
                <form>
                    {/* <input onChange={(event) => onchange(event.target.value)} /> */}
                    <input onChange={onTrigger}/>
                </form>
            </div>
        </>
    )
}
export default StudentList;