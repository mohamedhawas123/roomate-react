import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {getFalts} from '../store/actions/flats'


export default function App() {


  const dispatch = useDispatch();

  const flats = useSelector(state => state.flats)

  useEffect( () => {

    dispatch(getFalts())


  }, [dispatch] )


  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-3'>
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