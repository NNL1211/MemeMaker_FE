import MemeList from "components/MemeList";
import PaginationBar from "components/PaginationBar";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { memeActions } from "redux/actions";

const GalleryPage = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.meme.loading);
  const totalPageNum = useSelector((state) => state.meme.totalPageNum);
  const memes = useSelector((state) => state.meme.memes);

  useEffect(() => {
    dispatch(memeActions.memesRequest(pageNum));
  }, [dispatch, pageNum]);

  const showDetail = () => {};

  return (
    <Container className="p-2">
      <PaginationBar
        pageNum={pageNum}
        setPageNum={setPageNum}
        totalPageNum={totalPageNum}
        loading={loading}
      />
      <Row className="d-flex justify-content-center align-items-center">
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <>
            <MemeList memes={memes} showDetail={showDetail} />
          </>
        )}
      </Row>
    </Container>
  );
};

export default GalleryPage;