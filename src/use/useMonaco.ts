/**
 * https://github.com/vuejs/vitepress/issues/1508
 * https://github.com/vitejs/vite/discussions/1791#discussioncomment-321046
 * https://twitter.com/youyuxi/status/1355316139144970240?s=20
 */
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
// import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
// import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
// import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
    getWorker(_, label) {
        // if (label === "json") {
        //     return new jsonWorker();
        // }
        // if (label === "css" || label === "scss" || label === "less") {
        //     return new cssWorker();
        // }
        // if (label === "html" || label === "handlebars" || label === "razor") {
        //     return new htmlWorker();
        // }
        if (label === "typescript" || label === "javascript") {
            return new tsWorker();
        }
        return new editorWorker();
    },
};

export default function (container: HTMLElement) {

    return monaco.editor.create(container, {
        value: [
            "function x() {",
            '\tconsole.log("Hello world!");',
            "}; \nx();",
        ].join("\n"),
        language: "javascript",
        automaticLayout: true,
    });
}
