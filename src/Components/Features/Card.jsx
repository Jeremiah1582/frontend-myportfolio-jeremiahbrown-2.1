import Styles from "../../styling/App.scss";
import React, { useContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "react-bootstrap";
import { MyContext } from "../../Context/ContextApi";

function Card({ imagen, ...props }) {
  const [show, setShown] = useState(false);

  
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
    >
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
