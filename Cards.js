import React from "react"

export default function Cards (props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.image}`} className="card--img"/>
            <div>
                <div className="card--stats">
                    <img src="./images/Fill222.png" className="card--point" />
                    <span>{props.item.location}</span>
                    <span className="gray"><a href={props.item.googleMapsUrl}target="_blank">View on Google Maps</a></span>
                </div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.startDate} - {props.item.endDate}</h3>
            <p>{props.item.description}</p>
            </div>    
        </div>
    )
}