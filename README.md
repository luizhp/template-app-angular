[![Build Status](https://travis-ci.org/luizhp/template-app-angular.svg?branch=main)](https://travis-ci.org/luizhp/template-app-angular) [![Coverage Status](https://coveralls.io/repos/github/luizhp/template-app-angular/badge.svg?branch=main)](https://coveralls.io/github/luizhp/template-app-angular?branch=main) [![Known Vulnerabilities](https://snyk.io/test/github/luizhp/template-app-angular/badge.svg?targetFile=package.json)](https://snyk.io/test/github/luizhp/template-app-angular?targetFile=package.json) [![template-app-angular](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/oaq3oo/main&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/oaq3oo/runs) <a href="#badge"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a> [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

# TemplateAppAngular

Steps to create an Angular + git-commit-msg-linter + ng-lint-staged + Husky + Jest + Cypress + Coveralls + TravisCI project template

- [Features](#features)
- [Steps](#steps)
- [References](#references)

## Features

- VSCode IDE [Settings][.vscode/settings.json] and [Jest Snippet][.vscode/jest.code-snippets]
- [tslint-angular][tslint-angular@npm]
- [prettier@npm][prettier@npm]
- [tslint-config-prettier][tslint-config-prettier@npm]
- [git-commit-msg-linter]
- [ng-lint-staged]
- [husky]
- [jest], [ts-jest], [jest-preset-angular], [@types/jest]
- [rimraf]
- [npm-check]
- [concurrently]
- [http-server]
- [npm-run-all]
- [env-cmd]
- [TravisCI]
- [Coveralls][coveralls@npm]
- [Cypress][cypress@npm]
- [snyk.io]

## Steps:

> ### 1. Create new Angular project

```bash
   $ ng n template-app-angular --routing=false --style=css --skip-git --verbose=true --prefix=template-app-angular
```

> ### 2. Disable sharing of anonymous usage

```bash
   $ cd ./template-app-angular

   $ ng analytics project off | echo N
```

> ### 3. Remove standard readme file

```bash
   $ rm ./README.md
```

> ### 4. Setup Visual Studio Code IDE settings

- create [.vscode/settings.json] file and add:

  ```json
  {
    "files.eol": "\n",
    "explorer.compactFolders": false,
    "editor.tabSize": 2,
    "typescript.updateImportsOnFileMove.enabled": "prompt",
    "html.format.endWithNewline": true,
    "html.suggest.html5": true,
    "html.autoClosingTags": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "javascript.referencesCodeLens.showOnAllFunctions": true,
    "javascript.referencesCodeLens.enabled": true,
    "typescript.implementationsCodeLens.enabled": true,
    "typescript.referencesCodeLens.enabled": true,
    "typescript.referencesCodeLens.showOnAllFunctions": true
  }
  ```

> ### 5. Add new entries to .gitignore

- copy [.gitignore] file

> ### 6. Create .gitattributes file

- create [.gitattributes] file and add:

  ```
  # Auto detect text files and perform LF normalization
  * text=auto

  # JS and TS files must always use LF for tools to work
  *.js eol=lf
  *.ts eol=lf
  *.json eol=lf
  *.html eol=lf
  *.css eol=lf
  *.scss eol=lf
  ```

> ### 7. Create .npmrc file

- create [.npmrc] file and add:

  ```
  registry = "https://registry.npmjs.org/"
  ```

> ### 8. Initialize GIT Local Repo

```bash
   $ git init
```

> ### 9. Add GIT Local Repo settings

```bash
   $ git config core.eol lf
   $ git config core.autocrlf input
   $ git config commit.status false
   $ git config push.followTags true
   $ git config alias.s '!git status -s'
   $ git config alias.c '!git add --all && git commit -m'
   $ git config alias.l "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %C(green)[%cd...%cr]%Creset %C(bold blue)<%an> %n%C(bold)%s%n%Creset' --abbrev-commit --date=iso-local"
   $ git config alias.lnp '!git --no-pager l'
   $ git config alias.t "!sh -c 'git tag -a $1 -m $1' -"
```

> ### 10. Add GPL v3 license

- copy [license] file

> ### 11. Update project details on package.json

- on [package.json] file, update:

  ```json
  {
    "name": "template-app-angular",
    "version": "0.0.0",
    "author": {
      "name": ".luizhp",
      "email": "luizhp@yahoo.com",
      "url": "https://github.com/luizhp/"
    },
    "description": "Angular TDD project template",
    "keywords": [
      "Angular",
      "Jest",
      "Travis-CI",
      "Coveralls",
      "Cypress",
      "snyk.io",
      "GitHub",
      "git-commit-msg-linter",
      "ng-lint-staged",
      "Husky",
      "TDD"
    ],
    "categories": ["Programming Languages", "Testing", "Linters", "Snippets"],
    "homepage": "https://github.com/luizhp/template-app-angular/tree/main#readme",
    "readme": "https://github.com/luizhp/template-app-angular/tree/main#readme",
    "icon": "https://raw.githubusercontent.com/luizhp/template-app-angular/main/src/favicon.ico",
    "bugs": {
      "url": "https://github.com/luizhp/template-app-angular/issues",
      "email": "luizhp@yahoo.com"
    },
    "license": "GPL-3.0-or-later",
    "repository": {
      "type": "git",
      "url": "https://github.com/luizhp/template-app-angular"
    },
    "engines": {
      "node": ">= 12",
      "npm": "^6.14.7"
    },
    ...
  }
  ```

> ### 12. Initial commit

```bash
   $ git c "chore: initial commit"
```

> ### 13. Install tslint-angular package

- [tslint-angular@npm]

  ```bash
  $ npm i -D tslint-angular@latest

  $ git c "chore(tslint-angular): install package"
  ```

> ### 14. Setup tslint-angular on tslint.json file

- update [tslint.json] file with:

  ```json
  {
    "extends": ["tslint:recommended", "tslint-angular"],
    ...
  ```

```bash
   $ git c "chore(tslint-angular): setup tslint.json file"
```

> ### 15. Install prettier package

- [prettier@npm]

  ```bash
  $ npm i -D prettier@latest

  $ git c "chore(prettier): install package"
  ```

> ### 16. Setup prettier custom options

- create [.prettierrc] file and add:

  ```json
  {
    "tabWidth": 2,
    "singleQuote": true,
    "endOfLine": "lf",
    "bracketSpacing": true,
    "trailingComma": "es5",
    "printWidth": 80,
    "arrowParens": "always",
    "proseWrap": "preserve",
    "htmlWhitespaceSensitivity": "css",
    "useTabs": false,
    "semi": true,
    "quoteProps": "consistent",
    "jsxBracketSameLine": true
  }
  ```

- create [.prettierignore] file and add:

  ```
  package-lock.json
  yarn.lock
  dist
  coverage
  node_modules
  .travis.yml
  CHANGELOG.md
  ```

```bash
   $ git c "chore(prettier): setup custom options"
```

> ### 17. Install tslint-config-prettier package

- [tslint-config-prettier@npm]

  ```bash
  $ npm i -D tslint-config-prettier@latest

  $ git c "chore(tslint-config-prettier): install package"
  ```

> ### 18. Setup tslint-config-prettier on tslint.json file

- update [tslint.json] file with:

  ```json
  {
    "extends": ["tslint:recommended", "tslint-angular", "tslint-config-prettier"],
    ...
  ```

```bash
   $ git c "chore(tslint-config-prettier): setup tslint.json file"
```

> ### 19. Setup Visual Studio Code IDE jest snippet

- create [.vscode/jest.code-snippets] file and add:

  ```json
  {
    "Jest Test": {
      "prefix": ["test"],
      "body": [
        "describe('', () => {",
        "  test('', () => {",
        "",
        "  })",
        "})",
        ""
      ],
      "description": "A describe block for Jest"
    }
  }
  ```

```bash
   $ git c "chore(vscode): add jest snippet"
```

> ### 20. Install git-commit-msg-linter package

- [git-commit-msg-linter]

  ```bash
  $ npm i -D git-commit-msg-linter@latest

  $ git c "chore(git-commit-msg-linter): install package"
  ```

> ### 21. Install ng-lint-staged package

- [ng-lint-staged]

  ```bash
  $ npm i -D ng-lint-staged@latest

  $ git c "chore(ng-lint-staged): install package"
  ```

> ### 22. Setup ng-lint-staged on .lintstagedrc file

- create [.lintstagedrc] file and add:

  ```json
  {
    "lint-staged": {
      "src/**/*.ts": ["ng-lint-staged lint --fix --"]
    }
  }
  ```

```bash
   $ git c "chore(ng-lint-staged): setup .lintstagedrc file"
```

> ### 23. Install husky package

- [husky]

  ```bash
  $ npm i -D husky@latest

  $ git c "chore(husky): install package"
  ```

> ### 24. Add husky pre-commit hook with ng-lint-staged

- create [.huskyrc.json] file and add:

  ```json
  {
    "hooks": {
      "pre-commit": "ng-lint-staged"
    }
  }
  ```

```bash
   $ git c "chore(ng-lint-staged): add husky pre-commit hook"
```

> ### 25. Update build script

- on [package.json] file, replace:

  ```json
  "scripts": {
     ...
     "build": "ng build --prod --base-href ./",
     ...
  }
  ```

```bash
   $ git c "build(script): update build script"
```

> ### 26. Add husky pre-push hook with build script

- update [.huskyrc.json] file adding pre-push hook:

  ```json
  {
    "hooks": {
      ...
      "pre-push": "npm run build"
    }
  }
  ```

```bash
   $ git c "build(husky): add husky pre-push hook"
```

> ### 27. Install pretty-quick package

- [pretty-quick]

```bash
   $ npm i -D pretty-quick@latest

   $ git c "chore(pretty-quick): install package"
```

> ### 28. Update husky pre-commit hook with pretty-quick

- on [.huskyrc.json] file update pre-commit hook with:

  ```json
  {
    "hooks": {
      "pre-commit": "pretty-quick --check --staged && ng-lint-staged",
      ...
  }
  ```

```bash
   $ git c "chore(pretty-quick): update husky pre-commit hook"
```

> ### 29. Ensure prettier applies defined format to project files

```bash
  $ npx prettier --write "**/*.{json,ts,html,js}"

  $ git c "style: ensure prettier applies defined format to project files"
```

> ### 30. Install commitizen package

- [commitizen]

  ```bash
  $ npm i -D commitizen@latest

  $ git c "chore(commitizen): install package"
  ```

> ### 31. Initialize cz-conventional-changelog commitizen adapter settings

- [cz-conventional-changelog]

  ```bash
  $ npx commitizen init cz-conventional-changelog --save-dev --save-exact

  $ git c "chore(commitizen): initialize cz-conventional-changelog adapter settings"
  ```

> ### 32. Add commit script with commitizen

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "commitizen": "exec < /dev/tty && git cz --hook || true",
     ...
  }
  ```

```bash
   $ git c "chore(commitizen): add commitizen script"
```

> ### 33. Add husky prepare-commit-msg hook with commit script

- on [.huskyrc.json] file add prepare-commit-msg hook with:

  ```json
  {
    "hooks": {
      "prepare-commit-msg": "echo '👉 Control-C 👈 abort commitizen and continue with your commit message' && npm run commitizen || true",
      ...
  }
  ```

  ```bash
  $ git c "chore(commitizen): add husky prepare-commit-msg hook with commitizen script"
  ```

- Now you can choose to provide or use comitizen to assist you on building your commit message

> ### 34. Remove Karma packages and dependencies

```bash
   $ npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter

   $ git c "chore(karma): remove packages and dependencies"
```

> ### 35. Remove Karma configuration reference inside the angular.json file

- update [angular.json] file:

  ```json
  {
   ...
   projects: {
      template-app-angular: {
         architect: {
            test: {
              options: {
                "karmaConfig": "karma.conf.js"
              }
            }
         }
      }
   }
   ...
  }
  ```

```bash
   $ git c "chore(karma): remove configuration reference"
```

> ### 36. Remove Karma configuration file

```bash
   $ rm ./karma.conf.js

   $ git c "chore(karma): remove configuration file"
```

> ### 37. Install jest packages

- [jest]
- [ts-jest]
- [jest-preset-angular]
- [@types/jest]

  ```bash
  $ npm i -D jest@latest ts-jest@latest jest-preset-angular@latest @types/jest@latest

  $ git c "chore(jest): install packages"
  ```

> ### 38. Setup setup-jest.ts file

- create [setup-jest.ts] file with:

  ```ts
  import 'jest-preset-angular';
  ```

```bash
   $ git c "chore(jest): create setup-jest.ts file"
```

> ### 39. Setup jest.config.js file

- create [jest.config.js] file and add:

  ```javascript
  module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transformIgnorePatterns: ['node_modules/(?!@ngrx|ngx-socket-io)'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/',
      '<rootDir>/cypress/',
      '<rootDir>/src/test.ts',
    ],
  };
  ```

```bash
   $ git c "chore(jest): setup jest.config.js file"
```

> ### 40. Remove unnecessary comments on tsconfig files

- remove this comment from [tsconfig.json] file:

  ```javascript
  /* To learn more about this file see: https://angular.io/config/tsconfig. */
  ```

- remove this comment from [tsconfig.app.json] file:

  ```javascript
  /* To learn more about this file see: https://angular.io/config/tsconfig. */
  ```

- remove this comment from [tsconfig.spec.json] file:

  ```javascript
  /* To learn more about this file see: https://angular.io/config/tsconfig. */
  ```

```bash
   $ git c "chore(tsconfig): remove unnecessary comments on tsconfig files"
```

> ### 41. Setup jest on tsconfig.json file

- update [tsconfig.json] file, adding:

  ```json
  {
    "compilerOptions": {
      ...
      "types": ["jest"],
      "esModuleInterop": true,
      "emitDecoratorMetadata": true
  ```

```bash
   $ git c "chore(jest): setup tsconfig.json file"
```

> ### 42. Setup jest on tsconfig.spec.json file

- update [tsconfig.spec.json] file:

  ```json
  {
    "compilerOptions": {
      ...
      "types": ["jest", "node"],
      "esModuleInterop": true,
      "emitDecoratorMetadata": true
    },
    ...
  ```

```bash
   $ git c "chore(jest): setup tsconfig.spec.json file"
```

> ### 43. Remove the test target inside the angular.json file

- update [angular.json] file:

  ```json
  {
   ...
   projects: {
      template-app-angular: {
         architect: {
            test: {}
         }
      }
   }
   ...
  }
  ```

```bash
   $ git c "chore(jest): remove test target"
```

> ### 44. Remove src/test.ts reference on tsconfig.spec.json

- update [tsconfig.spec.json] file:

  ```json
  {
  ...
  "files": [
    "src/test.ts",
    ...
  ```

```bash
   $ git c "chore(jest): remove src/test.ts reference on tsconfig.spec.json"
```

> ### 45. Remove previous test configuration file

```bash
   $ rm ./src/test.ts

   $ git c "chore(jest): remove previous test configuration file"
```

> ### 46. Add jest's test scripts

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "test": "jest --passWithNoTests --silent --noStackTrace --runInBand",
     "test:verbose": "jest --passWithNoTests --runInBand",
     "test:staged": "npm test -- --findRelatedTests",
     ...
  ```

```bash
   $ git c "chore(jest): add test scripts"
```

> ### 47. Setup staged files test on .lintstagedrc file

- update [.lintstagedrc] file:

  ```json
  {
    "lint-staged": {
      "src/**/*.ts": ["ng-lint-staged lint --fix --", "npm run test:staged"]
    }
  }
  ```

```bash
   $ git c "chore(jest): setup staged files test on .lintstagedrc file"
```

> ### 48. Add jest test configuration for unit tests

- create [jest-unit-config.js] file and add:

  ```javascript
  const config = require('./jest.config');
  config.testMatch = ['**/*.spec.ts'];
  module.exports = config;
  ```

```bash
   $ git c "chore(jest): setup configuration for unit tests"
```

> ### 49. Add jest test configuration for integration tests

- create [jest-integration-config.js] file and add:

  ```javascript
  const config = require('./jest.config');
  config.testMatch = ['**/*.test.ts'];
  module.exports = config;
  ```

```bash
   $ git c "chore(jest): setup configuration for integration tests"
```

> ### 50. Add scripts for jest unit and integration tests

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "test:unit": "npm test -- --watch -c jest-unit-config.js",
     "test:integration": "npm test -- --watch -c jest-integration-config.js",
     ...
  ```

```bash
   $ git c "chore(jest): add scripts for unit and integration tests"
```

> ### 51. Install coveralls package

- [coveralls@npm]

  ```bash
  $ npm i -D coveralls@latest

  $ git c "chore(coveralls): install package"
  ```

- Reference: [coveralls]

> ### 52. Add coverage settings at jest.config.js file

- add the following lines on [jest.config.js] file:

  ```json
  module.exports = {
     ...,
     collectCoverage: true,
     coverageDirectory: "coverage/template-app-angular"
  };
  ```

```bash
   $ git c "chore(jest): add coverage settings"
```

> ### 53. Add test:ci and test:coveralls scripts

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "test:ci": "npm test -- --coverage --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox",
     "test:coveralls": "npm run test:ci && coveralls < coverage/template-app-angular/lcov.info",
     ...
  ```

```bash
   $ git c "chore(jest): add test:ci and test:coveralls scripts"
```

> ### 54. Add test:ci script on husky pre-push hook

- update [.huskyrc.json] file:

  ```json
  {
    "hooks": {
      ...
      "pre-push": "npm run test:ci && npm run build"
    }
  }
  ```

```bash
   $ git c "chore(jest): add test:ci script on husky pre-push hook"
```

> ### 55. Create Travis CI building and testing file

- create [.travis.yml] file and add:

  ```yaml
  language: node_js
  node_js:
    - 12

  addons:
    apt:
      sources:
        - google-chrome
      packages:
        - google-chrome-stable

  cache:
    directories:
      - ~/.npm
      - ~/.cache

  install:
    - npm install

  script:
    - npm run lint
    - npm run test:coveralls
  ```

```bash
   $ git c "chore(travis): create building and testing file"
```

- Reference: [TravisCI]

> ### 56. Remove jasmine packages

```bash
   $ npm uninstall @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter

   $ git c "chore(jasmine): remove packages"
```

> ### 57. Install cypress package

- [cypress][cypress@npm]

  ```bash
  $ npm i -D cypress@latest

  $ git c "chore(cypress): install package"
  ```

> ### 58. Create cypress configuration file

- create [cypress.json] file and add:

  ```json
  {
    "baseUrl": "http://localhost:4200",
    "video": false
  }
  ```

```bash
   $ git c "chore(cypress): create configuration file"
```

- Reference: [Cypress-Configuration]

> ### 59. Install concurrently package

- [concurrently]

  ```bash
  $ npm i -D concurrently@latest

  $ git c "chore(concurrently): install package"
  ```

> ### 60. Add cypress e2e scripts

- on [package.json] file, update:

  ```json
  "scripts": {
     ...
     "cypress:e2e": "cypress open",
     "cypress:install": "cypress install -f",
     "cypress:run": "cypress run --record",
     "cypress:chrome": "cypress run -b chrome",
     "cypress:open": "concurrently \"ng serve\" \"cypress open\""
  },
  ...
  ```

```bash
   $ git c "chore(cypress): add e2e scripts"
```

> ### 61. Remove protractor package

```bash
   $ npm uninstall protractor

   $ git c "chore(protractor): remove package"
```

> ### 62. Remove the e2e target inside the angular.json file

- update [angular.json] file:

  ```json
  {
   ...
   projects: {
      template-app-angular: {
         architect: {
            e2e: {}
         }
      }
   }
   ...
  }
  ```

```bash
   $ git c "chore(cypress): remove e2e target"
```

> ### 63. Remove previous e2e file entry reference on tsconfig at lint target inside the angular.json file

- update [angular.json] file:

  ```json
  {
   ...
   projects: {
      template-app-angular: {
         architect: {
            lint: {
             ...
             "options": {
              "tsConfig": [
                ...
                "e2e/tsconfig.json"
                ...
  }
  ```

```bash
   $ git c "chore(cypress): remove previous e2e file entry reference"
```

> ### 64. Remove e2e folder

```bash
   $ rm -rf ./e2e

   $ git c "chore(cypress): remove e2e folder"
```

> ### 65. Initialize cypress and generates payloads

- after Cypress UI loads, exit it

  ```bash
  $ npm run cypress:e2e
  ```

- remove cypress examples folder or move to another place

  ```bash
  $ rm -rf ./cypress/integration/examples

  $ npx pretty-quick --fix

  $ git c "chore(cypress): initialize and generates payloads"
  ```

> ### 66. Create cypress tsconfig.json file to enable intellisense

- create [cypress/tsconfig.json] file and add:

  ```json
  {
    "compilerOptions": {
      "allowJs": true,
      "baseUrl": "../node_modules",
      "types": ["cypress"],
      "noEmit": true
    },
    "include": ["**/*.*"]
  }
  ```

```bash
   $ git c "chore(cypress): enable intellisense"
```

- Reference: [Cypress-IntelliSense]

> ### 67. Update sample angular component to cypress test

- on [src/app/app.component.html] file locate:

  ```html
  <span>{{ title }} app is running!</span>
  ```

- and add `data-cy="main-title"` attribute as:

  ```html
  <span data-cy="main-title">{{ title }} app is running!</span>
  ```

```bash
   $ git c "test(cypress): update sample angular component"
```

> ### 68. Create cypress sample test file

- create [cypress/integration/main-page.spec.js] file and add:

  ```js
  const MAIN_TITLE = 'template-app-angular app is running!';

  describe('Main Page UI', () => {
    it('Should return true when title component was correct', () => {
      cy.visit('/');

      cy.contains(MAIN_TITLE).should('have.length', 1);
    });

    it('Should return true when title component was correctly located', () => {
      cy.visit('/');

      cy.get('[data-cy=main-title]')
        .contains(MAIN_TITLE)
        .should('have.length', 1);
    });
  });
  ```

```bash
   $ git c "test(cypress): create sample test file"
```

> ### 69. Install http-server package

- [http-server]

  ```bash
  $ npm i -D http-server@latest

  $ git c "chore(http-server): install package"
  ```

> ### 70. Add start:ci test script

- on [package.json] file, add:

  ```json
  "scripts": {
     ...,
     "start:ci": "http-server ./dist/template-app-angular -a localhost -p 4200 -c-1"
     ...
  ```

```bash
   $ git c "chore(cypress): add start:ci test script"
```

> ### 71. Install npm-run-all package

- [npm-run-all]

  ```bash
  $ npm i -D npm-run-all@latest

  $ git c "chore(npm-run-all): install package"
  ```

> ### 72. Add cypress:ci test script

- on [package.json] file, add:

  ```json
  "scripts": {
     ...,
     "cypress:ci": "ng build --prod && run-p --race start:ci cypress:run"
     ...
  ```

- on [package.json] file, update:

  ```json
  "scripts": {
     ...,
     "cypress:e2e": "npm run cypress:ci",
     ...
  ```

```bash
   $ git c "chore(cypress): add test scripts"
```

> ### 73. Call cypress:ci script on husky pre-push hook

- update [.huskyrc.json] file:

  ```json
  {
    "hooks": {
      ...
      "pre-push": "npm run test:ci && npm run cypress:e2e"
    }
  }
  ```

```bash
   $ git c "chore(cypress): ensure husky pre-push hook calls cypress:ci script"
```

> ### 74. Call cypress:ci script on Travis configuration

- at script entry on [.travis.yml] file add:

  ```yaml
  - npm run cypress:ci
  ```

```bash
   $ git c "chore(travis): ensure cypress:ci script runs"
```

> ### 75. Ensure Angular destroys itself on hot reloads

- replace [src/main.ts] file content with:

  ```ts
  import { enableProdMode } from '@angular/core';
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

  import { AppModule } from './app/app.module';
  import { environment } from './environments/environment';

  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((ref) => {
      if (window[`ngRef`]) {
        window[`ngRef`].destroy();
      }
      window[`ngRef`] = ref;
    })
    .catch((err) => console.error(err));
  ```

```bash
   $ git c "refactor(project): ensure angular destroys itself on hot reloads"
```

> ### 76. Install rimraf package

- [rimraf]

  ```bash
  $ npm i -D rimraf@latest

  $ git c "chore(rimraf): install package"
  ```

> ### 77. Add prebuild script to ensure rimraf destroys the dist folder before building

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "prebuild": "rimraf dist",
     ...
  ```

```bash
   $ git c "build(script): ensure rimraf destroy the dist folder before building"
```

> ### 78. Install npm-check package

- [npm-check]

  ```bash
  $ npm install -D npm-check@latest

  $ git c "chore(npm-check): install package"
  ```

> ### 79. Add npm-check script to ensure project packages to be updated

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "check": "npm-check -s -u",
     ...
  ```

```bash
   $ git c "chore(npm-check): add check script to ensure project packages to be updated"
```

> ### 80. Upgrade zone.js from 0.10.3 to 0.11.1

- Optional

  ```bash
  $ npm run check

  $ git c "chore(zone.js): upgrade version from 0.10.3 to 0.11.1"
  ```

> ### 81. Upgrade @types/node from 12.12.62 to 14.11.2

- Optional

  ```bash
  $ npm run check

  $ git c "chore(types/node): upgrade version from 12.12.62 to 14.11.2"
  ```

> ### 82. Upgrade ts-node from 8.3.0 to 9.0.0

- Optional

  ```bash
  $ npm run check

  $ git c "chore(ts-node): upgrade version from 8.3.0 to 9.0.0"
  ```

> ### 83. Set up a project in the Cypress Test Runner

- Create a new project after logging in to the [Cypress Test Runner Setup]

  ```bash
  $ npx cypress open

  # Login
  # Click on the run tab
  # Conect to dashboard
  # Setup project (Project name, organization, project visibility)
  # Copy projectId and CYPRESS_RECORD_KEY
  # Exit
  ```

- Ensure if automatically added the projectId on [cypress.json] file and commit:

  ```json
  {
    ...
    "projectId": <<YOUR ProjectId>>
    ...
  }
  ```

```bash
   $ git c "chore(cypress): setup projectId"
```

> ### 84. Create .env file and add CYPRESS_RECORD_KEY environment variable

- create .env file and add:

  ```
  CYPRESS_RECORD_KEY=<<ENTER YOUR CYPRESS_RECORD_KEY>>
  ```

> ### 85. Install env-cmd package

- [env-cmd]

  ```bash
  $ npm install -D env-cmd@latest

  $ git c "chore(env-cmd): install package"
  ```

> ### 86. Enable Cypress record key to be visible when cypress:e2e test script runs

- on [package.json] file, update:

  ```json
  "scripts": {
     ...,
     "cypress:e2e": "env-cmd npm run cypress:ci",
     ...
  ```

```bash
   $ git c "chore(cypress): enable record key to be visible when cypress:e2e test script runs"
```

> ### 87. Create GIT Repo on [GitHub]

- do not push on it yet

> ### 88. Assign Repo to [cypress.io]

> ### 89. Assign Repo to [Coveralls]

> ### 90. Assign Repo to [TravisCI]

> ### 91. Add CYPRESS_RECORD_KEY to [TravisCI] project environment variables

> ### 92. Add badges on package.json

- on [package.json] file, add:

  ```json
  {
    ...
    "badges": [
      {
        "description": "Travis-CI - Build Status",
        "href": "https://travis-ci.org/luizhp/template-app-angular.svg?branch=main",
        "url": "https://travis-ci.org/luizhp/template-app-angular"
      },
      {
        "description": "Coveralls - Coverage Status",
        "href": "https://coveralls.io/repos/github/luizhp/template-app-angular/badge.svg?branch=main",
        "url": "https://coveralls.io/github/luizhp/template-app-angular?branch=main"
      },
      {
        "description": "snyk.io - Known Vulnerabilities",
        "href": "https://snyk.io/test/github/luizhp/template-app-angular/badge.svg?targetFile=package.json",
        "url": "https://snyk.io/test/github/luizhp/template-app-angular?targetFile=package.json"
      },
      {
        "description": "cypress.io",
        "href": "https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/oaq3oo/main&style=flat&logo=cypress",
        "url": "https://dashboard.cypress.io/projects/oaq3oo/runs"
      },
      {
        "description": "Prettier Code Style",
        "href": "https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",
        "url": "https://github.com/prettier/prettier/"
      },
      {
        "description": "Commitizen friendly",
        "href": "https://img.shields.io/badge/commitizen-friendly-brightgreen.svg",
        "url": "https://commitizen.github.io/cz-cli/"
      },
      {
        "description": "GPLv3 License",
        "href": "https://img.shields.io/badge/License-GPL%20v3-yellow.svg",
        "url": "https://opensource.org/licenses/"
      },
      {
        "description": "Open Source",
        "href": "https://badges.frapsoft.com/os/v1/open-source.svg?v=103",
        "url": "https://opensource.org/"
      }
    ],
    ...
  }
  ```

```bash
   $ git c "chore(project): ensure all badges are declared"
```

> ### 93. Install standard-version package

- [standard-version]

  ```bash
  $ npm i -D standard-version

  $ git c "chore(standard-version): install package"
  ```

> ### 94. Setup standard-version changelog header output

- on [package.json] file, add:

  ```json
  {
    ...
    "standard-version": {
        "changelogHeader": "# Template Angular TDD App\n\nAll notable changes to this project will be documented here.\n\n"
      }
  ```

```bash
   $ git c "chore(standard-version): setup changelog header output"
```

> ### 95. Add standard-version release script

- on [package.json] file, add:

  ```json
  "scripts": {
     ...
     "release": "HUSKY_SKIP_HOOKS=1 standard-version",
     ...
  }
  ```

```bash
   $ git c "chore(standard-version): add release script"
```

> ### 96. Set as release 0.0.1

- on [package.json] file, update:

  ```
  "version": "1.0.0",
  ```

> ### 97. Run release script as first-release

```bash
   $ npm run release -- --first-release
```

> ### 98. Append package.json on previous commit

```bash
   $ git add ./package.json
   $ git commit --amend --no-edit
```

> ### 99. Push commits to GitHub Repo

> ### 100. Assign Repo to [snyk.io]

## References

- [GitHub]
- [TravisCI]
- [Coveralls]
- [cypress.io]
- [snyk.io]

## Contributing

Contributions are always welcome! 👊

You can reach me out at Twitter [@luizhp](https://twitter.com/luizhp)

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2020 [.luizhp](https://github.com/luizhp)

This project is [GPL v3][license] licensed.

---

[.gitignore]: https://github.com/luizhp/template-app-angular/blob/master/.gitignore
[.vscode/settings.json]: https://github.com/luizhp/template-app-angular/blob/master/.vscode/settings.json
[.vscode/jest.code-snippets]: https://github.com/luizhp/template-app-angular/blob/master/.vscode/jest.code-snippets
[license]: https://github.com/luizhp/template-app-angular/blob/master/license
[package.json]: https://github.com/luizhp/template-app-angular/blob/master/package.json
[git-commit-msg-linter]: https://www.npmjs.com/package/git-commit-msg-linter
[ng-lint-staged]: https://www.npmjs.com/package/ng-lint-staged
[.lintstagedrc]: https://github.com/luizhp/template-app-angular/blob/master/.lintstagedrc
[husky]: https://www.npmjs.com/package/husky
[.huskyrc.json]: https://github.com/luizhp/template-app-angular/blob/master/.huskyrc.json
[jest]: https://www.npmjs.com/package/jest
[ts-jest]: https://www.npmjs.com/package/ts-jest
[jest-preset-angular]: https://www.npmjs.com/package/jest-preset-angular
[@types/jest]: https://www.npmjs.com/package/@types/jest
[jest.config.js]: https://github.com/luizhp/template-app-angular/blob/master/jest.config.js
[src/test.ts]: https://github.com/luizhp/template-app-angular/blob/master/src/test.ts
[tsconfig.spec.json]: https://github.com/luizhp/template-app-angular/blob/master/src/tsconfig.spec.json
[tsconfig.app.json]: https://github.com/luizhp/template-app-angular/blob/master/src/tsconfig.app.json
[tsconfig.json]: https://github.com/luizhp/template-app-angular/blob/master/src/tsconfig.json
[angular.json]: https://github.com/luizhp/template-app-angular/blob/master/src/angular.json
[jest-integration-config.js]: https://github.com/luizhp/template-app-angular/blob/master/src/jest-integration-config.js
[jest-unit-config.js]: https://github.com/luizhp/template-app-angular/blob/master/src/jest-unit-config.js
[coveralls]: https://coveralls.io/
[coveralls@npm]: https://www.npmjs.com/package/coveralls
[travisci]: https://travis-ci.org/
[.travis.yml]: https://github.com/luizhp/template-app-angular/blob/master/src/.travis.yml
[rimraf]: https://www.npmjs.com/package/rimraf
[npm-check]: https://www.npmjs.com/package/npm-check
[github]: https://github.com/
[snyk.io]: https://snyk.io/
[cypress@npm]: https://www.npmjs.com/package/cypress
[setup-jest.ts]: https://github.com/luizhp/template-app-angular/blob/master/setup-jest.ts
[cypress.json]: https://github.com/luizhp/template-app-angular/blob/master/cypress.json
[cypress/tsconfig.json]: https://github.com/luizhp/template-app-angular/blob/master/cypress/tsconfig.json
[src/app/app.component.html]: https://github.com/luizhp/template-app-angular/blob/master/cypress/src/app/app.component.html
[cypress/integration/main-page.spec.js]: https://github.com/luizhp/template-app-angular/blob/master/cypress/src/app/cypress/integration/main-page.spec.js
[cypress-intellisense]: https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Writing-Tests
[cypress-configuration]: https://docs.cypress.io/guides/references/configuration.html
[concurrently]: https://www.npmjs.com/package/concurrently
[http-server]: https://www.npmjs.com/package/http-server
[npm-run-all]: https://www.npmjs.com/package/npm-run-all
[cypress-dashboard]: https://docs.cypress.io/guides/dashboard/projects.html#Set-up-a-project-to-record
[src/main.ts]: https://github.com/luizhp/template-app-angular/blob/master/src/main.ts
[cypress test runner setup]: https://docs.cypress.io/guides/dashboard/projects.html#Setup
[env-cmd]: https://www.npmjs.com/package/env-cmd
[cypress.io]: https://www.cypress.io/
[tslint-angular@npm]: https://www.npmjs.com/package/tslint-angular
[tslint.json]: https://github.com/luizhp/template-app-angular/blob/master/src/tslint.json
[prettier@npm]: https://www.npmjs.com/package/prettier
[.prettierrc]: https://github.com/luizhp/template-app-angular/blob/master/src/.prettierrc
[.prettierignore]: https://github.com/luizhp/template-app-angular/blob/master/src/.prettierignore
[tslint-config-prettier@npm]: https://www.npmjs.com/package/tslint-config-prettier
[.gitattributes]: https://github.com/luizhp/template-app-angular/blob/master/.gitattributes
[.npmrc]: https://github.com/luizhp/template-app-angular/blob/master/.npmrc
[pretty-quick]: https://www.npmjs.com/package/pretty-quick
[commitizen]: https://www.npmjs.com/package/commitizen
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[standard-version]: https://www.npmjs.com/package/standard-version
