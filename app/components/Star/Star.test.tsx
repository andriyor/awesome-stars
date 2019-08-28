import * as React from "react";
import Star from "./Star";
import { shallow } from "enzyme";

test("Star", () => {
    const badge = shallow(<Star/>);
    expect(badge).toMatchSnapshot();
});
