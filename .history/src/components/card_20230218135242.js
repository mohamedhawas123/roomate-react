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

  const {flats} = useSelector(state => state.flats)
  const {loading} = useSelector(state => state.flats)


  useEffect( () => {

    dispatch(getFalts())


  }, [dispatch] )

  console.log(flats)

  return (

    <div>


    {loading ? (<h1>loading</h1>) :
    (
      <div className='m-2' >
  <MDBRow className='row-cols-1 row-cols-md-3 g-3'>

{flats && flats.map(flat => (
  <MDBCol>
   <MDBCard>
     <MDBCardImage
       src={`https://yourrommate.up.railway.app${flat.images[0]}`} height={300} width={500}
      
       position='top'
     />
     <MDBCardBody>
       <MDBCardTitle className='row h-100 justify-content-center align-items-center' >{flat.location}</MDBCardTitle>
       <MDBCardBody className='row h-100 justify-content-center align-items-center' >{flat.descr}</MDBCardBody>
                   <MDBCardTitle className='row h-100 justify-content-center align-items-center' >{flat.price} جنية </MDBCardTitle>
       
     </MDBCardBody>
   </MDBCard>
   
 </MDBCol>

))}
</MDBRow>

        </div>
    )


    }
      </div>

   
  );

}


