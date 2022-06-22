import React from 'react'

function Products({ det }) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {det.map(product =>
                        <div className="col-md-4" key={product.id}>
                            <div className="my-3">
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt="..." height={'250px'} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h3>PRICE :${product.price}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Products
