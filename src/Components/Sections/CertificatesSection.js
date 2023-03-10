import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import { certificates } from '../../Context/dataSets/certificates';

function CertificatesSection() {
  const handleVerification=(link)=>{
    console.log('clicked');
    window.location.href=link
  }
  return (
    <div className='certificateSection  '>   
      {certificates.map(cert=>{
        return (
        <Figure className='certificate'>
         
          <Figure.Image
            className='certImg'
            alt={cert.name}
            src={cert.image}
            onClick={cert.verificationLink? ()=>handleVerification(cert.verificationLink):null}
        
          /> 
          </Figure>
        
        )
      })}</div>
   
    
  );
}

export default CertificatesSection;
