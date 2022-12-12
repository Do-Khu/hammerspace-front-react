import React, { useState } from "react";
import { Container, Form, LoginError } from "./styles";
import CustomInput from "../../Components/Input";
import CustomButton from "../../Components/Button";
import {validateInput} from "../../utils/validateLogin";
import UserServices from "../../Services/UserServices";
import {useNavigate, NavLink} from "react-router-dom";

const userService = new UserServices();

const Login = () => {
    // State declarations
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormdata] = useState<any>([]);
    const navigate = useNavigate();

    const errorLoginMessage = (loginError: boolean) =>{
        const aux = document.getElementById("loginError");
        if (aux != null){
            aux.style.visibility = loginError ? "visible" : "hidden";
        }
    }

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
                navigate("/home");
            }
            setLoading(false); // realise the button.
        }catch(err){
            errorLoginMessage(true);
            setLoading(false); // realise the button.
        }
    }
    // JSX 
    return (
        <Container>
            <Form>
                <h1>Let's make fabulous decks 🦄</h1>
                <CustomInput
                    Name="username"
                    Placeholder="User name"
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
                    Placeholder="Login"
                    onClick={handleSubmit}
                    disabled={loading || !validateInput(formData["password"])}
                />
                <div>
                    <NavLink to="Register">Sing Up now</NavLink>
                </div>
            </Form>
            
            <LoginError id="loginError">
                <p>Counter tartget non-correct name or password, with a login is countered</p>
                <br/>
                <p>on this way the user may try again</p>
                <CustomButton
                    id=""
                    Type="button"
                    Placeholder="Resolve Spell"
                    onClick={()=>{
                        errorLoginMessage(false);
                    }} 
                    disabled={false}
                />
            </LoginError>
        </Container>       
    );
}

export default Login;