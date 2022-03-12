import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { storage, database, firebase } from "../Firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UploadPhotos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState(null);

  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress state
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        // Error message
        console.log(error.message);
      },
      () => {
        //progress completion
        // gets the imageurl
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // post to db

            database.collection("postData").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              image: url,
              username: "kaizen",
            });

            alert("Upload Complete");
            console.log(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Upload
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            placeholder="enter caption"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
          />
          <input type="file" onChange={handleChange} />
          <Button onClick={handleUpload} variant="outlined">
            Upload
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
