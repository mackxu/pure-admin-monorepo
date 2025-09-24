# monorepo

## 实用命令

- 查看tsconfig：`tsc --showConfig`

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

在主包内，配置tsconfig和vite.config.ts搭配使用

## subpath imports语法

包内别名，必须以#开头

```json
{
  "imports": {
    "#/*": "./src/*"
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

tsconfig.json 需要配置`baseUrl`和`paths`

## catalog

安装依赖

```bash
pnpm add vue --filter @page/water --save-catalog
```
