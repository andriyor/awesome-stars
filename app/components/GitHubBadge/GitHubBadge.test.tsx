import * as React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useAxiosRecordReplayAdapter from "axios-record-replay-adapter";
import GitHubBadge from "./GitHubBadge";

let restoreDefaultAdapter;

beforeAll(() => {
    restoreDefaultAdapter = useAxiosRecordReplayAdapter();
});

afterAll(() => {
    restoreDefaultAdapter();
});

test("GitHubBadge", async () => {
    const nameAndOwner = "henry40408/awesome-stars";
    const { getByTestId } = render(<GitHubBadge nameAndOwner={nameAndOwner}/>);
    await wait(() => getByTestId("badge-text"));
    expect(getByTestId("badge-text")).not.toHaveTextContent("error");
    expect(getByTestId("badge-text")).not.toHaveTextContent("61");
});
