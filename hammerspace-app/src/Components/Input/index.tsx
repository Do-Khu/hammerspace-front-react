import React from "react";
import { Input } from './styles';

interface IFCustomInput {
    Type: "text" | "password" | undefined,
    Name: string,
    Placeholder: string,
    onChange: any
}

const CustomInput = (props: IFCustomInput) => {
    return (
        <Input
            name={props.Name}
            placeholder={props.Placeholder}
            onChange={props.onChange}
            type={props.Type}
        />
    );
}

export default CustomInput;