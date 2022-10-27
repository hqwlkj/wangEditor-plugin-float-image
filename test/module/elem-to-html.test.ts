/**
 * @description elem-to-html test
 * @author Yanghc
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { ImageElement } from '../../src'

describe('float-image elem-to-html', () => {
  const imgSrc = 'https://www.wangeditor.com/imgs/logo.png'
  const linkCard: ImageElement = {
    type: 'image',
    src: imgSrc,
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('image')
  })

  it('elem to html', () => {
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
    const html = elemToHtmlConf.elemToHtml(elem, '')

    expect(html).toBe(
      `<img src="${src}" alt="logo" data-href="${href}" style="width: 100;height: 80;float: none;"/>`
    )
  })
})
