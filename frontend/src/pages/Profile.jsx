import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import Prof from "../components/ProfilePage/Prof";
import Header from "../components/ProfilePage/Header";

import BGimage from "../assets/bgimage.jpg";

import { Grid, Container } from "@mui/material";

//63170d67abf1eb0be1fc3113

const ContainerWrapper = styled.div`
  background-image: url(${BGimage});
  margin-top: 50px;
  border-radius: 10px;
`;
const Profile = ({ type, video }) => {
  return (
    <Container>
      <ContainerWrapper>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Prof />
          </Grid>
          <Grid item xs>
            <Header />
          </Grid>
        </Grid>
      </ContainerWrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
