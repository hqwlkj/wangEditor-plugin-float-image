/**
 * @description float-image element
 * @author Yanghc
 */

import { SlateText } from '@wangeditor/editor'

type EmptyText = {
  text: ''
}
export type LinkCardElement = {
  type: 'link-card'
  title: string
  link: string
  iconImgSrc?: string
  children: EmptyText[] // void 元素必须有一个空 text
}

// wangEditor 内部的 image elem
export type LinkElement = {
  type: 'image'
  url: string
  target?: string
  children: SlateText[]
}
