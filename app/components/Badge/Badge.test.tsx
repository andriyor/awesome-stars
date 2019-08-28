import * as React from "react";
import Badge from "./Badge";
import { shallow } from "enzyme";

test("Badge", () => {
    const badge = shallow(<Badge/>);
    expect(badge).toMatchSnapshot();
});

test("Badge with stargazer count", () => {
    const badge = shallow(<Badge stargazerCount={100}/>);
    expect(badge).toMatchSnapshot();
});
