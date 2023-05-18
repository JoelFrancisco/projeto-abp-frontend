import { describe, expect, test } from 'vitest'
import { getNewRunningTimeSeconds } from '../src/app/api/updateData/getNewRunningTimeSeconds';

describe('getNewRunningTimeSeconds', () => {
    test('should add seconds to the running time', () => {
        const oldRunningTime = 0;

        const newRunningTime = getNewRunningTimeSeconds(oldRunningTime);

        expect(newRunningTime).toEqual(60);
    });

    test('should reset running time', () => {
        const oldRunningTime = 10000;

        const newRunningTime = getNewRunningTimeSeconds(oldRunningTime);

        expect(newRunningTime).toEqual(0);
    });
});

