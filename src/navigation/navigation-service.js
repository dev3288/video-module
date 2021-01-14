import { NavigationContainerRef, StackActions } from '@react-navigation/native'
import * as React from 'react'

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef()

function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}

function goBack() {
  navigationRef.current?.goBack()
}

export default {
  navigate,
  goBack,
  push,
}
