import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Input, Message, Segment } from "semantic-ui-react";
const fileInputRef = React.createRef();
const reader = new FileReader();

const CodeReview = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(file);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    // Access file with file
    console.log(file);
    const data = reader.readAsText(file);
  };

  reader.onload = function (event) {
    // The file's text will be printed here
    console.log("Onload Called");
    console.log(event.target.result);
  };
  return (
    <Segment>
      <Message>{file !== null ? file.name : "no file selected"}</Message>
      <Button
        content="Choose File"
        labelPosition="left"
        icon="file"
        onClick={() => fileInputRef.current.click()}
        color="teal"
      />
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
      />
      <Button color="blue" onClick={handleUpload}>
        Display
      </Button>
    </Segment>
  );
};

export { CodeReview };
