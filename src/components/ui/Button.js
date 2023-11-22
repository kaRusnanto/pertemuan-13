import styled from "styled-components";

const Button = styled.button`

    padding: 0.8rem 2rem;
    border: none;
    margin: 0.4rem;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function(props){
        if(props.variant === "primary"){
            return "linear-gradient(90deg, rgba(8,0,255,1) 0%, rgba(255,0,0,1) 100%)"
        }

        else if(props.variant === "secondary"){
            return "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(0,0,0,1) 50%, rgba(252,176,69,1) 100%)"
        }

        else {
            return "#6c6c6c838"
        }
    }};
`

export default Button;