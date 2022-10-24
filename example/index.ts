/**
 * @description examples entry
 * @author Yanghc
 */

import {Boot, createEditor, createToolbar, IDomEditor, IEditorConfig,} from '@wangeditor/editor'
import module from '../src/index'

// 注册
Boot.registerModule(module)

// i18nChangeLanguage('en')

// 编辑器配置
const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {
    uploadImage: {
      fieldName: 'your-fileName',
      base64LimitSize: 10 * 1024 * 1024 // 10M 以下插入 base64
    }
  },
  onChange(editor: IDomEditor) {
    // @ts-ignore
    document.getElementById('text-html').value = editor.getHtml()
    // @ts-ignore
    document.getElementById('text-json').value = JSON.stringify(editor.children, null, 2)
  },
  hoverbarKeys: {
    image: {
      menuKeys: [
        'imageWidth30',
        'imageWidth50',
        'imageWidth100',
        '|',
        'imageFloatNone',
        'imageFloatLeft',
        'imageFloatRight',
        '|',
        'editImage',
        'viewImageLink',
        'deleteImage'
      ],
    },
  },
}

const floatImageHtml = `<p>
<img src="https://news-bos.cdn.bcebos.com/mvideo/log-news.png" alt="alt" data-href="https://news-bos.cdn.bcebos.com/mvideo/log-news.png"/>
</p>`

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  config: editorConfig,
  html: `<p>hello&nbsp;world</p>${floatImageHtml}`,
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {},
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
