// eslint-disable-next-line no-unused-vars
import React from "react";
import Dropzone from "react-dropzone";
import "./CustomDZ.css";
// eslint-disable-next-line react/prop-types
export const CustomDropZone = ({ onAccept, onReject, children }) => {
  return (
    <Dropzone
      accept={{ "image/jpeg": [], "image/png": [] }}
      onDrop={(acceptedFiles, rejectedFiles) => {
        onAccept(acceptedFiles);
        onReject(rejectedFiles);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
          </div>
        </section>
      )}
    </Dropzone>
  );
};
