import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CV from './Anton_Narodezki.pdf';
import anton2 from './anton2.svg';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const skillSlides = [
    {
      category: "Containerization and Orchestration",
      skills: [
        { name: "Kubernetes", level: 100 },
        { name: "Tanzu", level: 85 },
        { name: "Docker", level: 100 }
      ]
    },
    {
      category: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 85 },
        { name: "Ansible", level: 100 },
        { name: "Puppet", level: 80 }
      ]
    },
    {
      category: "CI/CD Tools",
      skills: [
        { name: "Jenkins", level: 100 },
        { name: "ArgoCD", level: 85 },
        { name: "Azure DevOps", level: 100 },
        { name: "GitHub Actions", level: 100 },
        { name: "GitLab CI/CD", level: 100 }
      ]
    }
  ];

  const slideStyle = {
    padding: '10px'
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={anton2}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">DevOps engineer</p>
                <p className="text-muted mb-4">Center, Israel</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={() => window.open('https://wa.me/+972532779634', '_blank')}>Message me</MDBBtn>
                  <MDBBtn onClick={() => window.open(CV, '_blank')} outline className="ms-1">My CV</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBCardText>Anton Narodezki</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Gmail" style={{ width: '20px', height: '20px' }} />
                    <MDBCardText>imanton2@gmail.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github" style={{ color: '#333333' }} />
                    <MDBCardText>github.com/IMAnton2</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="linkedin" style={{ color: '#3b5998' }} />
                    <MDBCardText>linkedin.com/in/anton-narodezki</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <Slide slidesToShow={2}>
              {skillSlides.map((slide, index) => (
                <div className="each-slide" key={index} style={slideStyle}>
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">{slide.category}</span></MDBCardText>
                      {slide.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>{skill.name}</MDBCardText>
                          <MDBProgress className="rounded">
                            <MDBProgressBar width={skill.level} valuemin={0} valuemax={100} />
                          </MDBProgress>
                        </div>
                      ))}
                    </MDBCardBody>
                  </MDBCard>
                </div>
              ))}
            </Slide>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
