# poetry

## 安装项目
1.命令窗口输入
```
npm install
```
2.vscode 安装eslint插件
3.进入vscode首选项->设置，点击右上角图标打开setting.json,增加如下代码
```
    "editor.tabSize": 2, //制表符符号eslint
    "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
    "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
    "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
    "eslint.validate": [

    "javascript",
    "javascriptreact",
    "vue"
    ],
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // eslint保存自动修复
    "source.fixAll.stylelint": true, // stylelint保存自动修复
    },
    "editor.quickSuggestions": {
        "strings": true
    },
    "eslint.codeAction.showDocumentation": {
        "enable": true
    },
    "diffEditor.ignoreTrimWhitespace": true,
```

### 运行项目
```
npm run serve
```

### 打包项目
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
