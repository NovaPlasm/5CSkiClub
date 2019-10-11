import React from 'react';
import styled, { css } from 'styled-components';

export default class Dropdown extends React.Component {
    
    state = {
        hover: false
    }

    render() {
        const notAllowed=['displayAsLink', 'className', 'children'];
        const props = Object.keys(this.props)
            .filter(key => !notAllowed.includes(key))
            .reduce((obj, key) => {
                return { ...obj, [key]: this.props[key] };
            }, {});

        if (!this.state.hover)
            return (
                <DropdownStyle
                    onMouseEnter={() => this.setState({hover: true})}
                    onMouseLeave={() => this.setState({hover: false})}
                    className={this.props.className}
                    {...props}
                >
                    {this.props.title}
                </DropdownStyle>
            );

        return (
            <DropdownSpan
                onMouseEnter={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})}
            >
                <DropdownStyle
                    className={this.props.className}
                    {...props}
                >
                    {this.props.title}
                </DropdownStyle>
                {this.props.children}
            </DropdownSpan>
        );
    }
}

function type(input) {
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

const DropdownSpan = styled.span`
    z-index: 1;
    position: absolute;
    right: 0;
    width: 22.5%;

    & > * {
        display: block;
        margin-top: 2rem;
    }
`;

const DropdownStyle = styled.p`
    font-size: 1.6rem;
    cursor: pointer;
    margin: 0;
    font-family: 'MS Shell Dlg 2';
    text-align: center;

    ${props => type(props.type)}
`;