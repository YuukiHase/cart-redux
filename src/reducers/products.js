let initialState = [
    {
        id: 1,
        name: 'Iphone XS Max',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562294588/cart-redux/iPhone-Xs-Max_rk8ggs.jpg',
        description: 'Sản phẩm của Apple',
        price: 1249.00,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Iphone XS',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562294583/cart-redux/iPhone-Xs_g77luh.jpg',
        description: 'Sản phẩm của Apple',
        price: 1149.00,
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone XR',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562294681/cart-redux/iPhone-Xr_exvlb2.jpg',
        description: 'Sản phẩm của Apple',
        price: 899.00,
        inventory: 20,
        rating: 3
    },
    {
        id: 4,
        name: 'AirPod 2',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562301075/cart-redux/airpod_sh0u7f.jpg',
        description: 'Sản phẩm tai nghe của Apple',
        price: 199.00,
        inventory: 50,
        rating: 5
    },
    {
        id: 5,
        name: 'Samsung Galaxy S10',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562301217/cart-redux/samsung-galaxy-s10_bwer1g.jpg',
        description: 'Sản phẩm của Samsung',
        price: 899.99,
        inventory: 50,
        rating: 4
    },
    {
        id: 6,
        name: 'Samsung Galaxy S10 plus',
        image: 'https://res.cloudinary.com/yuukihase/image/upload/v1562301218/cart-redux/samsung-galaxy-s10-plus_ebgtjl.jpg',
        description: 'Sản phẩm của Samsung',
        price: 999.99,
        inventory: 50,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {

        default: return [...state];
    }
} 

export default products;