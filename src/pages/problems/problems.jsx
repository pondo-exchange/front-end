import { React, useState } from "react";

function Problems() {
    const [problems, setProblems] = useState([
        `Problem 1: Max Subarray
        Find the max sum subarray of an array of integers.`,
        `Problem 2: BST Depth
        Find the sum of depths for the optimal binary search tree of a given set of integers and their probabilities of being chosen.`
    ]);

    // console.log(problems);

    return (
        <div>
            {problems.map(
                (problem) => (<div>{problem}</div>)
            )}
        </div>
    )
}

export default Problems;