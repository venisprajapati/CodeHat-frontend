import React, { Component, useState } from "react";
import { Container } from "reactstrap";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
} from "reactstrap";

function CodeEditor() {
	const [code, setCode] = React.useState(
		`function add(a, b) {\n  return a + b;\n}`
	);
	return (
		<Container
			style={{
				margin: "auto",
				padding: "10px",
				backgroundColor: "#181818",
				borderRadius: "25px",
			}}
		>
			<Editor
				value={code}
				onValueChange={(code) => setCode(code)}
				highlight={(code) => highlight(code, languages.js)}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 18,
					minHeight: "300px",
				}}
			/>
		</Container>
	);
}

class ProblemDefinitionPage extends Component {
	render() {
		const pTitle = "Problem Title";
		const pAuthor = "Author";
		const pDefinition =
			"Problem Definition xxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx";

		const pDescriptionStyle = {
			align: "left",
			border: "3px solid",
			borderRadius: "10px",
			fontSize: "20px",
			padding: "10px 10px",
        };
        const submitButtonStyle = {
            fontSize: "24px",
            backgroundColor: "indigo",
            color: "white",
            padding: "auto",
            marginTop: "15px",
        }
        const codepenStyle = {
            marginTop: "10px",
            marginBottom: "10px",
            padding: "5px 5px",
        }
        const formgrpStyle = {
            marginTop: "10px"
        }
		return (
            <Container>
				<h1>{pTitle}</h1>
				<h3 align="right">
					{" -"}
					{pAuthor}
				</h3>
				<div style={pDescriptionStyle} align="left">
					{pDefinition}
				</div>
				<h3 style={codepenStyle} align="left">Your CodePen</h3>
				<CodeEditor />
				<Form>
					<FormGroup style={formgrpStyle} align="left">
						<Label for="exampleFile"><h5>Code File</h5></Label>
						<Input type="file" name="file" id="exampleFile" />
						<FormText  color="muted">
							Upload your code file here.
						</FormText>
                    </FormGroup>
                    <Button style={submitButtonStyle} type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default ProblemDefinitionPage;
