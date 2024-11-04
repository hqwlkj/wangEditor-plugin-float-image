/**
 * @description parse elem html test
 * @author Yanghc
 */

import $ from 'dom7'
import createEditor from '../utils/create-editor'
import {parseHtmlConf} from '../../src/module/parse-elem-html'

describe('parse elem html', () => {
  const editor = createEditor()

  it('parse html', () => {
    debugger;
    const $img = $(
      '<img src="hello.png" alt="hello" data-href="http://localhost/" width="10px" height="5px" />'
    )

    // match selector
    expect($img[0].matches(parseHtmlConf.selector)).toBeTruthy()

    // parse
    const res = parseHtmlConf.parseElemHtml($img[0], [], editor)
    console.log(res);
    expect(res)?.toEqual({
      type: 'image',
      src: 'hello.png',
      alt: 'hello',
      href: 'http://localhost/',
      style: {
        width: '10px',
        height: '5px',
        float: '',
      },
      children: [{ text: '' }],
    })
  })
})
