import React from 'react'
import { Provider } from 'react-redux'
import { Main } from './src/screens/Main/Main'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { setupStore } from './src/store/store'
import ErrorBoundary from 'react-native-error-boundary'
import { Application } from './src/navigation'
import { StyleSheet } from 'react-native'
import { COLORS } from './src/styles'

const store = setupStore()

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Application />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

export default App
