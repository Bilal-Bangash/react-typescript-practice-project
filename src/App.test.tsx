import React from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const mockStore = configureStore()

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={mockStore()}>
        <App />
      </Provider>
    </Router>,
  )
})
