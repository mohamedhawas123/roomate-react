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
            <MDBCardTitle className='center >المعادي</MDBCardTitle>
            <MDBCardTitle>2000 جنية</MDBCardTitle>
                        <MDBCardTitle>بنات بس</MDBCardTitle>


            
            
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
   
      
       
     
    </MDBRow>
  );
}