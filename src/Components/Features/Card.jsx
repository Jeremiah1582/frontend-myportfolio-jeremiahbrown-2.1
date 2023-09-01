import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "react-bootstrap/Button";
import { MyContext } from "../../Context/ContextApi";
import Image from "react-bootstrap/Image";
import {codingLanguages} from '../../Context/dataSets/codeStackDataset'
import CodeStackCard from '../Features/CodeStackCard'

import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {


let relevantStack;

if (props.data.techStack){
  relevantStack =  codingLanguages.filter((item)=> props.data.techStack.some(tech=>item.name.toLowerCase()=== tech.toLowerCase()))

} 
 

 
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cardModal"
      
    >
      <div className="modalContent">

        <Modal.Header>
        <Image 
        src={props.image} 
        alt={props.data.name} 
        className="modalImage"
        />
      

        <Modal.Title id="contained-modal-title-vcenter">

        </Modal.Title>
      </Modal.Header>
      <Modal.Body  style={{textAlign: 'center',}}>
        <h4> {props.data.name}</h4>
        {relevantStack && ( <p>Project built using...</p> )}
       
        {relevantStack?(
        <span className='modalCodeStackCard'>
        {/* map the techStack Items that match the match the codeStackSection and display them in the modal */}
        {relevantStack.map((item, indx)=>{return (
          <CodeStackCard key={indx} item={item} indx={indx}/>
        )})

        }
        </span>
      ):null}
     
      </Modal.Body>
      <Modal.Footer>
      <p style={{fontFamily: 'satoshi', fontSize:'1.65rem'}}>{props.data.description}</p>
      </Modal.Footer>

      </div>
  
    </Modal>
    </div>
  );
}

function Card({ imagen, ...props }) {
  const [show, setShown] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleModal = (data) => {
    setModalShow(!modalShow);
  };

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="carouselCard"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={handleModal}
    >
      <MyVerticallyCenteredModal show={modalShow} data={props} image={imagen} />

      <img src={imagen} alt={props.name} />

      <h4>{props.name}</h4>
      <p>{props.description.slice(0, 90) + "..."}</p>
      <div>
        {props.link !== null ? (
          <Button className="myBttn" target="__blank" href={props.link}>
            {props.callToAction}
          </Button>
        ) : null}
        {props.callToAction2 ? (
          <Button
            variant="warning"
            className="myBttn"
            target="__blank"
            href={props.liveLink}
          >
            {props.callToAction2}
          </Button>
        ) : null}
      </div>
    </animated.div>
  );
}

export default Card;
