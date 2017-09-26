import React, { Component } from 'react';
import Specialization from './Specialization'

const specs = [{
  language: "Git",
  description: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.",
  image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
},{
  language:"Ruby",
  description: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro \"Matz\" Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.[11] It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management.",
  image:"https://blog.joefallon.net/wp-content/uploads/2014/07/rubylang.png"
},{
  language: "Node.js",
  description: "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
},{
  language:"JavaScript",
  description: "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language developed by Sun Microsystems.",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png"
}];

class Specializations extends Component {
  
  render(){
    const bgStyles = {
      background: 'linear-gradient(135deg, #000000, #66CCFF)',
      padding: '36px',
    };
    const textStyles = {
      color: 'white',
      fontSize: '24px',
      lineHeight: '36px',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    };
    const bodyStyles = {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        textAlign: 'center',
    };
    return (
      <div style={bgStyles}>
      <div style={textStyles}>
      <div style={bodyStyles}>
        {specs.map((spec, i) => {
            return <Specialization key={i} language={spec.language} description={spec.description} image={spec.image}/>
        })}
      </div>
      </div>
      </div>
    );
  }
}

export default Specializations;