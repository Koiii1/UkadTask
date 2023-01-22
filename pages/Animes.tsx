import { Col, Row } from "react-bootstrap"
import { AnimeItem } from "../components/AnimeItem"
import animeItems from "../data/items.json"

export function Animes () {
    return (
        <>
         <h1>Animes</h1>
         <Row md={2} xs={1} lg={3} className="g-3" >
            {animeItems.map(item => (
                <Col key={item.id}><AnimeItem {...item}/></Col>
            ))}
            </Row>
        </>
    )
}