const { pow } = Math;

export const getTriplet = (m, n) => {
    const a = pow(m,2) - pow(n,2);
    const b = 2 * (m * n);
    const c = pow(m,2) + pow(n,2);
    return [a, b, c];
}

export default getTriplet;
