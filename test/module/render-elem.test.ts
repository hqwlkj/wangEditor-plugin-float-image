/**
 * @description render elem test
 * @author wangfupeng
 */

import { Editor } from 'slate'
import createEditor from '../utils/create-editor'
import {renderImageConf} from '../../src/module/render-elem'

describe('float-image render-elem', () => {
  let editor: any
  let startLocation: any

  beforeEach(() => {
    editor = createEditor()
    startLocation = Editor.start(editor, [])
  })

  afterEach(() => {
    editor.clear()
    editor.destroy()
    editor = null
    startLocation = null
  })

  it('render image - unselected image', () => {
    expect(renderImageConf.type).toBe('image')

    const src = 'https://www.wangeditor.com/imgs/logo.png'
    const href = 'https://www.wangeditor.com/'
    const elem = {
      type: 'image',
      src,
      alt: 'logo',
      href,
      style: { width: '100', height: '80', float: 'none' },
      children: [{ text: '' }], // void node 必须包含一个空 text
    }

    const containerVnode = renderImageConf.renderElem(elem, null, editor) as any
    expect(containerVnode.sel).toBe('div')
    expect(containerVnode.data.props.className).toBe('w-e-image-container')
    expect(containerVnode.data.style.width).toBe('100')
    expect(containerVnode.data.style.height).toBe('80')
    expect(containerVnode.data.style.float).toBe('none')

    const imageVnode = containerVnode.children[0] as any
    expect(imageVnode.sel).toBe('img')
    expect(imageVnode.data.src).toBe(src)
    expect(imageVnode.data.dataHref).toBe(href)
  })
})
