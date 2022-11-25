import React from 'react'

export default class ErrorBoundary extends React.Component<{
  fallback?: any
  children: any
}> {
  state: {
    hasError: boolean
  }
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack)
    console.log('erro', error, info)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>我是错误信息</div>
    }

    return this.props.children
  }
}
