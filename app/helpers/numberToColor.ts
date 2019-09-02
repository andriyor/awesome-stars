import { BLUE, ORANGE, RED, WHITE, YELLOW } from "../theme";

export const numberToColor = (
    number: number = 0,
    hasError: boolean = false
): string => {
    if (hasError) {
        return RED;
    }

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
