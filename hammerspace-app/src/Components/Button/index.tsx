import React from "react";
import { Button } from './styles';

interface IFCustomButton {
    Type: "submit" | "button" | "reset" | undefined,
    Placeholder: string,
    onClick: any,
    disabled: boolean
}

const CustomButton = (props: IFCustomButton) => {
    return (
        <Button type={props.Type} onClick={props.onClick} disabled={props.disabled}>
            {props.Placeholder}
        </Button>
    );
}

export default CustomButton;