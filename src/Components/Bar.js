import React from 'react'

function Bar({change,product,set,title,sett}) {
    return (
        <div className='mt-3'>
            <div className="card text-center">
                <div className="card-header">
                    <h1 className='navbar-brand'>{title}</h1>
                    <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <button className='nav-link' onClick={function(){set(product); sett('ALL')}}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>change(`jewelery`)}>jewelery</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>change(`electronics`)}>electronics</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>change(`men's clothing`)}>men's clothing</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={()=>change(`women's clothing`)}>women's clothing</button>
                        </li>  
                    </ul>
                </div>
            </div>
            </div>
            )
}

            export default Bar
