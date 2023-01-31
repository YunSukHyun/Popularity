import { configureStore } from '@reduxjs/toolkit'
import priconneReducer from './slice/priconneSlice'
import genshinReducer from './slice/genshinSlice'
const store = configureStore({
  reducer: {
    priconne: priconneReducer,
    genshin: genshinReducer
  }
})

export default store;