/**
 * @description float image right
 * @author Yanghc
 */

import { t } from '@wangeditor/editor'
import ImageFloatBaseClass from './FloatBase'
import { RIGHT_FLOAT_SVG } from '../../constants/icon-svg'

class FloatRight extends ImageFloatBaseClass {
  readonly title = t('float.right') // 菜单标题
  readonly value = 'right' // css float 的值
  readonly iconSvg = RIGHT_FLOAT_SVG
}

export default FloatRight
