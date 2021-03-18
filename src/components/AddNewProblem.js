import React, { Component, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import {
	Button as Buttonr,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
} from "reactstrap";

const AddNewProblemForm = (props) => {

    const submitButtonStyle = {
        backgroundColor: "indigo",
        color: "white",
        padding: "auto",
        marginTop: "15px",
    }

	return (
		<div>
			<Form>
				<FormGroup>
					<Label for="problem-title">Title of Problem</Label>
					<Input
						type="text"
						name="problem-title"
						id="problem-title"
						placeholder="Problem Title"
					/>
                </FormGroup>
                <FormGroup>
					<Label for="problem-definition">Problem definition</Label>
					<Input type="textarea" name="text" id="problem-definition" />
				</FormGroup>
				<FormGroup>
					<Label for="max-marks-select">Max Score</Label>
					<Input type="select" name="max-marks-select" id="max-marks-select">
						<option>5</option>
						<option>10</option>
						<option>15</option>
						<option>20</option>
						<option>25</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="exampleFile">Test Case File</Label>
					<Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        Upload Test CAse File here.
					</FormText>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="checkbox" /> Check me out
					</Label>
				</FormGroup>
				<Buttonr style={submitButtonStyle} type="submit">Submit</Buttonr>
			</Form>
		</div>
	);
};

const AddProblemModal = (props) => {
	const [lgShow, setLgShow] = useState(false);

	return (
		<Container>
			<Button onClick={() => setLgShow(true)}>Add New Problem</Button>
			<Modal
				size="lg"
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby="example-modal-sizes-title-lg"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-modal-sizes-title-lg">
						Add New Problem Here
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<AddNewProblemForm></AddNewProblemForm>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

class AddNewProblem extends Component {
	render() {
		return (
			<div>
				<AddProblemModal></AddProblemModal>
			</div>
		);
	}
}

export default AddNewProblem;
