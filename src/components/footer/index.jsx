import { Row, Col } from 'antd';
import { FaFacebookF, FaAngleRight } from 'react-icons/fa';
import { BiLogoTwitter } from 'react-icons/bi';
import { LiaLinkedinIn } from 'react-icons/lia';
import { PiInstagramLogo } from 'react-icons/pi';
import { RiYoutubeFill } from 'react-icons/ri';

import './footer.scss';
import { DATA_TAGS } from '../../constants/common';

export default function Footer() {
  return (
    <>
      <Row xs={24} sm={24} className="root_footer">
        <Col xs={24} sm={6} className="item_footer">
          <Row className="title_footer">
            <span style={{ color: 'red' }}>NEWS</span>ROOM
          </Row>
          <Row className="content_Text_footer">
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et
          </Row>
          <Row className="container_icon">
            <div className="icon_social">
              <BiLogoTwitter />
            </div>
            <div className="icon_social">
              <FaFacebookF />
            </div>
            <div className="icon_social">
              <LiaLinkedinIn />
            </div>
            <div className="icon_social">
              <PiInstagramLogo />
            </div>
            <div className="icon_social">
              <RiYoutubeFill />
            </div>
          </Row>
        </Col>
        <Col xs={24} sm={6} className="item_footer">
          <Row className="title_categories_footer">Categories</Row>
          <Row className="container_tags_footer">
            {DATA_TAGS.map((item, key) => {
              return (
                <div className="item_tag" key={key}>
                  {item}
                </div>
              );
            })}
          </Row>
        </Col>
        <Col xs={24} sm={6} className="item_footer">
          <Row className="title_categories_footer">Tags</Row>
          <Row className="container_tags_footer">
            {DATA_TAGS.map((item, key) => {
              return (
                <div className="item_tag" key={key}>
                  {item}
                </div>
              );
            })}
          </Row>
        </Col>
        <Col xs={24} sm={6} className="item_footer">
          <Row className="title_categories_footer">Quick Links</Row>
          <Col className="title_quick_link">
            <Row className="element_quick_link">
              <FaAngleRight /> About
            </Row>
            <Row className="element_quick_link">
              <FaAngleRight /> Advertise
            </Row>
            <Row className="element_quick_link">
              <FaAngleRight /> Privacy Policy
            </Row>
            <Row className="element_quick_link">
              <FaAngleRight /> Tem & Conditions
            </Row>
            <Row className="element_quick_link">
              <FaAngleRight /> Contact
            </Row>
          </Col>
        </Col>
      </Row>
      <Row className="main_footer" xs={24} sm={24}>
        &copy;&nbsp;<span style={{ color: 'red' }}>Your Site Name</span>. All Rights Reserved. Designed by
        <span style={{ color: 'red' }}>&nbsp;HTML Codex</span>
      </Row>
    </>
  );
}
