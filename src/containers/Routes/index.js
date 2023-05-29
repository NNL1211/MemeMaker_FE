import React from "react";
import {Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavbarHeader from "components/NavbarHeader";
import SideMenu from "containers/SideMenu";
import AlertMsg from "components/AlertMsg";
import HomePage from "containers/HomePage";
import GalleryPage from "containers/GalleryPage";
import NotFoundPage from "components/NotFoundPage";

const Router = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} className="d-flex justify-content-center">
            <AlertMsg />
              <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/gallery" element={<GalleryPage/>} />
              <Route path="*" element={<NotFoundPage/>} />
              </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Router;