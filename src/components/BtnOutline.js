import React from 'react';
import styled from 'styled-components';

export const BtnOutline = ({
  title,
  icon,
  borderColor,
  backgroundColor,
  color,
  onClick,
}) => {
  return (
    <Wrapper
      className='btn-animation-left btn '
      style={{
        border: `1px solid ${borderColor && borderColor}`,
        backgroundColor: `${backgroundColor ? backgroundColor : 'transparent'}`,
        color: `${color ? color : ''}`,
      }}
      onClick={onClick ? onClick : () => {}}
    >
      <span>{title}</span>
      {icon && (
        <div className='icon blinkUp'>
          <img className='img' src={icon} height={10} width={10} alt='arrow' />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  .icon {
    display: inline-block;
    margin-left: 1rem;
  }
`;
