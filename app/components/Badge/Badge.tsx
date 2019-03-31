import * as React from "react";
import { FunctionComponent } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledBadge } from "./styled";

type BadgePropTypes = { stargazerCount?: number };

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
`;

const numberFormat = new Intl.NumberFormat("en-US");

const Badge: FunctionComponent<BadgePropTypes> = ({ stargazerCount = 0 }) => (
    <React.Fragment>
        <GlobalStyle />
        <StyledBadge number={stargazerCount}>{numberFormat.format(stargazerCount)}</StyledBadge>
    </React.Fragment>
);

export default Badge;
