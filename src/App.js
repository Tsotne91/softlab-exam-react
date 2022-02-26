import Toggle from "./Toggle";
import MyTable from "./MyTable";
import AddStudentModal from "./AddStudentModal";
import {useState} from "react";
import {Button} from "react-bootstrap";

export default function App(){
    const [studentModalShow, setStudentModalShow] = useState(false);

    return (
    <>
        <Toggle/>
        <MyTable/>
        <AddStudentModal
        show={studentModalShow}
        onHide={() => setStudentModalShow(false)}/>
        <Button onClick={()=> setStudentModalShow(true)}>Add Student</Button>
    </>
    )
}