import React, { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll("Files"));
    fetch("http://localhost:3000", {
      method: "POST",
      body: formData,
    });
  };

  if (files) {
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button className="btn btn-outline" onClick={() => setFiles(null)}>
            Cancel
          </button>
          <button className="btn btn-blue" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <p>
          Drag and Drop Files to Upload <br />
          PNG, JPEG, etc
        </p>
        <hr />
        <span>or</span>
        <input
          type="file"
          multiple
          onChange={(event) => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
        <button
          className="btn btn-blue"
          onClick={() => inputRef.current.click()}
        >
          Select Files
        </button>
      </div>
    </>
  );
};

export default DragDropFiles;
