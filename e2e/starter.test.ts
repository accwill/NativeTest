import { device, expect, log } from 'detox'
import { goBack, tapId } from './utils/actions'
import { elementById, elementByText } from './utils/matchers'

const wait = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

describe('首页导航', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  it('Toast', async () => {
    await tapId('Toast')
    await expect(elementById('Toast')).toBeVisible()
    await tapId('showToast')
    await expect(elementByText('心怀感恩，负重前行')).toBeVisible()
    log.info.begin('等待Toast关闭')
    await wait(3000)
    log.info.end()
    await goBack()
  })

  beforeEach(async () => {})

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
