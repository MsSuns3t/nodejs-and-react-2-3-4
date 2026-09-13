import React from "react";
import "./Card.css";

export default function Card({ image, title, description, onMoreInfo}) {
    return(
        <div className="card">
            <img src={image} alt={description} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <button className="card-button" onClick={onMoreInfo}>Meer info</button>
            </div>
        </div>
    );
}
