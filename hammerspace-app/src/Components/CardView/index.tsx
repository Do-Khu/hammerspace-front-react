import { CardGrid, CardDiv } from "./styled";

interface IFcardView {
    cards: Array<{}>
}

const cardView = (props: IFcardView) => {
    return (
        <CardGrid>
            {
                props.cards.map((value:any, index:any)=>{
                    return <CardDiv key={index} style={{backgroundImage:'url("'+ value.imgLink +'")'}}></CardDiv>
                })
            }
        </CardGrid>
    );
}

export default cardView;