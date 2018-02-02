export function raf(callback) {
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(callback);
    });
}
