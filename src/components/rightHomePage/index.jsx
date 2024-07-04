import React from 'react';
import PropTypes from 'prop-types';
import { Row, Input,Button } from 'antd';
import { FaFacebookF,  FaVimeoV } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { LiaLinkedinIn } from "react-icons/lia";
import { PiInstagramLogo } from "react-icons/pi";
import { RiYoutubeFill } from "react-icons/ri";


import  './styles.scss';
import Techonology from "../../assets/images/categories/technology.jpg";
import { DATA_LATEST, DATA_TAGS} from '../../constants/common';
import ItemPopular from '../popular';

export const ItemIcon = ({ color, icon, children, text }) => {
    const itemStyle = {
        backgroundColor: color,
        color: '#ffffff',
        fontSize: '14px',
        width: "50%",
        alignItem: "center",
        marginBottom: "10px",
        cursor: "point"
    };
  
    return (
      <div style={itemStyle}>
        <div className='follow_icon'>{icon} <span style={{marginLeft: "5px"}}>{text}</span></div>
        {children}
      </div>
    );
  };

  ItemIcon.propTypes = {
    color: PropTypes.string.isRequired,
    icon: PropTypes.object,
    children: PropTypes.node.isRequired
  };

export default function RightHomePage() {
  return (
    <Row class="root_right_page_home">
        <Row className="follow_us">Follow Us</Row>
        <Row style={{paddingBottom: "20px"}}>
            <div className='item_icons'>
                <ItemIcon color="#39569E" icon={<FaFacebookF />} text={"12,345 Fans"} />
                <ItemIcon color="#52AAF4" icon={<BiLogoTwitter />} text={"12,345 Followers"}/>
            </div>
            <div className='item_icons'>
                <ItemIcon color="#0285AD" icon={<LiaLinkedinIn/>} text={"12,345 Connects"}/>
                <ItemIcon color="#C8369D" icon={<PiInstagramLogo />} text={"12,345 Followers"}/>
            </div>
            <div className='item_icons'>
                <ItemIcon color="#DC472E" icon={<RiYoutubeFill />} text={"12,345 Subscribers"}/>
                <ItemIcon color="#1BB7E9" icon={<FaVimeoV />} text={"12,345 Followers"}/>
            </div>
        </Row>
        <Row className="follow_us">Newsletter</Row>
        <Row className='item_email'>
            <div className="text_content_email">Aliqu justo et labore at eirmod jussto sea erat diam dolor diam vero kasd</div>
            <div className='input_email'>
                <Input placeholder='Your Email'/>
                <Button>Sign Up</Button>
            </div>
            <div className='small_text'>Sit eirrmod nonumy kasd eirmod</div>
        </Row>
        <Row style={{width: "100%"}}>
            <img style={{ padding: "20px 10px"}} src={Techonology} alt="item_cateogries" width={"100%"} height={"200px"}/>
        </Row>
        <Row className="follow_us">Tranding</Row>
        <Row className='item_right_page'>
        {
                  DATA_LATEST.map((item, key)=> {
                    return(
                      <ItemPopular img={item.img} text={item.text} key={key} type="right" />
                    )
                  })
                }
        </Row>
        <Row className="follow_us">Tags</Row>
        <Row className="container_tags">
                {DATA_TAGS.map((item, key)=>{
                    return(
                        <div className="item_tag" key={key}>
                            {item}
                        </div>
                    )})}
        </Row>
    </Row>
  );
}