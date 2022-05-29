import React from 'react'
import Loader from './Loader'

const LoaderWrapper = ({ displayLoader, children }) => {
    return (
        <>
            {displayLoader ? <Loader /> : <>{ children }</>}
        </>
  )
}

export default LoaderWrapper