import { describe, expect, test } from 'vitest'
import { getNewBaterry } from '../src/app/api/updateData/getNewBattery';

describe('getNewBattery', () => {
    test('should reduce 2 porcent in the new battery status', () => {
        const baterry = 100;

        const newBaterry = getNewBaterry(baterry);

        expect(newBaterry).toEqual(98);
    });

    test('should reset battery', () => {
        const baterry = 0;

        const newBaterry = getNewBaterry(baterry);

        expect(newBaterry).toEqual(100);
    });
});

