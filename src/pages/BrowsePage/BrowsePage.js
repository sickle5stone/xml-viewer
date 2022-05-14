import React, { useState } from "react";
import styled from "styled-components";
import BackButton from "@mui/icons-material/BackspaceOutlined";
import IconButton from "@mui/material/IconButton";
import { styled as muiStyled } from "@mui/system";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Download } from "@mui/icons-material";

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

const StyledTableContainer = muiStyled(TableContainer)`
  display:flex;
  align-items:center; 
  justify-content:center;
  margin-top: 60px; 
`;

const StyledTable = muiStyled(Table)`
  max-width: 80%;
`;

const StyledTableRow = muiStyled(TableRow)`
  &:hover {
    background: #d0d0d025;
  }
`;

const StyledTypography = muiStyled(Typography)`
  margin-top: 40px;
`;

// const formElements = [
//   {
//     label: "Filename",
//   },
//   {
//     label: "Author",
//   },
//   {
//     label: "Description",
//     multiline: true,
//     rows: 4,
//   },
//   {
//     label: "Image url",
//   },
// ];

const StyledDownload = styled.span`
  display: flex;
  &:hover {
    color: #797ef6;
  }
  cursor: pointer;
`;

const StyledDownloadIcon = styled(Download)`
  margin-right: 10px;
`;

const data = [
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
  { FileName: "fn1", Author: "a", Description: "desc", ImageUrl: "image" },
];

function BrowsePage(props) {
  const { goBackFn } = props;
  return (
    <PageRoot>
      <StyledTypography variant={"h3"}>List of XML Files</StyledTypography>
      <StyledIconButton onClick={goBackFn}>
        <BackButton />
      </StyledIconButton>
      <StyledTableContainer>
        <StyledTable>
          <TableHead>
            <TableRow>
              {Object.keys(data[0]).map((key) => {
                return <TableCell>{key}</TableCell>;
              })}
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => {
              return (
                <StyledTableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.values(entry).map((value) => {
                    return <TableCell>{value}</TableCell>;
                  })}
                  <TableCell>
                    <StyledDownload>
                      <StyledDownloadIcon></StyledDownloadIcon>
                      Download
                    </StyledDownload>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </PageRoot>
  );
}

export default BrowsePage;
