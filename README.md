# lk-design-vue

## 编译打包

```
npm run lib
```

## 引入 LkDesignVue

### 完整引入

```
import LkDesignVue from '../packages/index'
Vue.use(LkDesignVue)
```

## 调试

在其他项目中引用本地 npm 包：

```bash
npm install E:\WorkSpaces\lk-design-vue
```

package.json

```json
{
    "dependencies": {
        "lk-design-vue": "file:../../../lk-design-vue",
    }
}
```

main.js

```
import LkDesignVue from 'lk-design-vue'
Vue.use(LkDesignVue)
```
