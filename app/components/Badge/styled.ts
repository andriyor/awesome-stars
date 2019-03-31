import { number } from "prop-types";
import styled from "styled-components";
import { BLUE, ORANGE, WHITE, YELLOW } from "../../scripts/theme";

const numberToColor = number => {
    switch (true) {
        case number >= 10000:
            return ORANGE;
        case 5000 <= number && number < 10000:
            return YELLOW;
        case 1000 <= number && number < 5000:
            return WHITE;
        default:
            return BLUE;
    }
};

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
