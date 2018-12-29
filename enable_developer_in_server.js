function getModules() {
    return webpackJsonp.push([
        [], 
        { hax: (m, e, t) => m.exports = t.c },
        [['hax']]
    ]);
}
function forEachModule(cb) {
    const modules = getModules();
    for (const id in modules) {
        const m = modules[id];
        if (!m.exports) continue;
        if (cb(m.exports, id, m)) break;
    }
}
function enableDeveloper() {
    forEachModule((m) => {
        if (m.isDeveloper !== undefined) {
            Object.defineProperty(m, 'isDeveloper', {
                configurable: true,
                writable: true,
                value: 1
            });
            return true;
        }
    });
}
enableDeveloper();