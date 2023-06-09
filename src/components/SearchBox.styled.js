import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px 0 0 4px;
  font: inherit;
`;
export const Button = styled.button`
  padding: 26px 32px 8px 8px;
  border-radius: 0 4px 4px 0;
  border-left: none;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
