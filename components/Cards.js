import React from "react"

export default function Cards(props) {
    return (
        <div className="card-container">
            <img src={`../images/${props.card.image}`} className="card-images" />
            <div className="info-container">
                <span className="country-link">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                        <p className="state-text">{props.card.location}</p>
                        <a href={`${props.card.googleMapsUrl}`} className="link-text">View on Google Maps</a>
                </span>
                      <h1 className="title-text">{props.card.title}</h1>
                      <p className="date-text">{props.card.startDate} - {props.card.endDate}</p>
                      <p className="desc-text">{props.card.description}</p>          
            </div>
        </div>
    )
}