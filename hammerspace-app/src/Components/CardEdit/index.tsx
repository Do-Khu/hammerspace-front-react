import {CardGridEdit, CardDivEdit} from './styled';
import StorageServices from '../../Services/StorageServices';

interface IFcardEdit {
    cards: Array<{}>
}

const CardEdit = (props: IFcardEdit) => {
    const storageHandler = new StorageServices();
    return (
        <CardGridEdit>
            {
                props.cards.map((value:any, index:any)=>{
                    return (
                        <CardDivEdit key={index} style={{backgroundImage:'url("'+ value.imglink +'")'}}>
                            <div>
                                <button id="btn_add" onClick={
                                    () => {
                                        storageHandler.addCard({"cardId":value.id});
                                        alert("Card added to your library!!!");
                                    }
                                }></button>         
                                <button id="btn_del" onClick={
                                    () => {
                                        storageHandler.delCard(value.id);
                                        
                                        alert("Card removed from your library!!!");
                                    }
                                }></button>
                            </div>
                        </CardDivEdit>);
                })
            }
        </CardGridEdit>
    );
}

export default CardEdit;