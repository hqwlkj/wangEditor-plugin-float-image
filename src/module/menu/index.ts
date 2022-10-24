/**
 * @description menu index
 * @author Yanghc
 */

import ImageFloatNone from './FloatNone'
import ImageFloatLeft from './FloatLeft'
import ImageFloatRight from './FloatRight'

export const imageFloatNoneMenuConf = {
  key: 'imageFloatNone',
  factory() {
    return new ImageFloatNone()
  },
}

export const imageFloatLeftMenuConf = {
  key: 'imageFloatLeft',
  factory() {
    return new ImageFloatLeft()
  },
}

export const imageFloatRightMenuConf = {
  key: 'imageFloatRight',
  factory() {
    return new ImageFloatRight()
  },
}
