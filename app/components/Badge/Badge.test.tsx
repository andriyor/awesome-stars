import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Badge from "./Badge";

test("Badge", () => {
    const { getByTestId } = render(<Badge/>);
    expect(getByTestId("badge-text")).toHaveTextContent("0");
});

test("Badge with stargazers count", () => {
    const { getByTestId } = render(<Badge stargazersCount={100}/>);
    expect(getByTestId("badge-text")).toHaveTextContent("100");
});

test("Badge with error", () => {
    const { getByTestId } = render(<Badge hasError/>);
    expect(getByTestId("badge-text")).toHaveTextContent("error");
});
