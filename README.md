# monorepo

## exports语法

```json
{
  "exports": {
    "./router": "./src/router/index.ts", // 固定值
    "./store/*": "./src/store/*.ts", // 可省略后缀
    "./views/*": "./src/views/*" // 不能省略文件后缀
  }
}
```

## imports语法

包内别名，必须以#开头

```json
{
  "imports": {
    "#*": "./src/*"
  }
}

// or. customConditions
{
  "imports": {
    "#root/*": {
      "development": "./src/*.ts",
      "default": "./dist/*.js"
    }
  }
}
```
