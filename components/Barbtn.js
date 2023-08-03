import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../css/master.css';

const Barbtn = (props) => {

  const barsty = {
    width: '185px',
    height: '60px',
    font_size: '18px',
    border: '0',
    background: 'none',
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '50px'
  }

  return (
    <div>
      <Link to = {props.link}>
        <button style={barsty} className='barbtn'>
          <span>자세히 알아보기</span>
        </button>
      </Link>
    </div>
  )
}

export default Barbtn