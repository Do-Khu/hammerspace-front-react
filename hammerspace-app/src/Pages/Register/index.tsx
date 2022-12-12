import React, { useState } from "react";
import { Container, Form } from "./styles";
import CustomInput from "../../Components/Input";
import CustomButton from "../../Components/Button";
import UserServices from "../../Services/UserServices";
import {useNavigate} from "react-router-dom";

const userService = new UserServices();

const Register  = () => {
    // State declarations
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormdata] = useState<any>([]);
    const navigate = useNavigate();


    // Handler Functions
    const handleChange = (event: {
        target: {
            name: string,
            value:string
        }
    }) => {
        setFormdata({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            setLoading(true); //lock the button, to prevent multiples logins requests.
            const response = await userService.login(formData);
            if (response === true){
                navigate("/");
            }
            setLoading(false); // realise the button.
        }catch(err){
            // TODO: validate pass and name
        }
    }
    // JSX 
    return (
        <Container>
            <Form>
                <h1>Let's make fabulous decks 🦄</h1>
                <CustomInput
                    Name="name"
                    Placeholder="User name"
                    Type="text"
                    onChange={handleChange}
                />

                <CustomInput
                    Name="name_chk"
                    Placeholder="Name check"
                    Type="text"
                    onChange={handleChange}
                />
                <CustomInput
                    Name="pass"
                    Placeholder="User password"
                    Type="password"
                    onChange={handleChange}
                />
                <CustomInput
                    Name="pass_chk"
                    Placeholder="Password check"
                    Type="password"
                    onChange={handleChange}
                />
                <CustomButton
                    id=""
                    Type="submit"
                    Placeholder="Register"
                    onClick={handleSubmit}
                    disabled={loading /*|| !VALIDATE PASS AND USER */}
                />
            </Form>
        </Container>       
    );
}

export default Register;