import path from "path";
import ts from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";

const masterVersion = import("./package.json").version;
const packagesDir = path.resolve(__dirname, "packages");
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const name = path.basename(packageDir);
const resolve = (p) => path.resolve(packageDir, p);

const pkg = import(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};
