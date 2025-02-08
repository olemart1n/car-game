import createTextMesh from "./create-text-mesh";
const threeJs = createTextMesh("three.js", 50, 20, 40);
const javaScript = createTextMesh("JavaScript", 60, 40, 40);
const typeScript = createTextMesh("TypeScript", 70, 50, 50);
const css = createTextMesh("CSS", 70, 20, -50);
const postgreSql = createTextMesh("postgreSQL", 10, 10, -100);
const goLang = createTextMesh("goLang", 10, 30, 40);

export const textMesh = {
  threeJs,
  javaScript,
  typeScript,
  css,
  postgreSql,
  goLang,
};
