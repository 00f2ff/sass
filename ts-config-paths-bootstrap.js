const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./dist"; // Either absolute or relative path. If relative it's resolved to current working directory.
tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

 //    "dev": "pnpm prebuild && tsc -w & nodemon -q -r ./tsconfig-paths-bootstrap.js -w dist dist/index.js"
