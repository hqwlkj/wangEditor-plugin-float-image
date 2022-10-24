/**
 * @description image render elem
 * @author wangfupeng
 */

import {h, VNode} from 'snabbdom'
import {DomEditor, IDomEditor, SlateElement} from '@wangeditor/editor'
import {ImageElement} from './custom-types'
import {data} from "autoprefixer";

interface IImageSize {
  width?: string
  height?: string
  float?: string
}

/**
 * 未选中时，渲染 image container
 */
function renderContainer(
  editor: IDomEditor,
  elemNode: SlateElement,
  imageVnode: VNode,
  imageInfo: IImageSize
): VNode {
  const {width, height, float} = imageInfo
  const selected = DomEditor.isNodeSelected(editor, elemNode) // 当前节点是否选中

  const style: any = {}
  if (width) style.width = width
  if (height) style.height = height
  if (float) style.float = float

  return h(
    'div',
    {
      style: style,
      props: {
        // contentEditable: false,
        className: 'w-e-image-container',
      },
      dataset: {
        selected: selected ? 'true' : '', // 标记为 选中
      },
      on: {
        mousedown: event => event.preventDefault(),
      },
    },
    [imageVnode]
  )
}

function renderImage(elemNode: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  const {src, alt = '', href = '', style = {}} = elemNode as ImageElement
  const {width = '', height = '', float} = style

  const imageStyle: any = {}
  if (width) imageStyle.width = '100%'
  if (height) imageStyle.height = '100%'
  if (float) imageStyle.float = float

  // 【注意】void node 中，renderElem 不用处理 children 。core 会统一处理。
  // const vnode = <img style={imageStyle} src={src} alt={alt} data-href={href} />
  const vNode = h(
    'img',
    {
      style: imageStyle,
      src,
      alt,
      dataHref: href
    }
  )
  // 其他，渲染普通 image container
  return renderContainer(editor, elemNode, vNode, {width, height, float})
}

const renderImageConf = {
  type: 'image', // 和 elemNode.type 一致
  renderElem: renderImage,
}

export {renderImageConf}
