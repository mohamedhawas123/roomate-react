import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' height={500} />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </MDBCardFooter>
      </MDBCard>

     
     
    </MDBCardGroup>
  );
}