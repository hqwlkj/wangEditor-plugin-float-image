/**
 * @description local test
 * @author Yanghc
 */

import '../../src/module/local'
import { i18nChangeLanguage, t } from '@wangeditor/editor'

describe('local', () => {
  it('zh-CN', () => {
    expect(t('float.none')).toBe('默认')
    expect(t('float.left')).toBe('左浮动')
    expect(t('float.right')).toBe('右浮动')
  })
  it('en', () => {
    i18nChangeLanguage('en')
    expect(t('float.none')).toBe('Default')
    expect(t('float.left')).toBe('Float Left')
    expect(t('float.right')).toBe('Float Right')
  })
})
