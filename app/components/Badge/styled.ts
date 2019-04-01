import { number } from "prop-types";
import styled from "styled-components";
import { numberToColor } from "../../helpers/numberToColor";
import Star from "../Star";

export const StyledBadge = styled.span`
    background-color: #3f3f3f;
    border-radius: 1rem;
    color: ${p => numberToColor(p.stargazerCount)};
    font-family: Roboto, sans-serif;
    padding: 0.3125rem .5625rem;
`;

StyledBadge.propTypes = {
    stargazerCount: number
};

StyledBadge.defaultProps = {
    stargazerCount: 0
};

export const StyledStar = styled(Star)`
    margin-right: .223125rem;
`;
