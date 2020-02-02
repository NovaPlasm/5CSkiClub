import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
    
    render() {
        const notAllowed=['displayAsLink', 'className', 'children', 'to'];
        const props = Object.keys(this.props)
            .filter(key => !notAllowed.includes(key))
            .reduce((obj, key) => {
                return { ...obj, [key]: this.props[key] };
            }, {});

        if (this.props.to) {
            return (
                <Link to={this.props.to}>
                    <ButtonStyle className={this.props.className} {...props}>{this.props.children}</ButtonStyle>
                </Link>
            );
        }
        return (
            <ButtonStyle className={this.props.className} {...props}>{this.props.children}</ButtonStyle>
        );
    }
}

function type(input) {
    if (!input || input === 'default') {
        return css`
            padding: 0.5rem 1rem;
            border: 0.1rem solid ${props => props.theme.primary};
            border-radius: 100rem;
            background-color: ${props => props.theme.primary};

            &:hover {
                background-color: ${props => props.theme.primary};
            }
        `;
    } else if (input === 'nav') {
        return css`
            background-color: rgba(0, 0, 0, 0);
            border: none;
            padding-bottom: 1rem;
            border-bottom: 0.2rem solid ${props => props.theme.secondary};
            transition: border-bottom 0.4s ease;
            width: 100%;

            &:hover {
                border-bottom: 0.2rem solid ${props => props.theme.primary};
            }
        `;
    }
}

const ButtonStyle = styled.button`
    font-size: 1.6rem;
    cursor: pointer;

    ${props => type(props.type)}
`;