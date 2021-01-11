const lintPKG = {
  "lint-staged": {
    "*.{json,md}": ["prettier --write", "git add"],
    "*.{jsx,js}": ["prettier --write", "eslint --fix", "git add"],
    "*.{tsx,ts}": ["prettier --write", "eslint --fix", "git add"],
  },
};

const configPKG = {
  config: {
    commitizen: {
      path: "node_modules/cz-customizable",
    },
    "cz-customizable": {
      config: ".cz-config.js",
    },
  },
};

const devDependenciesPKG = {
  commitizen: "^4.2.2",
  "commitlint-config-cz": "^0.13.2",
  "cz-customizable": "^6.3.0",
  husky: "^4.3.6",
  "lint-staged": "^10.5.3",
};

export default {
  ...lintPKG,
  ...configPKG,
  ...devDependenciesPKG,
};
