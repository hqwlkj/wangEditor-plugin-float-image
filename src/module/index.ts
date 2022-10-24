/**
 * @description module entry
 * @author Yanghc
 */

import './local' // 多语言

import {IModuleConf} from '@wangeditor/editor'
import withImage from './plugin'
import {renderImageConf} from './render-elem'
import elemToHtmlConf from './elem-to-html'
import {parseHtmlConf} from './parse-elem-html'
import {imageFloatLeftMenuConf, imageFloatRightMenuConf, imageFloatNoneMenuConf} from './menu'

const module: Partial<IModuleConf> = {
  editorPlugin: withImage,
  renderElems: [renderImageConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [imageFloatLeftMenuConf, imageFloatRightMenuConf, imageFloatNoneMenuConf],
}

export default module
