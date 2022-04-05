import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../../assets/Logo/Logo.svg"
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function SignUpSubmit () {
        if (username === "admin" && password === "admin" && password === confirm) navigate("/main")
        else alert("Siz kiritgan ma' lumotda Xatolik bor");
    }
    return (
        <Wrapper>
            <Header />
            <div className='signUp-container'>
                <div className="signUp-container__back" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faAngleLeft} className="icon" />
                </div>
                <div className="signUp-container__input">
                    <img src={Logo} alt="" />
                    <input type={"text"} placeholder="Username" onChange={({target}) => setUsername(target.value)}/>
                    <input type={"password"} placeholder="Password" onChange={({target}) => setPassword(target.value)}/>
                    <input type={"password"} placeholder="Coniform" onChange={({target}) => setConfirm(target.value)}/>
                    <p className="forgotPassword">Forgot password?</p>
                    <button onClick={SignUpSubmit}>Sign Up</button>
                    <p className="accountSignup">Don’t have an account? <span onClick={() => navigate("/account/login")}>Login</span></p>
                </div>

                <div className="signUp-container-signUp__footer">
                    <p>Instagram от Facebook</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default SignUp;

const Wrapper = styled.div`
    .signUp-container {
        padding: 12px 16px 0 16px;
        * {
            display: block;
        }
    }

    .signUp-container__back .icon {
        font-size: 20px;
    }

    .signUp-container__input {
        text-align: center;
        margin: 94px auto;
    }

    .signUp-container__input img {
        margin: 0 auto 39px auto;
    }

    .signUp-container__input input {
        padding: 13.5px 15px;
        margin-bottom: 12px;
        width: 100%;
        height: 44px;
        background: #FAFAFA;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 5px;
        outline: none;
    }

    .signUp-container__input input::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: rgba(0, 0, 0, 0.2);
    }

    .signUp-container__input .forgotPassword {
        margin-top: 19px;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.15px;
        color: #3797EF;
    }

    .signUp-container__input button {
        margin: 30px auto 37px auto;
        width: 100%;
        height: 44px;
        border: none;
        background: #3797EF;
        border-radius: 5px;
        opacity: 0.7;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.15px;
        color: #fff;
        cursor: pointer;
    }

    .signUp-container__input .accountSignup {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: 100%;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.15px;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    .signUp-container__input .accountSignup span {
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        text-align: right;
        letter-spacing: 0.15px;
        color: #3797EF;
        cursor: pointer;
    }

    .signUp-container-signUp__footer {
        padding: 32.5px 0;
        width: 100%;
        height: 79px;
        border-top: 1px solid rgba(0, 0, 0, 0.4);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
    }

    .signUp-container-signUp__footer p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
`