import React from 'react';
import styled from 'styled-components';

export default class Input extends React.Component {
    
    render() {
        const notAllowed=['className', 'children'];
        const props = Object.keys(this.props)
            .filter(key => !notAllowed.includes(key))
            .reduce((obj, key) => {
                return { ...obj, [key]: this.props[key] };
            }, {});

        return (
            <InputStyle className={this.props.className} {...props}>{this.props.children}</InputStyle>
        );
    }
}

const InputStyle = styled.input`
    height: 2.3rem;
    border: 0.1rem solid ${props => props.theme.black};
    background: ${props => props.theme.white};

    &:focus {
        border-color: ${props => props.theme.blue};
    }
`;