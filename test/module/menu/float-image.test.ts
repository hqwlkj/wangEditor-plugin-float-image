/**
 * @description float image menu test
 * @author Yanghc
 */

import { Editor } from 'slate'
import createEditor from '../../utils/create-editor'
import FloatNone from '../../../src/module/menu/FloatNone'
import FloatLeft from '../../../src/module/menu/FloatLeft'
import FloatRight from '../../../src/module/menu/FloatRight'


describe('image width menus', () => {
  const floatNone = new FloatNone()
  const floatLeft = new FloatLeft()
  const floatRight = new FloatRight()

  let editor: any
  let startLocation: any

  const src = 'https://www.wangeditor.com/imgs/logo.png'
  const alt = 'logo'
  const href = 'https://www.wangeditor.com/'

  beforeEach(() => {
    editor = createEditor()
    startLocation = Editor.start(editor, [])
  })

  afterEach(() => {
    editor = null
    startLocation = null
  })

  // getValue isActive 无逻辑，不用测试

  it('is disabled', () => {
    editor.deselect()
    expect(floatNone.isDisabled(editor)).toBeTruthy()
    expect(floatLeft.isDisabled(editor)).toBeTruthy()
    expect(floatRight.isDisabled(editor)).toBeTruthy()

    editor.select(startLocation)
    expect(floatNone.isDisabled(editor)).toBeTruthy()
    expect(floatLeft.isDisabled(editor)).toBeTruthy()
    expect(floatRight.isDisabled(editor)).toBeTruthy()

    const elem = {
      type: 'image',
      src,
      alt,
      href,
      style: { width: '100', height: '80' },
      children: [{ text: '' }], // void node 必须包含一个空 text
    }
    editor.insertNode(elem) // 插入图片
    editor.select({
      path: [0, 1, 0], // 选中图片
      offset: 0,
    })
    expect(floatNone.isDisabled(editor)).toBeFalsy()
    expect(floatLeft.isDisabled(editor)).toBeFalsy()
    expect(floatRight.isDisabled(editor)).toBeFalsy()
  })

  it('exec', () => {
    editor.select(startLocation)
    const elem = {
      type: 'image',
      src,
      alt,
      href,
      style: { width: '100', height: '80', float: 'none' },
      children: [{ text: '' }], // void node 必须包含一个空 text
    }
    editor.insertNode(elem) // 插入图片
    editor.select({
      path: [0, 1, 0], // 选中图片
      offset: 0,
    })

    floatNone.exec(editor, '')
    const image1 = editor.getElemsByTypePrefix('image')[0]
    expect(image1.style.float).toBe('none')

    floatLeft.exec(editor, '')
    const image2 = editor.getElemsByTypePrefix('image')[0]
    expect(image2.style.float).toBe('left')

    floatRight.exec(editor, '')
    const image3 = editor.getElemsByTypePrefix('image')[0]
    expect(image3.style.float).toBe('right')
  })
})
