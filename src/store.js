import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from '@/Slice/menuSlice'
import toolboxReducer from '@/Slice/toolboxSlice'

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        toolbox: toolboxReducer
    }
})