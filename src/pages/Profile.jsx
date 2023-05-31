// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import { CustomDropZone } from "../components/Dropzone/CustomDropZone";
import { ContextProvider } from "../context/AppContext";
import { UpdateProfilePicture } from "../services/user.service";

import "./css/Profile.css";

export const Profile = () => {
  const { user, setUser } = useContext(ContextProvider);
  const [file, setFile] = useState({});
  const [picture, setPicture] = useState(user.foto);

  const handleRejectedFiles = (files) => {
    console.log(files);
  };

  const handleButtonClick = () => {
    UpdateProfilePicture({
      id: user.employeeId,
      token: user.token,
      file: file,
    })
      .then((res) => {
        if (res?.ok) {
          setUser({
            ...user,
            foto: res.employee.fotoUrl,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleImagePreview = (files) => {
    setFile(files);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="container-fluid box">
      <h3>Profile</h3>
      <CustomDropZone
        onAccept={(newFiles) => {
          handleImagePreview(newFiles);
        }}
        onReject={handleRejectedFiles}
      >
        <img src={picture} />
        <p>Click para subir imagen</p>
      </CustomDropZone>
      <button className="btn btn-warning" onClick={handleButtonClick}>
        Guardar
      </button>
    </div>
  );
};
