import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

import {SomeSpan} from './Components';
import {StackColor} from '../../styleHelpers/colors';
const Wrapper = styled.div`
    border: 10px solid ${StackColor.black};
`;

const SecondSpan = styled(SomeSpan)`
    border: 3px solid yellow;
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        backgroud: blue;
    `}
`;

export const Menu: FC = () => {
    return (
        <Wrapper>
            <SecondSpan>jakiś span</SecondSpan>
            <ExampleDiv isActive ={true}>jakiś div</ExampleDiv>
            <ExampleDiv isActive ={false}>jakiś div2</ExampleDiv>
            <Link to="posts">Posts</Link>
        </Wrapper>
    )
}
