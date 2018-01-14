import React from 'react'

const Header = () => (
  <section className='header' id='header'>
    <nav className='navbar'>
      <div className='nav-left'>
        <a className='link' onClick={() => window.location.reload()}>
          <span className='bra'>〈</span>
            JDS
          <span className='ket'>〉</span>
        </a>
      </div>
      <div className='nav-right'>
        <a href='#projects'>
          <span className='bra'>〈</span>
            projects
          <span className='ket'>〉</span>
        </a>
      </div>
      <div className='nav-right'>
        <a href='#contact'>
          <span className='bra'>〈</span>
            contact
          <span className='ket'>〉</span>
        </a>
      </div>
    </nav>
    <div className='content'>
      <h1 className='title'>Jose Dario Sanchez</h1>
      <h3 className='subtitle'>Frontend Developer</h3>
    </div>
    <div className='triangle'></div>
  </section>
)

export default Header