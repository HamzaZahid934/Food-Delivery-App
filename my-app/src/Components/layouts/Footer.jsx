import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center  fixed-bottom">
      <div className="container-fluid">

        <p>Sample Footer Content</p>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  )
}

export default Footer