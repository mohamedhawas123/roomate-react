import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Card() {
  return (
    <>
      <MDBCard className='mb-3'>
        <MDBCardImage position='top' src='https://mdbootstrap.com/img/new/slides/041.webp' height={150} width={150}  />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      
    </>
  );
}