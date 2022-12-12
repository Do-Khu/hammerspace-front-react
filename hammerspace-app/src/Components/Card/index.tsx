import { CardDiv } from './styles';

interface IFcard {
    img_path: string
}

const mtgCard = (props: IFcard) => {
    return (
        <CardDiv style={{backgroundImage:'url("'+props.img_path+'");'}}>
        </CardDiv>
    );
}

export default mtgCard;