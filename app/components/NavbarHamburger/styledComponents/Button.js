/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import CustomButton from 'components/Button/index';
import * as breakpoints from 'breakpoints';

const Button = styled(CustomButton)`
  display: none;
  margin-left: auto;
  border: 0;
  outline: 0;
  box-shadow: none;
  height: 100%;

  ::after {
    content: none;
  }

  .anticon {
    margin: 0;
    font-size: 18px;
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.xs}px) {
    & {
      display: block;
    }
  }
`;

export default Button;
