import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./card.css"

const PokeCard = ({ pokemon, loading }) => {
    return (
        <>
            {
                loading? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div id="PK-container" key={item.id}>
                                    <Card id="PK-card">
                                        <Card.Img id="PK-img" variant="top" src={item.sprites.front_default}/>
                                        <Card.Body id="PK-body">
                                            <Card.Title className="PK-title">
                                                {item.name}
                                            </Card.Title>
                                            <Card.Text>
                                                Pokemón N°{item.id}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    })
            }

        </>
    );
}
export default PokeCard;
