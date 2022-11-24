import {
  EventMapBase,
  NavigationState,
  ParamListBase,
  RouteConfig,
} from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import ActionSheet from './screens/ActionSheet'
import AsyncModal from './screens/AsyncModal'
import Dropdown from './screens/Dropdown'
import Home from './screens/Home'
import Toast from './screens/Toast'

type i_RouterConfig = RouteConfig<
  ParamListBase,
  any,
  NavigationState,
  NativeStackNavigationOptions,
  EventMapBase
>

export const routerConfig: i_RouterConfig[] = [
  { name: 'Home', component: Home, options: { title: '首页' } },
  { name: 'Toast', component: Toast, options: { title: 'Toast' } },
  {
    name: 'AsyncModal',
    component: AsyncModal,
    options: { title: 'AsyncModal' },
  },
  { name: 'Dropdown', component: Dropdown, options: { title: 'Dropdown' } },
  {
    name: 'ActionSheet',
    component: ActionSheet,
    options: { title: 'ActionSheet' },
  },
]
