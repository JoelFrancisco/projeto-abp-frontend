export function getNewRunningTimeSeconds(runningTimeSeconds: number) {
    return runningTimeSeconds == 10000 ? 0 : runningTimeSeconds + 60;
}