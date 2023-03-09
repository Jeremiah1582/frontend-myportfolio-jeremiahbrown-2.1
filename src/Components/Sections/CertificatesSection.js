import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import { certificates } from '../../Context/dataSets/certificates';

function CertificatesSection() {
  return (
    <div className='certificateSection  '>   
      {certificates.map(cert=>{
        return (
        <Figure >
          <Figure.Image
            className='certImg'
            alt={cert.name}
            src={cert.image}
          /> 
          </Figure>
        )
      })}</div>
   
    
  );
}

export default CertificatesSection;
