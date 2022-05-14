import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "@mui/icons-material/BackspaceOutlined";
import IconButton from "@mui/material/IconButton";
import { styled as muiStyled } from "@mui/system";
import { Button, Container, Input, TextField, Typography } from "@mui/material";
// import { createTokenAuth } from "https://cdn.skypack.dev/@octokit/auth-token";
import axios from "axios";
import DragDropComponent from "../../components/DragDrop";
import { addFile } from "./GithubHelper";

const PageRoot = styled.div`
  height: 100%;
`;

const StyledIconButton = muiStyled(IconButton)`
  position: absolute;
  top: 50px;
  right: 50px;
  transform: scale(2);
  color: #d0d0d0;

  &:hover {
    .MuiSvgIcon-root {
      color: #797EF6;
    }
  }
`;

const StyledForm = muiStyled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledTextField = muiStyled(TextField)`
  margin: 10px;
  width: 100%;
`;

const StyledTypography = muiStyled(Typography)`
  margin-bottom: 40px;
`;

const renderTextFields = (textFieldProps) => {
  return <StyledTextField {...textFieldProps} />;
};

function AddPage(props) {
  const { goBackFn } = props;

  const formElements = [
    {
      label: "Filename",
    },
    {
      label: "Author",
    },
    {
      label: "Description",
      multiline: true,
      rows: 4,
    },
    {
      label: "Image url",
    },
  ];

  const temp = async (token) => {
    // createTokenAuth();
    // const { history } = this;
    await axios.get("https://github.com/login/oauth/authorize");

    addFile(token, "file1");
    // window.location = "https://github.com/login/oauth/authorize"
    // await history.pushState("https://github.com/login/oauth/authorize")
  };

  const [token, setToken] = React.useState("Insert oauth token");

  return (
    <PageRoot>
      <Input value={token} onChange={(e) => setToken(e.target.value)}></Input>
      <Button onClick={() => temp(token)}>Hey</Button>
      <StyledIconButton onClick={goBackFn}>
        <BackButton />
      </StyledIconButton>
      <StyledForm>
        <StyledTypography variant={"h3"}>Add new XML File</StyledTypography>
        <DragDropComponent />
        {formElements.map((element) => {
          return renderTextFields(element);
        })}
      </StyledForm>
    </PageRoot>
  );
}

export default AddPage;
