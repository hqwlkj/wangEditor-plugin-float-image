/**
 * @description plugin test
 * @author Yanghc
 */

import createEditor from '../utils/create-editor'
import withImage from '../../src/module/plugin'

describe('float-image plugin', () => {
  const editor = withImage(createEditor())
  const elem = { type: 'image', children: [{ text: '' }] }

  it('image is inline', () => {
    expect(editor.isInline(elem)).toBeTruthy()
  })

  it('image is void', () => {
    expect(editor.isVoid(elem)).toBeTruthy()
  })
})
