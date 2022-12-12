import { CardGrid, CardDiv } from "./styled";

interface IFcardView {
    id: string,
    display: "block" | "none" ;
    cards: Array<{}>
}

const cardView = (props: IFcardView) => {
    return (
        <CardGrid id={props.id} style={{display:props.display}}>
            {
                props.cards.map((value:any, index:any)=>{
                    console.log(value.imgLink)
                    return <CardDiv key={index} style={{backgroundImage:'url("'+ value.imgLink +'")'}}></CardDiv>
                })
            }
        </CardGrid>
    );
}

export default cardView;