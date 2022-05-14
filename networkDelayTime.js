/**
 * **743. Network Delay Time**
 *
 * You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of
 * travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the
 * target node, and `wi` is the time it takes for a signal to travel from source to target.
 *
 * We will send a signal from a given node `k`. Return the time it takes for all the `n` nodes to receive
 * the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.
 *
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {
    // Initially we assume the time-taken to reach each node is a large value. Math.min() --> without any args will be large val (Infinity).
    let nodes = new Array(n).fill(Math.min());
    nodes
};

const times = [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
    ],
    n = 4,
    k = 2; // Output: 2;

console.log(networkDelayTime(times, n, k));
