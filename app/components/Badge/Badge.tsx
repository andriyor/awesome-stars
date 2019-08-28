import * as React from "react";
import { FunctionComponent } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledBadge, StyledStar } from "./styled";

interface BadgePropTypes {
    stargazerCount?: number;
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
`;

const numberFormat = new Intl.NumberFormat("en-US");

const Badge: FunctionComponent<BadgePropTypes> = (props) => {
    const { stargazerCount = 0 } = props;
    return (
        <React.Fragment>
            <GlobalStyle/>
            <StyledBadge stargazerCount={stargazerCount}>
                <StyledStar stargazerCount={stargazerCount}/>
                <span>{numberFormat.format(stargazerCount)}</span>
            </StyledBadge>
        </React.Fragment>
    );
};

export default Badge;
