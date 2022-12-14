/**
 * @description DOM 操作
 * @author Yanghc
 */


import $, {
  css,
  append,
  prepend,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  focus,
  attr,
  hide,
  show,
  parents,
  dataset,
  val,
  text,
  removeAttr,
  children,
  html,
  remove,
  find,
  width,
  height,
  Dom7Array,
  filter,
  empty,
} from 'dom7'
export { Dom7Array } from 'dom7'

if (css) $.fn.css = css
if (append) $.fn.append = append
if (prepend) $.fn.prepend = prepend
if (addClass) $.fn.addClass = addClass
if (removeClass) $.fn.removeClass = removeClass
if (hasClass) $.fn.hasClass = hasClass
if (on) $.fn.on = on
if (off) $.fn.off = off
if (focus) $.fn.focus = focus
if (attr) $.fn.attr = attr
if (removeAttr) $.fn.removeAttr = removeAttr
if (hide) $.fn.hide = hide
if (show) $.fn.show = show
if (parents) $.fn.parents = parents
if (dataset) $.fn.dataset = dataset
if (val) $.fn.val = val
if (text) $.fn.text = text
if (html) $.fn.html = html
if (children) $.fn.children = children
if (remove) $.fn.remove = remove
if (find) $.fn.find = find
if (width) $.fn.width = width
if (height) $.fn.height = height
if (filter) $.fn.filter = filter
if (empty) $.fn.empty = empty

export default $

// COMPAT: This is required to prevent TypeScript aliases from doing some very
// weird things for Slate's types with the same name as globals. (2019/11/27)
// https://github.com/microsoft/TypeScript/issues/35002
import DOMNode = globalThis.Node
import DOMComment = globalThis.Comment
import DOMElement = globalThis.Element
import DOMText = globalThis.Text
import DOMRange = globalThis.Range
import DOMSelection = globalThis.Selection
import DOMStaticRange = globalThis.StaticRange
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange }
