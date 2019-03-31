import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Badge from "../app/components/Badge";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Badge", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const n = number("stargazer count", 9999);
        return <Badge stargazerCount={n} />;
    });
