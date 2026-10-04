const ADD = 'ADD';
const PRODUCTS_LOAD = 'PRODUCTS_LOAD';

const PRODUCT_SEARCH_FILTER = 'PRODUCT_SEARCH_FILTER';
const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER';
const PRODUCTS_SORT = 'PRODUCTS_SORT';


const products =[
    {
        id: 1,
        title: 'Велосипед',
        price: 45000,
        discount: 20
    },
    {
        id: 2,
        title: 'Самокат',   
        price: 45000,
        discount: 0
    },
    {
        id: 3,
        title: 'Лыжи',
        price: 45000,
        discount: 20
    },
    {
        id: 4,
        title: 'Сноуборд',
        price: 40000,
        discount: 0
    }
]

export const addProductAction = (title, price, discount) => {
    return {
        type: ADD,
        payload: {id: Date.now(), title, price, discount}
    }
}
export const productsLoadAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const productsSearchFilterAction = (payload) => ({type: PRODUCT_SEARCH_FILTER, payload});
export const productsResetFilterAction = (payload) => ({type: PRODUCTS_RESET_FILTER, payload});
export const productsSortAction = (payload) => ({type: PRODUCTS_SORT, payload});


export const productReducer = (state = products, action) =>{
    if (action.type === PRODUCTS_LOAD) {
        return action.payload.map(item => ({...item, show: true}));
    }else if (action.type === ADD) {
        return [...state, action.payload]
    }else if(action.type === PRODUCT_SEARCH_FILTER){
        return state.map(item => ({
             ...item,
             show: item.title.toLowerCase().startsWith(action.payload.toLowerCase())
         }));
     }else if(action.type === PRODUCTS_RESET_FILTER){
        return state.map(item => ({...item, show: true}));
    }else if(action.type === PRODUCTS_SORT){
        const direction = action.payload === 'desc' ? -1 : 1;
        return [...state].sort((a, b) => (a.price - b.price) * direction);
    }
    return state
}