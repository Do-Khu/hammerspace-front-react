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
            const response = await userService.register(formData);
            alert("Wellcome "+formData.username+", now login and getr started");
            navigate("/");
            
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
                    Name="username"
                    Placeholder="User nickname"
                    Type="text"
                    onChange={handleChange}
                />

                <CustomInput
                    Name="fullName"
                    Placeholder="Your full name"
                    Type="text"
                    onChange={handleChange}
                />
                <CustomInput
                    Name="password"
                    Placeholder="User password"
                    Type="password"
                    onChange={handleChange}
                />
                <CustomButton
                    id=""
                    Type="submit"
                    Placeholder="Register"
                    onClick={handleSubmit}
                    disabled={false}
                />
            </Form>
        </Container>       
    );
}

export default Register;