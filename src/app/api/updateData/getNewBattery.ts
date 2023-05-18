export function getNewBaterry(baterry: number) {
    return baterry == 0 ? 100 : baterry - 2;
}