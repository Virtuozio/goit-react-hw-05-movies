// import { useState } from 'react';
import { Wrapper, Input, Icon, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Icon />
      <Input type="text" value={value} onChange={onChange} />
      <Button type="submit" />
    </Wrapper>
  );
};
