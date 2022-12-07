import React, { useState } from "react";
import { Container, Form, LoginError } from "./styles";
import CustomInput from "../../Components/Input";
import CustomButton from "../../Components/Button";
import {validateInput} from "../../utils/validateLogin";
import UserServices from "../../Services/UserServices";
import {useNavigate} from "react-router-dom";

const userService = new UserServices();

const Login = () => {
    // State declarations
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormdata] = useState<any>([]);
    const [loginError, setLoginerror] = useState<boolean>(false);
    const navigate = useNavigate();

    const errorLoginMessage = () =>{
        const aux = document.getElementById("loginError");
        if (aux != null)
            aux.style.visibility = loginError ? "visible" : "hidden";
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
            //TODO: mostrar msg de erro de login
            alert("Deu erro nessa budega"+err);
        }
        
       
        //Error screen 
        /*
        
        */
    }

    // JSX 
    return (
        <Container>
            <Form>
                <h1>Let's make fabulous decks 🦄</h1>
                <CustomInput
                    Name="email"
                    Placeholder="User email"
                    Type="email"
                    onChange={handleChange}
                />

                <CustomInput
                    Name="pass"
                    Placeholder="User password"
                    Type="password"
                    onChange={handleChange}
                />

                <CustomButton
                    Type="submit"
                    Placeholder="Login"
                    onClick={handleSubmit}
                    disabled={loading || !validateInput(formData["email"], formData["pass"])}
                />
                <div>
                    <a>Sing Up now</a>
                </div>
            </Form>
            
            <LoginError id="loginError">
                <p>Counter tartget non-correct email or password, with a login is countered</p>
                <p>on this way the user may try again</p>
                <CustomButton
                    Type="button"
                    Placeholder="Try Again"
                    onClick={()=>{
                        setLoginerror(false);
                        errorLoginMessage();
                    }} 
                    disabled={false}
                />
            </LoginError>
        </Container>       
    );
}

export default Login;