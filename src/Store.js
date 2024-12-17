import {creatStore} from 'react-redux'
import { productsList } from './ProductList'

const initialState ={
    product :productsList,
    cardItem:[],
    wishList:[]
}

function reducer (state =initialState , action){

}

const store =creatStore(reducer,window._REDUX_DEVTOOLS_EXTENTION_?.())
console.log(store)