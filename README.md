# vue-cli-practice

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Files Format

### .editorconfig

給各個編輯器使用，但如果不是用編輯器編寫，要透過 command line 去做 format.

##### eclint

```bash
npm install [-g] eclint

eclint fix public/* src/*
```

但是 eclint 沒辦法做到 prettify，只是傻傻的 format 而已。

### .eslintrc.js

設定 JavaScript 編寫規則

1. VSCode 的 `eslint plugin` 可以讀取 `.eslintrc.js` 檔案做 lint.

##### ESLint for Vue

https://github.com/vuejs/eslint-plugin-vue

`eslintrc.js`

```JSON
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ]
```

```bash
./node_modules/eslint/bin/eslint.js --ext .js,.vue src --fix
```

or

```bash
npm run lint
```

### Prettier

#### Prettier v.s. Linters

https://prettier.io/docs/en/comparison.html

#### eslint-plugin-prettier

1. https://prettier.io/docs/en/eslint.html
2. https://juejin.im/post/5b27a326e51d45588a7dac57
3. https://prettier.io/docs/en/configuration.html

```json
// prettier default settings.

module.exports = {
    "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
    "tabWidth": 2, //一个tab代表几个空格数，默认为80
    "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
    "singleQuote": false, //字符串是否使用单引号，默认为false，使用双引号
    "semi": true, //行位是否使用分号，默认为true
    "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
    "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    "parser": "babylon" //代码的解析引擎，默认为babylon，与babel相同。
}
```

#### prettier & prettyhtml CLI

```bash
npm install -D prettier @starptech/prettyhtml

yarn run prettyhtml '{src,public}/**/*.{html,vue}' # it ignores the.prettierignore file.
yarn run prettier --write './**/*'
```

### Vetur

https://vuejs.github.io/vetur/linting-error.html

### VSCode Settings
