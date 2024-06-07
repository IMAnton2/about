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
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <svg style={{ width: '20px', height: '20px', fill: '#0088cc' }} viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                    </svg>
                    <MDBCardText>@imanton2</MDBCardText>
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
