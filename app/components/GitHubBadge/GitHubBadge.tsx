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

    let mounted = true;

    async function getStargazersCountAsync(): Promise<void> {
        setHasError(false);
        try {
            const url = `https://api.github.com/repos/${owner}/${name}`;
            const res = await axios(url);
            const totalCount = lodash.get(res.data, "stargazers_count", 0);
            if (mounted) {
                setTotalCount(totalCount);
            }
        } catch (e) {
            console.error(e);
            if (mounted) {
                setTotalCount(0);
                setHasError(true);
            }
        }
    }

    useEffect(() => {
        getStargazersCountAsync();
        return () => {
            mounted = false;
        };
    }, [nameAndOwner]);

    return <Badge hasError={hasError} stargazersCount={totalCount}/>;
};

export default GitHubBadge;
