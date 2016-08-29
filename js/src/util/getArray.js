export const getArray = (size, start = 0) => {
    const arr = [];
    for (let i = start; i < size; i++) {
        arr.push(i);
    }
    return arr;
}

export default getArray;
