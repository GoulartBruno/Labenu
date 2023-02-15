import React, { Fragment } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta ${name}`);
};

async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}


componentDidMount() {
  getPlanets().then((data) => {
    this.setState((state) => ({
      planets: data["planets"],
    }));
  });
}

const Planets = () =>{

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicaLast = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

    return (
      <Fragment>
        <h3>Planets List</h3>
        <button onClick={this.removeLast}>RemoveLast</button>
        <button onClick={this.duplicaLast}>duplicaLast</button>

        {this.state.planets.map((planet, index) => (
          <Planet
            id={planet.id}
            name={planet.name}
            description={planet.description}
            img_url={planet.img_url}
            link={planet.link}
            key={index}
          />
        ))}
      </Fragment>
    );
}

export default Planets;
