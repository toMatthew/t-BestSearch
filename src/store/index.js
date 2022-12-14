import { configureStore } from '@reduxjs/toolkit'
import search from './features/data'

export default configureStore({
  reducer: {
    search
  },
})