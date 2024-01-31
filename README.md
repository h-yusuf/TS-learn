# Getting Started with setup tsconfig.json

## uncomment this code
"esModuleInterop": true,  
"rootDir": "./",    
"outDir": "./", 

## set folder rootdir

default prograer js with src hahaha
"rootDir": "./src",

## set folder outdir

folder result render ts to js
"outDir": "./bundle", 

## running 

build ts to js 

```
tsc
```

running js from folder /outdir 

```
node bundle/index.js
```
simple with alias

```
alias tscn="tsc && node bundle/index.js"
```