import * as React from "react";
import { FunctionComponent } from "react";
import { numberToColor } from "../../helpers/numberToColor";

type StarPropTypes = {
    stargazerCount?: number;
};

const Star: FunctionComponent<StarPropTypes> = props => {
    const { stargazerCount = 0 } = props;
    return (
        <svg width={11} height={10} {...props}>
            <path
                d="M6.003.573l.85 2.612h2.745c.802 0 1.136 1.028.487 1.5L7.863 6.3l.85 2.611c.247.764-.627 1.399-1.277.927L5.214 8.223 2.992 9.838c-.649.472-1.524-.163-1.275-.927L2.565 6.3.343 4.685c-.65-.472-.316-1.5.488-1.5h2.746l.85-2.612c.247-.764 1.328-.764 1.576 0"
                fill={numberToColor(stargazerCount)}
                fillRule="evenodd"
            />
        </svg>
    );
};

export default Star;
