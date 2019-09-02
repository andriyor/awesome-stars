import * as React from "react";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import * as lodash from "lodash";
import Badge from "../Badge";

interface GitHubBadgePropTypes {
    nameAndOwner: string;
}

const GitHubBadge: FunctionComponent<GitHubBadgePropTypes> = (props): ReactElement => {
    const { nameAndOwner } = props;

    const [owner, name] = nameAndOwner.split("/");
    if (!owner || !name) {
        return <Badge hasError/>;
    }

    const [totalCount, setTotalCount] = useState(0);
    const [hasError, setHasError] = useState(false);

    async function getStargazersCountAsync(): Promise<void> {
        setHasError(false);
        try {
            const res = await axios(`https://api.github.com/repos/${owner}/${name}`);
            const totalCount = lodash.get(res.data, "stargazers_count", 0);
            setTotalCount(totalCount);
        } catch (e) {
            console.error(e);
            setTotalCount(0);
            setHasError(true);
        }
    }

    useEffect(() => {
        getStargazersCountAsync();
    }, [nameAndOwner]);

    return <Badge hasError={hasError} stargazersCount={totalCount}/>;
};

export default GitHubBadge;
