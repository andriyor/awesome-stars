import styled from "styled-components";
import { numberToColor } from "../../helpers/numberToColor";
import Star from "../Star";

interface StyledBadgePropTypes {
    hasError?: boolean;
    stargazersCount?: number;
}

export const StyledBadge = styled.span<StyledBadgePropTypes>`
    background-color: #3f3f3f;
    border-radius: 1rem;
    color: ${p => numberToColor(p.stargazersCount, p.hasError)};
    font-family: Roboto, sans-serif;
    padding: 0.3125rem .5625rem;
`;

export const StyledStar = styled(Star)`
    margin-right: .223125rem;
`;
