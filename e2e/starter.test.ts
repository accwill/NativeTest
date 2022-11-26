import { device, expect } from 'detox'
import { goBack, tapId } from './utils/actions'
import { elementById, elementByText } from './utils/matchers'

describe('首页导航', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {})

  it('Toast', async () => {
    await tapId('Toast')
    await expect(elementById('Toast')).toBeVisible()
    await goBack()
    // await expect(elementById('ActionSheet')).toBeVisible()
    // await element(by.text('AsyncModal')).tap()
    // await element(by.text('Show Modal')).tap()
    // await element(by.text('取消')).tap()
  })

  it('AsyncModal', async () => {
    await tapId('AsyncModal')
    const btn = elementByText('Show Modal')
    await expect(btn).toBeVisible()
    await btn.tap()
    await expect(btn).toBeNotVisible()
    const okBtn = elementByText('确定')
    await expect(okBtn).toBeVisible()
    await okBtn.tap()
    await goBack()
  })

  it('Dropdown', async () => {
    await tapId('Dropdown')
    await expect(elementById('Dropdown')).toBeVisible()
    await goBack()
  })
})
