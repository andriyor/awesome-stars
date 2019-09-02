import { number, text, withKnobs } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import { Welcome } from "@storybook/react/demo";
import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Badge from "../app/components/Badge";
import Star from "../app/components/Star";
import GitHubBadge from "../app/components/GitHubBadge/GitHubBadge";

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #222222;
    }
`;

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Badge", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const stargazersCount = number("stargazers count", 9999);
        return <Badge stargazersCount={stargazersCount} />;
    });

storiesOf("Star", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        const stargazersCount = number("stargazer count", 9999);
        return (
            <React.Fragment>
                <GlobalStyle />
                <Star stargazersCount={stargazersCount} />
            </React.Fragment>
        );
    });

storiesOf("GitHubBadge")
    .addDecorator(withKnobs)
    .add("default", () => {
        const nameAndOwner = text("name and owner", "henry40408/awesome-stars");
        return <GitHubBadge nameAndOwner={nameAndOwner} />;
    });
