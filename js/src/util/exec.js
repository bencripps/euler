export const exec = cb => {
    const before = Date.now();
    console.log(cb());
    console.log(`Finished in ${Date.now() - before} milliseconds`);
};

export default exec;
