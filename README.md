# tiips

Homepage is in index.html

**_Before Running_**

1. Make sure to install Node.js
```bash
https://nodejs.org/en/
```

2. Check whether it is installed properly or not by writing these command line
```bash
$ node -v
$ npm -v
```

**_Run_**
1. Start the website locally
```bash
$ npm start
```

**_If you get npm ERR! code ELIFECYCLE_**
1. Clear npm cache
```bash
$ npm cache clean --force
```
2. Delete node modules
```bash
$ rm -rf node_modules package-lock.json
```

3. Install fresh npm
```bash
$ npm install
```

4. Start again!
```bash
$npm start
```
