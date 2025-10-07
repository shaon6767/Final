import React from 'react'
import Banner from '../component/Banner'
import Products from '../component/Products'
import Latest from '../component/Latest'
import Trending from '../component/Trending'
import TrendingProducts from '../component/TrendingProducts'
import Category from '../component/Category'

const Home = () => {
    return (
        <>
            <Banner/>
            <Products />
            <Latest />
            <Trending />
            <TrendingProducts />
            <Category />

        </>
    )
}

export default Home