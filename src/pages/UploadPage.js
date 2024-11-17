import React from "react";
import FileUpload from "../components/FileUpload";

const UploadPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Upload a File</h1>
      <FileUpload />
    </div>
  );
};

export default UploadPage;
