import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./card.css"

const PokeCard = ({ pokemon }) => {
  useEffect(() => {
  }, [pokemon])

  return (
    <div fluid>
      <Col className="py-3">
        <div id="PK-container" key={pokemon.id}>
          <Card id="PK-card">
            <Card.Img id="PK-img" variant="top" src={pokemon.sprites.front_default} />
            <Card.Body id="PK-body">
              <Card.Title className="PK-title">
                {pokemon.name}
              </Card.Title>
              <Card.Text>
                Pokemón N°{pokemon.id}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </div>
  );
}
export default PokeCard;
