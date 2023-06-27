import init from "./pkg";

const runWasm = async () => {
    const rustWasm = await init();
    const sum = rustWasm.add(24, 10);
    document.body.textContent = `Hello World! addResult: ${sum}`;
};
runWasm();
