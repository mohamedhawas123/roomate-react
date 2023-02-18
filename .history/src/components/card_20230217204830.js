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
    <MDBRow className=''>
       <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://yourrommate.up.railway.app/media/images/scaled_image_picker7358499540275589968.jpg' height={300} width={500}
           
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className='row h-100 justify-content-center align-items-center' >المعادي</MDBCardTitle>
            <MDBCardTitle className='row h-100 justify-content-center align-items-center' >2000 جنية</MDBCardTitle>
                        <MDBCardTitle className='row h-100 justify-content-center align-items-center' >بنات بس</MDBCardTitle>


            
            
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>
   
      
       
     
    </MDBRow>
  );
}