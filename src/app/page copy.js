"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { Segmented, Button, Divider } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, ScheduleOutlined, CloudOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  const navbarStyle = {
    position: 'fixed',//sticky
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  };

  const contentStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'transparent',
    flex: 1,
    height: "100vh",
    paddingTop: '80px',
    display: "flex"
  };

  const handleSegmentChange = (value) => {
    setActiveIndex(value);
  };

  const fullPageStyle = {
    height: 'auto',//100vh
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url('/myImages/main.png')`,
    backgroundSize: 'cover',
    justifyContent: 'flex-start',
    padding: '20px',
    position: 'relative',
  };

  const textContainerStyle = {
    width: '50%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const buttonRowStyle = {
    display: 'flex',
    // justifyContent: 'space-around',
    marginBottom: '20px',
  };

  const rightImageStyle = {
    width: '50%',
    height: '70%',
    // display: 'flex',
    justifyContent: 'center',
    textAlign: "left",
    padding: "20px",
    alignItems: 'center',
    backgroundColor: "white",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow to create the raised effect
    borderRadius: '8px', // Optional: rounds the corners for a smoother look
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const secondSectionStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: "white"
  };
  const thirdSectionStyle = {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: "white"
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  };

  const innerContainerStyle = {
    width: '49%',
    padding: '20px',
    // border: '1px solid #ddd',
    backgroundImage: "url(/myImages/img5.jpg)",
    backgroundSize: 'cover',  // Adjust this property
    backgroundPosition: 'center',
    border: "transparent",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: "flex",
    height: "300px"

  };
  const innerContainerStyle1 = {
    width: '49%',
    padding: '20px',
    // border: '1px solid #ddd',
    backgroundImage: "url(/myImages/img7.jpg)",
    backgroundSize: 'cover',  // Adjust this property
    backgroundPosition: 'center',
    border: "transparent",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: "flex",
    height: "350px"

  };

  const innerContainerStyle3 = {
    width: '100%',
    padding: '20px',
    // border: '1px solid #ddd',
    backgroundImage: "url(/myImages/img2.jpg)",
    backgroundSize: 'cover',  // Adjust this property
    backgroundPosition: 'center',
    border: "transparent",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: "flex",
    alignItems: "center",
    height: "500px"

  };
  const innerContainerStyle4 = {
    width: '100%',
    padding: '20px',
    // border: '1px solid #ddd',
    backgroundImage: "url(/myImages/img9.jpg)",
    backgroundSize: 'cover',  // Adjust this property
    backgroundPosition: 'center',
    border: "transparent",
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: "flex",
    height: "500px"

  };
  const dummyImageStyle = {
    width: '100%',
    height: '200px',
    backgroundImage: 'url(https://via.placeholder.com/300)',
    backgroundSize: 'cover',
    borderRadius: '5px',
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: "white" }}>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}></div>
        <div style={fullPageStyle} id={"home"}>
          <div style={navbarStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/myImages/logo_withoutbg.png" alt="Logo" style={{ height: '100px', width: 'auto' }} />
            </div>
            <Segmented
              value={activeIndex}
              options={menuItems}
              onChange={handleSegmentChange}
              style={{ alignContent: 'center' }}
              activestyle={{ backgroundColor: 'grey', color: 'white' }}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*"#ec5d14"    logo color*/}
              <Button style={{ marginRight: '10px', backgroundColor: "black", color: "white", borderColor: "transparent" }}>Contact US</Button>
              <Avatar icon={<UserOutlined />} />
            </div>
          </div>

          <div style={contentStyle}>
            <div style={textContainerStyle}>
              <div style={{ color: "white", fontSize: "80px", fontWeight: "", fontFamily: "Roboto", textAlign: "left" }}>Geometric <br />Wooden Cabin</div>
              <br />
              <br />
              <div style={buttonRowStyle}>
                <Button style={{ marginRight: '10px', backgroundColor: "blue", color: "white", borderColor: "transparent" }}>Book Now</Button>
                <Button style={{ marginRight: '10px', backgroundColor: "white", color: "black", borderColor: "transparent" }}>Explore More</Button>
              </div>
              <br />
              <br />
              <p style={{ color: "black", textAlign: "left", margin: 0, padding: 0, lineHeight: 1.5, width: "80%" }}>Virtual Reality (VR) in real estate refers to the use of immersive,
                computer-generated environments that simulate real-world spaces or create entirely new,
                virtual properties. VR technology allows potential buyers, investors, or tenants to explore properties in a highly interactive and realistic way, without being physically present. Through VR headsets or other devices, users can experience 360-degree views of homes, offices, or commercial spaces.</p>
            </div>
            {/* <div style={rightImageStyle}>
              <img
                src="/myImages/img4.jpg"
                alt="Background Image"
                style={{
                  marginRight: "20px", width: '200px', borderRadius: '5px', height: "250px",
                  // border: '4px solid #fff', // White border around the image
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow to create the raised effect
                  borderRadius: '8px', // Optional: rounds the corners for a smoother look
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              />
              <img src="/myImages/img6.jpg" alt="Right image" style={{ width: '200px', borderRadius: '5px', height: "250px" }} />
            </div> */}
          </div>
        </div>
        <div style={secondSectionStyle} id={"about"}>
          <div style={{ fontSize: "30px", color: "black", lineHeight: "1.5" }}><span>The Impact of Virtual Reality  </span> <span style={{ color: "grey" }}>on the Future of </span><br /><span style={{ color: "grey" }}>Real</span> Estate</div>
          <div style={containerStyle}>
            <div style={innerContainerStyle}>
              <div style={{ width: "70%" }}>
                {/* <div style={dummyImageStyle}></div> */}
                <h1 style={{ color: '#ec5d14', fontSize: "24px", textAlign: "left" }}>Experience Comfort </h1>
                <br />
                <p style={{ color: 'black', fontSize: "16px", width: "80%", textAlign: "left", lineHeight: "1.5" }}>And Convenience with Virtual Reality Property Tours</p>
              </div>
              <div style={{
                width: "30%", alignItems: "flex-end",
                display: "flex", flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div style={{
                  backgroundColor: "white",
                  width: "40px",
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow to create the raised effect
                  borderRadius: '8px', // Optional: rounds the corners for a smoother look
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}>
                  <CloudOutlined style={{ fontSize: '30px', color: 'black' }} />
                  <h3 style={{ fontSize: '20px', color: "grey" }}>24°</h3>
                </div>
                <Button
                  icon={<ScheduleOutlined style={{ fontSize: '20px' }} />}
                  size="small"
                  style={{ padding: "20px" }}
                >
                  Book Now
                </Button>
              </div>
            </div>
            <div style={innerContainerStyle1}>
              <div style={{ width: "70%" }}>
                {/* <div style={dummyImageStyle}></div> */}
                <h1 style={{ color: 'grey', fontSize: "24px", textAlign: "left" }}>Virtual Staging for Real Estate </h1>
                <br />
                <p style={{ color: '#ec5d14', fontSize: "16px", width: "80%", textAlign: "left", lineHeight: "1.5" }}>Imagine the potential
                  of a property with virtual staging. See how spaces can be transformed
                  before you even set foot inside, making decision-making faster and easier</p>
              </div>
              <div style={{
                width: "30%", alignItems: "flex-end",
                display: "flex", flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div style={{
                  backgroundColor: "white",
                  width: "40px",
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Shadow to create the raised effect
                  borderRadius: '8px', // Optional: rounds the corners for a smoother look
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}>
                  <CloudOutlined style={{ fontSize: '30px', color: 'black' }} />
                  <h3 style={{ fontSize: '20px', color: "grey" }}>24°</h3>
                </div>
                <Button
                  icon={<ScheduleOutlined style={{ fontSize: '20px' }} />}
                  size="small"
                  style={{ padding: "20px" }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div style={thirdSectionStyle} id={"service"}>
          <div style={{ fontSize: "30px", color: "black", lineHeight: "1.5" }}>Future-Proof Your Property Search</div>
          <br />
          <br />
          <div style={containerStyle}>
            <div style={innerContainerStyle3}>
              <div style={{ width: "50%", alignContent: "center" }}>
                {/* <div style={dummyImageStyle}></div> */}
                <h1 style={{ color: '#ec5d14', fontSize: "48px", textAlign: "left" }}>Greater Reach for Sellers </h1>
                <br />
              </div>
              <div style={rightImageStyle}>
                <h2 style={{ color: "#ec5d14" }}>Save Time with VR</h2>
                <p style={{ lineHeight: "1.5", color: "black" }}>"Say goodbye to wasted time traveling between properties.
                  Virtual reality (VR) technology revolutionizes the way you approach property
                  searching, enabling you to quickly and effectively narrow down your options
                  without leaving the comfort of your home. Gone are the days of driving long distances,
                  scheduling multiple in-person showings, or spending hours viewing properties that don’t meet
                  your criteria. With VR, you can take detailed, 360-degree virtual tours of homes, instantly visiting
                  multiple listings in a matter of minutes.

                  This time-saving tool allows you to focus on properties
                  that truly match your needs, whether you’re looking for
                  a specific layout, particular features, or a certain neighborhood."</p>
              </div>
            </div>
          </div>
        </div>
        <div style={thirdSectionStyle} id={"contact"}>
          <div style={{ fontSize: "30px", color: "black", lineHeight: "1.5" }}>Virtual Model Presentation</div>
          <br />
          <br />
          <div style={containerStyle}>
            <div style={innerContainerStyle4}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;