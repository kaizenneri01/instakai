import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

export default function SignupModal({
  changeUser,
  changeEmail,
  changePass,
  user,
  pass,
  email,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Sign up
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              id="userID"
              label="username"
              variant="filled"
              name="user"
              onChange={changeUser}
              value={user}
            />
            <TextField
              id="passWordID"
              label="password"
              variant="filled"
              name="pass"
              onChange={changePass}
              value={pass}
            />
            <TextField
              id="emailID"
              label="email"
              variant="filled"
              name="email"
              onChange={changeEmail}
              value={email}
            />
          </form>
          <Button variant="contained">SUBMIT</Button>
        </Box>
      </Modal>
    </div>
  );
}
