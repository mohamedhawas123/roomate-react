import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
       <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp' height={300} width={500}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBCardTitle>Card title</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
   
      
       
     
    </MDBRow>
  );
}