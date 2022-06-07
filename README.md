# Cypress xray demo

### 1. Prerequisite :

- Download [Node.js LTS](https://nodejs.org/en/) **min LTS 16.XX** and install based on your system.
- To check installation: Open command prompt and run **node -v**. [NODE.js VERSION](https://ibb.co/tZy3X2b). Restart pc if needed. **\*Only if** there is error then set environment variable _NODE_HOME_, Variable Value = \*C:\Program Files\nodejs\*\*.
- Download [Visual Studio Code](https://code.visualstudio.com/Download) and install based on your system. **Install with Default Configuration**
- Latest Chrome or Firefox browser.
- Standard code formatter can be used. For example : [Prettier](https://prettier.io/docs/en/install.html)

---

### 2. How to run test on local machine :

- Clone/Download repo to local machine and extract it.
- Open VS-code and open extracted repo.
- Run command in VS-code terminal `npm install cypress --save-dev` it may take little longer.
- Run command using VS-Code termial `npx cypress open` or `./node_modules/.bin/cypress open` to Open and verify installation.
- [Choose](https://ibb.co/HDHL3tF) browser from top right corder. Recommended _ELECTRON_. Cypress GUI runner.
- To run test case using command line use `npm run *name of script*` to run test from integration folder.

---