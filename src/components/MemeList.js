import React from "react";
// import { Card } from "react-bootstrap";
import { Col, Row ,Card } from 'antd';

const MemeList = ({ memes, showDetail }) => {
  return (
    <>
      {memes?.length > 0 ? (
        <Row gutter={16}>
            {memes.map((meme,index) => (
              <Col key={index} span={6}>
              <MemeCard meme={meme} showDetail={showDetail} key={meme.id} />
              </Col>
            ))}          
        </Row>
      ) : (
        <p className="text-center">There are no memes</p>
      )}
    </>
  );
};

const MemeCard = ({ meme, showDetail }) => {
  return (
  
    <Card
    hoverable
    cover={<img alt="example" src={`${process.env.REACT_APP_BACKEND_API}/${
      meme.outputMemePath.split("public/")[1]
    }?${meme.updatedAt}`} />}
    className="mouse-hover"
    onClick={() => showDetail(meme)}
    >
      <Card.Meta title={meme.id} description="www.instagram.com" />
    </Card>
    
  );
};

export default MemeList;