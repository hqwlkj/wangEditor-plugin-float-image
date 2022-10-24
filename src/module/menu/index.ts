/**
 * @description menu index
 * @author Yanghc
 */

import ConvertToLinkCard from './ConvertToLinkCard'
import { genConvertToLinkCardConfig } from './config'

export const floatImageMenuConf = {
  key: 'convertToLinkCard',
  factory() {
    return new ConvertToLinkCard()
  },

  // 默认的菜单菜单配置，将存储在 editorConfig.MENU_CONF[key] 中
  // 创建编辑器时，可通过 editorConfig.MENU_CONF[key] = {...} 来修改
  config: genConvertToLinkCardConfig(),
}
