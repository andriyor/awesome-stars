import * as React from "react";
import { FunctionComponent, ReactElement } from "react";
import { createGlobalStyle } from "styled-components";
import { StyledBadge, StyledStar } from "./styled";

interface BadgePropTypes {
    hasError?: boolean;
    stargazersCount?: number;
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
`;

const numberFormat = new Intl.NumberFormat("en-US");

const Badge: FunctionComponent<BadgePropTypes> = (props): ReactElement => {
    const { hasError = false, stargazersCount = 0 } = props;
    const content = hasError ? "error" : numberFormat.format(stargazersCount);
    return (
        <React.Fragment>
            <GlobalStyle/>
            <StyledBadge hasError={hasError} stargazersCount={stargazersCount}>
                <StyledStar stargazersCount={stargazersCount}/>
                <span data-testid="badge-text">{content}</span>
            </StyledBadge>
        </React.Fragment>
    );
};

export default Badge;
