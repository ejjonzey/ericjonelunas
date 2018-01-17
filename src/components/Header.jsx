import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
background-color: #fc697a;
`

const Header = () => {
  return (
  <Navbar>
    <div className='navWide'>
      <div className='wideDiv'>
        <a href='#'>About Me</a>
      </div>
    </div>
  </Navbar>
  );
};

export default Header;

// const Header = () => (
//   <section className='header' id='header'>
//     <nav className='navbar'>
//       <div className='nav-left'>
//         <a className='link' onClick={() => window.location.reload()}>
//           <span className='bra'>〈</span>
//             Eric Jonelunas
//           <span className='ket'>〉</span>
//         </a>
//       </div>
//       <div className='nav-right'>
//         <a href='#projects'>
//           <span className='bra'>〈</span>
//             projects
//           <span className='ket'>〉</span>
//         </a>
//       </div>
//       <div className='nav-right'>
//         <a href='#contact'>
//           <span className='bra'>〈</span>
//             contact
//           <span className='ket'>〉</span>
//         </a>
//       </div>
//       <div>
//           <div className='nav-right'>
//             <a href='#skills'>
//                 <span className='bra'>〈</span>
//                 skills
//                 <span className='ket'>〉</span>
//             </a>
//         </div>
//       </div>
//     </nav>
//     <div className='content'>
//       <h1 className='title'>Eric Jonelunas</h1>
//       <h3 className='subtitle'>Fullstack Developer</h3>
//     </div>
//     <div className='triangle'></div>
//   </section>
// )

//  export default Header;
