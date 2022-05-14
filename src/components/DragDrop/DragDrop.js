import { useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const DragDropComponent = styled.div`
  min-height: 300px;
  min-width: 300px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  flex-direction: column;

  &:hover {
    background: #d0d0d025;
  }
`;

const StyledUploadFileIcon = muiStyled(UploadFileIcon)`
  color: #d0d0d0;
  font-size: 5rem;
`;

const StyledFileUploadIcon = muiStyled(FileUploadIcon)`
  color: #797EF6;
  font-size: 5rem;
`;

function DragDrop() {
  const [isDropping, setDropping] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDropping(true);
  };

  const handleDragDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDropping(false);
  };

  return (
    <DragDropComponent
      onDragLeave={() => setDropping(false)}
      onDragOver={handleDragOver}
      onDrop={handleDragDrop}
    >
      {isDropping ? <StyledFileUploadIcon /> : <StyledUploadFileIcon />}
      <p>Drag or Upload file here</p>
    </DragDropComponent>
  );
}

export default DragDrop;
