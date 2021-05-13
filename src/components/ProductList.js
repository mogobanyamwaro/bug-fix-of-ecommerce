import React from 'react'
import Product from './Product'
import Title from './Title'
import styled from 'styled-components'
import {useGlobalContext} from '../context'


function ProductList() {
    const {products} = useGlobalContext()
    return (
      <React.Fragment>
          <ProductWrapper className = "py-5">
             <div className="container">
                  <Title name = "our" title ="products"/>
                  <div className="row">
                      {products.map(product=>{
                          return <Product key = {product.id} product ={product}/>
                      })}

                  </div>
             </div>

          </ProductWrapper>
      </React.Fragment>
    )
}

export default ProductList

const ProductWrapper = styled.section ``;