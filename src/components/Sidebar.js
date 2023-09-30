import React from 'react';

const Sidebar = () => (
  <aside style={{ position: 'fixed', top: 0, left: 100, width: 200 }}>
    <h2>Your Name</h2>
    <p>Short bio or tagline</p>
    <a href="https://github.com/joe5saia" target="_blank" rel="noopener noreferrer">GitHub</a><br />
    <a href="https://www.linkedin.com/in/joe-saia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </aside>
);

export default Sidebar;
