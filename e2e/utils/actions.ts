import { elementById, elementByText } from './matchers'

export const tapText = async (text: string) => {
  return elementByText(text).tap()
}

export const tapId = async (text: string) => {
  return elementById(text).tap()
}

export const goBack = async () => {
  return tapText('首页')
}
