import React, { useState, useEffect } from "react";
import "./TinderCards.css"
import TinderCard from 'react-tinder-card';
import axios from "./axios"

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const resp = await fetch("http://localhost:3000/tinder/cards");
        const data = await resp.json();
        setPeople(data)
      }
      fetchData();
    }, [])
    console.log(people)

    const swiped = (direction, nameToDelete) => {
        console.log("Removing " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the Screen");
    }

    return (
      <div className="tinderCards">
        <div className="tinderCards_cardContainer">
          {people.map((person) => {
            return (
              <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  style={{ backgroundImage: `url(${person.imgUrl})` }}
                  className="card"
                >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            );
          })}
        </div>
      </div>
    );
}

export default TinderCards
