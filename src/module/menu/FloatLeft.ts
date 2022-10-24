/**
 * @description float image left
 * @author Yanghc
 */

import { t } from '@wangeditor/editor'
import ImageFloatBaseClass from './FloatBase'
import { LEFT_FLOAT_SVG } from '../../constants/icon-svg'

class FloatLeft extends ImageFloatBaseClass {
  readonly title = t('float.left') // 菜单标题
  readonly value = 'left' // css float 的值
  readonly iconSvg = LEFT_FLOAT_SVG
}

export default FloatLeft
