import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import { Welcome } from "@storybook/react/demo";
import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Badge from "../app/components/Badge";
import Star from "../app/components/Star";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Badge", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const stargazerCount = number("stargazer count", 9999);
        return <Badge stargazerCount={stargazerCount} />;
    });

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #222222;
    }
`;

storiesOf("Star", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const stargazerCount = number("stargazer count", 9999);
        return (
            <React.Fragment>
                <GlobalStyle />
                <Star stargazerCount={stargazerCount} />
            </React.Fragment>
        );
    });
