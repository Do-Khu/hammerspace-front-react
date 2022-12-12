import React from "react";
import { Button } from './styles';

interface IFCustomButton {
    Type: "submit" | "button" | "reset" | undefined,
    Placeholder: string | null,
    onClick: any | null,
    disabled: boolean,
    id: string | undefined
}

const CustomButton = (props: IFCustomButton) => {
    if (props.id === undefined) {
        return (
        <Button id={props.id} type={props.Type} onClick={props.onClick} disabled={props.disabled}>
            {props.Placeholder}
        </Button>
        );
    }else{
        return (
        <Button id={props.id} type={props.Type} onClick={props.onClick} disabled={props.disabled}>
            {props.Placeholder}
        </Button>
        );
    }
}

export default CustomButton;