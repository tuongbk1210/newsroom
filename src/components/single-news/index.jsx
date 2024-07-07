import React from "react";
import { Row, Col, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import "./single-news.scss"
import RightHomePage from "../rightHomePage";
import background_single_news from "../../assets/images/featured/featured_1.jpg";
import bg_single_news_1 from "../../assets/images/featured/featured_2.jpg";
import bg_single_news_2 from "../../assets/images/featured/featured_3.jpg";
import user_comment from "../../assets/images/user_comment.jpg";


function SingleNews() {

  const { TextArea } = Input;

  return (
    <div class="home">
      <Row>
          <Link className="link_current" to="page-home">Home</Link>&nbsp; /&nbsp; <Link className="link_current" to="category">Category</Link>&nbsp; /&nbsp; <Link className="link_current" to="category">Technology</Link>&nbsp;/&nbsp;News Title
      </Row>
        <Row xl={24} xs={24}>
        <Col xs={24} sm={16} className="singnews">
        <img src={background_single_news} alt="background_single_news" width={"100%"} height={"440px"}/>
        <Row className="container_singnews"> 
        <Row className="link_title_singnews"><Link style={{color: 'red'}}>Technology</Link>&nbsp;/ January 01,2045</Row>
          <Row>
            <Row className="text_sub_double_categories">Est set amet ipsum stet clita rebum duo</Row>
            <Row className="text_single_news_1">
              Sadipscing labore amet rebum est et jussto gubergren.Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd,
              stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.Ipsum sit gubergen dolores et, consetetur justo invidunt 
              at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergen sit stet no diam kasd vero.
            </Row>
            <Row className="text_single_news_1">
              Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus.Sit sed accusam stet sit 
              nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetus no sed et aliquyam ipsum justo et, clita lorem sit
              vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
            </Row>
            <Row className="text_sub_double_categories" style={{paddingTop: "20px"}}>Est dolor lorem et ea</Row>
            <p className="text_single_news_1"><img src={bg_single_news_1} alt="bg single news" width={"270px"} height={"135px"} className="bg_singnews" />
           
                Diam dolor est labore duo invidunt ipsum clita et, set et lorem voluptua tempor invidunt at est sanctus sanctus.Clita dolores sit kasd diam takimata justo diam lorem
                sed. Magna amet sed rebum eos.Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod .No at tempor sea diam 
                kasd, takimata ea nonumy elitr sadipscing gubergen erat.Gubergen at lorem invidunt sadipscing rebum sit amet ut ut , voluptua diam dolores at sadipscing stet. 
                Clita dotor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore sit.Sit ipsum erat amet lorem et, magna sea at sed et eos.
                Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.s
            </p>
            <Row className="text_sub_double_categories">Est dolor lorem et ea</Row>
            <p className="text_single_news_1">
              <img src={bg_single_news_2} alt="bg single news" width={"270px"} height={"135px"} className="bg_singnews_2"/>
              Diam dolor est labore duo invidunt ipsum clita et, set et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takmata jussto diam lorem 
              sed.Magna no dolor erat diam tempor rebum consetetur , sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
              sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat.Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
              voluptua diam dolores takimata dolor dolore dolore sit.Sit ipsum erat amet lorem et , magna sea at sed at eos.
              Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et.Takimata kasd diam justo est eos erat aliquyam et ut.                
            </p>
          </Row>
        </Row>
        <Col className="comments">
          <Row className="container_comments">
            <Row className="text_sub_double_categories">3 Comments</Row>
            <Col className="content_comments">
              <Row style={{paddingRight: "40px"}}><img src={user_comment} alt="user comment " width={"40px"} height={"40px"}/></Row>
              <Row style={{display: "flex", lineHeight: "1.2"}}>
                <Row><span style={{color: "red", fontWeight: "500"}}>John Doe</span><i style={{fontWeight: "500", fontSize: "12px"}}>&nbsp; 01 Jan 2045</i></Row>
                <Row>Sadipscing labore amet rebum est et jussto gubergren.Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd,
                stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.Ipsum sit gubergen dolores et, consetetur justo invidunt 
                at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergen sit stet no diam kasd vero.
                </Row>
                <Row style={{paddingTop: "20px"}}><Button>Reply</Button></Row>
              </Row>
            </Col>
            <Col className="content_comments">
              <Row style={{paddingRight: "40px"}}><img src={user_comment} alt="user comment " width={"40px"} height={"40px"}/></Row>
              <Row style={{display: "flex", lineHeight: "1.2"}}>
                <Row><span style={{color: "red", fontWeight: "500"}}>John Doe</span><i style={{fontWeight: "500", fontSize: "12px"}}>&nbsp; 01 Jan 2045 at 12:00pm</i></Row>
                <Row>Sadipscing labore amet rebum est et jussto gubergren.Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd,
                stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.Ipsum sit gubergen dolores et, consetetur justo invidunt 
                at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergen sit stet no diam kasd vero.
                </Row>
                <Row style={{paddingTop: "20px"}}><Button>Reply</Button></Row>
                  <Col className="content_comments">
                    <Row style={{paddingRight: "40px"}}><img src={user_comment} alt="user comment " width={"40px"} height={"40px"}/></Row>
                      <Row style={{display: "flex", lineHeight: "1.2"}}>
                        <Row><span style={{color: "red", fontWeight: "500"}}>John Doe</span><i style={{fontWeight: "500", fontSize: "12px"}}>&nbsp; 01 Jan 2045 at 12:00pm</i></Row>
                        <Row>Sadipscing labore amet rebum est et jussto gubergren.Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd,
                          stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.Ipsum sit gubergen dolores et, consetetur justo invidunt 
                          at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergen sit stet no diam kasd vero.
                      </Row>
                      <Row style={{paddingTop: "20px"}}><Button>Reply</Button></Row>
                    </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="leave_comment">
            <Row className="container_leave_comment">
              <Row className="text_sub_double_categories" style={{paddingBottom: "20px"}}>Leave a comment</Row>
            <Form>
              <Form.Item
                label="Name"
                name="name"
                layout="vertical"
                style={{paddingBottom: "10px"}}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
              <Input />
              </Form.Item>
              <Form.Item
                label="Website"
                layout="vertical"
                name="website"
                style={{paddingBottom: "10px"}}
                >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                layout="vertical"
                name="email"
                style={{paddingBottom: "10px"}}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                layout="vertical"
                style={{paddingBottom: "10px", height: "100%"}}
                rules={[
                  {
                    required: true,
                  },
                ]}
                >
               <TextArea rows={4} />
              </Form.Item>
              <Form.Item type="primary" htmlType="submit" style={{paddingTop: "70px"}}>
               <Button className="btn_leave_comment">Leave a comment</Button>
              </Form.Item>
              
          </Form>
        </Row>
        </Col> 
        </Col>
        <Col xs={24} sm={8}>
          <RightHomePage />
        </Col>
   
      </Row>
  
    </div>
  );
}

export default SingleNews;
