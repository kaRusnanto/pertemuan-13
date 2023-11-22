import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
    const { children } = props
    return (
        <Containerstyle>
            <div className={"container"}>
                {children}
            </div>
        </Containerstyle>
    );
}

const Containerstyle = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
`
export default Container;