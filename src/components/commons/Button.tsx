import { ButtonProps, ButtonSizeType, ButtonType } from '@/types/commonComponents';
import styled from 'styled-components';

const Button = ({ kind, disable, text, size, handler }: ButtonProps) => {
  //   console.log('Button is rendering!');
  return (
    <BtnContainer kind={kind} size={size} disabled={disable} onClick={handler}>
      {text}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<{ kind: ButtonType; size: ButtonSizeType }>`
  font-size: ${(props) => (props.size === 'big' ? '3rem' : '1.8rem')};
  font-weight: ${(props) => (props.size === 'big' ? '600' : '400')};
  padding: 1.2rem 6.4rem 1.2rem 6.4rem;
  border-radius: 3.3rem;
  border: 2px solid ${({ theme }) => theme.colors.Primary500};
  border: ${(props) => (props.kind === 'outline' ? `2px solid ${props.theme.colors.Primary500}` : 'none')};
  color: ${(props) => (props.kind === 'fill' ? 'white' : props.theme.colors.Primary500)};
  background-color: ${(props) => (props.kind === 'fill' ? props.theme.colors.Primary500 : 'transparent')};

  &:hover {
    background-color: ${(props) => (props.kind === 'fill' ? '#3748cb' : 'transparent')};
    color: ${(props) => (props.kind === 'fill' ? 'white' : '#3748cb')};
    border-color: #3748cb;
    transition: 0.7s;
  }

  &:disabled {
    background-color: ${(props) => (props.kind === 'fill' ? props.theme.colors.Black200 : 'transparent')};
    color: ${(props) => (props.kind === 'fill' ? 'white' : props.theme.colors.Black200)};
    border-color: ${({ theme }) => theme.colors.Black200};
  }
`;

export default Button;
