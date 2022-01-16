import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
    return (
        <div className='lg:mr-4 lg:ml-4'>
            <Header />
            {children}
        </div>
    )
}

export default Layout
