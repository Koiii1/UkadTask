import { Card } from "react-bootstrap"
// import { formatCurency } from "../utilities/formatCurency"
export type AnimeItemProps = {
    id: number,
    name: string,
    discription: string,
    imgUrl: string
}

export function AnimeItem ({id, name, discription, imgUrl}: AnimeItemProps ) {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"} } /> 
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between aling-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{discription}</span>
                </Card.Title>
            </Card.Body>
        </Card>
        
    )
}