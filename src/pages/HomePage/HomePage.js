import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Typography, CardContent, Container } from "@mui/material";
import { styled } from "@mui/system";
import PlusIcon from "@mui/icons-material/AddBoxOutlined";
import SearchIcon from "@mui/icons-material/Search";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledCard = styled(Card)`
  flex: 1;
  min-height: 450px;
  max-width: 450px;
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;

  &:hover {
    box-shadow: 2px 2px 2px 2px #797EF6;
    transform: scale(1.05);

    .MuiSvgIcon-root {
      color: #797EF6
    }
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  flex: 1;
  font-size: 140px;
  color: #d0d0d0;
`;

const StyledSearchIcon = styled(SearchIcon)`
  font-size: 140px;
  color: #d0d0d0;
`;

function HomePage(props) {
  const { setPage } = props;

  return (
    <StyledContainer>
      <StyledCard onClick={() => setPage("AddPage")} elevation={5}>
        <CardContent>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Add a XML
          </Typography>
          <StyledPlusIcon fontSize="inherit"></StyledPlusIcon>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Add a XML to the repository
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard onClick={() => setPage("BrowsePage")} elevation={5}>
        <CardContent>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Browse the XMLs
          </Typography>
            <StyledSearchIcon></StyledSearchIcon>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Access the library of XMLs
          </Typography>
        </CardContent>
      </StyledCard>
    </StyledContainer>
  );
}

export default HomePage;
