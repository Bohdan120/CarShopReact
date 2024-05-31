import React from 'react';
import { Carousel, Typography, Row, Col, Card, Avatar, Divider, Rate } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../styles/home.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

// ServiceItem functional component
const ServiceItem = ({ icon, title, text }) => (
  <div className="service-item">
    <div className="service-icon">{icon}</div>
    <Title level={4} className="service-title">{title}</Title>
    <Paragraph className="service-text">{text}</Paragraph>
  </div>
);

const Home = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="carousel-container">
            <Carousel autoplay>
              <div className="carousel-slide">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Car 1" />
                <div className="carousel-text">
                  <Title level={3} style={{ color: 'white', fontSize: '200px' }}>Car Shop</Title>
                </div>
              </div>
              <div className="carousel-slide">
                <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Car 2" />
                <div className="carousel-text">
                  <Title level={3} style={{ color: 'white', fontSize: '200px' }}>Car Shop</Title>
                </div>
              </div>
              <div className="carousel-slide">
                <img src="https://images.unsplash.com/photo-1689034915352-f33897491a81?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Car 3" />
                <div className="carousel-text">
                  <Title level={3} style={{ color: 'white', fontSize: '200px' }}>Car Shop</Title>
                </div>
              </div>
              <div className="carousel-slide">
                <img src="https://images.unsplash.com/photo-1699077922908-b40d91eac7c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Car 4" />
                <div className="carousel-text">
                  <Title level={3} style={{ color: 'white', fontSize: '200px' }}>Car Shop</Title>
                </div>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row className="section">
        <Col span={24}>
          <Title level={3} className="section-title">About CarShop</Title>
          <Paragraph>
            CarShop is your trusted partner in finding the perfect car. With a wide range of vehicles from various brands, we aim to provide you with the best options that suit your needs and budget. Our team of experts is dedicated to helping you make an informed decision and ensuring a seamless buying experience.
          </Paragraph>
          <Paragraph>
            Established in 2020, CarShop has quickly become a leading name in the car sales industry. We pride ourselves on our customer service and the quality of our cars. Whether you are looking for a brand-new model or a pre-owned vehicle, CarHub has something for everyone.
          </Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row className="section">
        <Col span={24}>
          <Title level={3} className="section-title">Our Services</Title>
          <Row gutter={[16, 16]}>
            <Col span={12} md={8}>
              <ServiceItem
                icon={<EnvironmentOutlined />}
                title="Vehicle Sales"
                text="A wide range of new and pre-owned vehicles."
              />
            </Col>
            <Col span={12} md={8}>
              <ServiceItem
                icon={<MailOutlined />}
                title="Financing Options"
                text="Flexible financing solutions to fit your budget."
              />
            </Col>
            <Col span={12} md={8}>
              <ServiceItem
                icon={<PhoneOutlined />}
                title="Vehicle Servicing"
                text="Comprehensive maintenance and repair services."
              />
            </Col>
            <Col span={12} md={8}>
              <ServiceItem
                icon={<EnvironmentOutlined />}
                title="Warranty"
                text="Various warranty options for your peace of mind."
              />
            </Col>
            <Col span={12} md={8}>
              <ServiceItem
                icon={<MailOutlined />}
                title="Trade-In"
                text="Fair valuation for your trade-in vehicles."
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="section customer-reviews">
        <Col span={24}>
          <Title level={3} className="section-title">Customer Reviews</Title>
        </Col>
        <Col span={8}>
          <Card>
            <Meta
              avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png" />}
              title="Jack Smith"
              description={
                <>
                  Excellent service! Found the perfect car at CarShop. Will definitely recommend to friends.
                  <div>
                    <Rate disabled defaultValue={5} />
                  </div>
                </>
              }
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Meta
              avatar={<Avatar src="https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png" />}
              title="Jane Williams"
              description={
                <>
                  Wonderful experience with CarShop! Great selection and helpful staff.
                  <div>
                    <Rate disabled defaultValue={5} />
                  </div>
                </>
              }
            />
          </Card>
        </Col>
        {/* Added another review */}
        <Col span={8}>
          <Card>
            <Meta
              avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIn-gE6j6sjvg0ekFgFBIzVP5VdN3aBu9dLg&s" />}
              title="Alex Johnson"
              description={
                <>
                  Couldn't be happier with my purchase from CarShop. Thank you for the great service!
                  <div>
                    <Rate disabled defaultValue={5} />
                  </div>
                </>
              }
            />
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row className="section contact-info">
        <Col span={24}>
          <Title className="section-title" style={{color:"white", fontSize:"56px"}}>Contact Us</Title>
          <div className="contact-block">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <div className="contact-item">
                  <EnvironmentOutlined  style={{ fontSize: '48px', color: '#F4801A',}}/>
                  <Paragraph className="contact-text">CarShop, Lviv, Ukraine</Paragraph>
                </div>
              </Col>
              <Col span={8}>
                <div className="contact-item">
                  <PhoneOutlined style={{ fontSize: '48px', color: '#F4801A' }} />
                  <Paragraph className="contact-text">(380) 456-7890</Paragraph>
                </div>
              </Col>
              <Col span={8}>
                <div className="contact-item">
                  <MailOutlined style={{ fontSize: '48px', color: '#F4801A' }} />
                  <Paragraph className="contact-text">info@carshop.com</Paragraph>
                </div>
              </Col>
            </Row>          
          </div>
        </Col>
      </Row>    
      <Row>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41188.10454459052!2d23.982339269531217!3d49.818843489612235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1714495027185!5m2!1suk!2sua" frameborder="0" style={{border:0, width:"100%", height:"300px"}} allowfullscreen></iframe>

      </Row>  
    </>
  );
};

export default Home;
