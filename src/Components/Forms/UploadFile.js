import React, { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../Context/ContextApi";
import { Button, Form } from "react-bootstrap";

function UploadFile() {
  const [imageId, setImageId] = useState(null);
  const { user, setUser, myMultipartHeader, backendHostLink } =
    useContext(MyContext);

  const [file, setFile] = useState({
    file: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setFile({ ...file, file: e.target.files[0] });
    console.log(file);
  };
  const submitUpload = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("uploaded_file", file.file);

    console.log("upload submit pressed frontend ", formData);
    await axios
      .post(`${backendHostLink}admin/uploadFile`, formData, myMultipartHeader)
      .then((result) => {
        console.log("result is ...", result);
        setImageId(result.data);
        console.log(imageId);
      });
  };

  return (
    <div className="uploadForm">
      {/* Upload CV  */}
      <Form onSubmit={submitUpload} single="true" encType="multipart/form-data">
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Control
            type="file"
            onChange={handleInput}
            name="uploaded_file"
          />
          <Button type="submit">submit +</Button>
        </Form.Group>
      </Form>
      <img
        src="https://catchsoftware.com/wp-content/uploads/2021/01/hero.png"
        alt="upload"
      />
      {imageId ? (
        <div>
          <img src={`${backendHostLink}api/getCV/${imageId}`} alt=":" />
          <a
            href={`${backendHostLink}api/getCV/${imageId}`}
            target="_blank"
            rel="noreferrer"
          >
            click to see image
          </a>
        </div>
      ) : (
        "no file to display"
      )}
    </div>
  );
}

export default UploadFile;
