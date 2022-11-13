import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../Context/ContextApi";

function UploadProfilePic() {
  const { user, getUser, backendHostLink, myHeader, myMultipartHeader } =
    useContext(MyContext);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [imageId, setImageId] = useState("");

  const [file, setFile] = useState({
    file: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setFile({ ...file, file: e.target.files[0] });
  };

  const submitUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("uploaded_pic", file.file);
    console.log("upload submit pressed frontend ", formData);

    await axios
      .post(
        backendHostLink + "admin/uploadProfilePic",
        formData,
        myMultipartHeader
      )
      .then((result) => {
        //not saving a file to user.profilePic but a Link to the file
        if (result.data.fileIdInBucket !== "") {
          const userId = result.data.userId;
          axios
            .post(
              `${backendHostLink}admin/editUserInfo`,
              {
                update: {
                  _id: userId,
                  profilePic: `api/getProfilePic/${result.data.fileIdInBucket}`,
                },
              },
              myHeader
            )
            .then(() => {
              setImageId(result.data.fileIdInBucket);
              console.log("FE:upload profile pic func....");
              getUser();
            });
        }
      });
  };

  return (
    <div className="uploadSec">
      <div className="section">
        {/* Upload CV  */}
        <Form single onSubmit={submitUpload} encType="multipart/form-data">
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Control
              type="file"
              onChange={handleInput}
              name="uploaded_pic"
            />
            <Button type="submit">submit</Button>
          </Form.Group>
        </Form>

        {imageId ? (
          <div>
            <img
              src={`${backendHostLink}api/getProfilePic/${imageId}`}
              alt="profile"
            />
            <a
              href={`${backendHostLink}api/getProfilePic/${imageId}`}
              target="_blank"
              rel="noreferrer"
            >
              View Image
            </a>
          </div>
        ) : (
          "no image to display"
        )}
      </div>
    </div>
  );
}

export default UploadProfilePic;
