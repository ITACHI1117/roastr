import { ROAST_COLLECTIONS } from "../roast/roast";
// Bonus: Function to get roast stats
export function getRoastStats() {
    return {
        rick: ROAST_COLLECTIONS.rick.length,
        morty: ROAST_COLLECTIONS.morty.length,
        default: ROAST_COLLECTIONS.default.length,
        total: Object.values(ROAST_COLLECTIONS).reduce((sum, arr) => sum + arr.length, 0),
    };
}
