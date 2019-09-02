import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Star from "./Star";

test("0 stars", () => {
    const { getByTestId } = render(<Star/>);
    expect(getByTestId("star")).toHaveAttribute("fill", "#C4F7FF");
});

test("9,999 stars", () => {
    const { getByTestId } = render(<Star stargazersCount={9999}/>);
    expect(getByTestId("star")).toHaveAttribute("fill", "#F9EF14");
});
