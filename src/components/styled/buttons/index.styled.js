import styled from 'styled-components';

import colors from "../variables/colors.styled";

const Button = styled.button`
  width: ${props => props.size || "300px"};
  height: 52px;
  border-radius: 10px;
  font-size: 1rem;
`;


Button.Primary = styled(Button)`
    background-color: ${colors.dark_blue};
    color: ${colors.white};
`;
export default Button;
