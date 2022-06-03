import {Container, Nav, Navbar} from "react-bootstrap";

export default function Toggle (){

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <h4>School</h4>
                <Nav className="me-auto">
                    <Nav.Link href="">Students</Nav.Link>
                    <Nav.Link href="">Teachers</Nav.Link>
                    <Nav.Link href="">Groups</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}