import { useState } from "react";
import "../../styles/NewFile.css";
import AddIcon from "@material-ui/icons/Add";
import Button from '@mui/material/Button';


import { storage, db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = () => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const fileRef = ref(storage, `files/${file.name}`);

    try {
      const snapshot = await uploadBytes(fileRef, file);
      console.log(snapshot);

      const url = await getDownloadURL(fileRef);
      const fileSize = snapshot.metadata.size;

      await addDoc(collection(db, "myFiles"), {
        timestamp: serverTimestamp(),
        caption: file.name,
        fileUrl: url,
        size: fileSize,
      });

      setUploading(false);
      setOpen(false);
      setFile(null);
    } catch (error) {
      console.error("Error uploading file: ", error);
      setUploading(false);
    }
  };

  return (
    <div className="newFile">
      <div className="newFile__container bg-white" onClick={handleOpen}>
        <AddIcon fontSize="large" />
        <p>New</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h3 className="text-2xl font-normal text-[#1f1f1f]">New File</h3>
          {uploading ? (
            <p className="mt-5 text-center text-[#1f1f1f]">Uploading...</p>
          ) : (
            <>
              <div className="mt-5">
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="file_input"
                  type="file"
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end gap-1 mt-7">
                <Button onClick={handleClose}>Cancel</Button>

                <Button onClick={handleUpload}>Upload</Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NewFile;
