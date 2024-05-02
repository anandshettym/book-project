import React from 'react'
import "./loader.css"
import LoaderImg from "../../images/loader.svg";


function Loader() {
  return (
      <div className='loader flex flex-c'>
        <img src = {LoaderImg} alt = "loader" />
      </div>
    )

}

export default Loader
