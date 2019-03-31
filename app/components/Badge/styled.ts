import { number } from "prop-types";
import styled from "styled-components";
import { numberToColor } from "../../helpers/numberToColor";

export const StyledBadge = styled.span`
    background-color: #3f3f3f;
    border-radius: 1rem;
    color: ${p => numberToColor(p.number)};
    font-family: Roboto, sans-serif;
    padding: 0.3125rem 0.4375rem;
`;

StyledBadge.propTypes = {
    number: number
};

StyledBadge.defaultProps = {
    number: 0
};
