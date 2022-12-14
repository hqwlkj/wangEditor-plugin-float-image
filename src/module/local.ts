/**
 * @description 多语言
 * @author Yanghc
 */

import { i18nAddResources } from '@wangeditor/editor'

i18nAddResources('en', {
  float: {
    none: 'Default',
    left: 'Float Left',
    right: 'Float Right',
  },
})

i18nAddResources('zh-CN', {
  float: {
    none: '默认',
    left: '左浮动',
    right: '右浮动',
  },
})
