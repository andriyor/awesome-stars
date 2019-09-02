import * as React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GitHubBadge from "./GitHubBadge";

test("GitHubBadge", async () => {
    const nameAndOwner = "henry40408/awesome-stars";
    const { getByTestId } = render(<GitHubBadge nameAndOwner={nameAndOwner}/>);
    await wait(() => {
        expect(getByTestId("badge-text")).not.toHaveTextContent("error");
        expect(getByTestId("badge-text")).not.toHaveTextContent("61");
    });
});
