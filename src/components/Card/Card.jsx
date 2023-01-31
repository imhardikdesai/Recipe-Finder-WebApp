import React from "react";
import "./Card.css";
// import recipe from "./../../Assets/recipe-image-temp.jpg";

const Card = (props) => {
  return (
    <>
      <div className="card-box">
        <img src={props.img} alt="food" />
        <div className="card-details my-2 ">
          <div className="card-title">{props.title}</div>
          <div className="card-by">by {props.by}</div>
        </div>
        <div className="card-btns">
          {props.readmore}
          <a target={"_blank"} rel="noreferrer" href={props.readmore}>
            <button className="mx-1 readmore card-btn">Read more</button>
          </a>
          <button className="mx-1 ingredients card-btn">Ingredients</button>
        </div>
      </div>
    </>
  );
};

export default Card;
