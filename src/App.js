import React from 'react';
import NavBar from './navbar'

function App() {
  const nav = [
    { title: 'home', lien: '#home', },
    {
      title: 'service', lien: '#service', subelement: [
        { title: 'For entrepeneurs', lien: "#entrepeneurs" },
        { title: 'For students', lien: '#students' },
        { title: 'For hobbysties', lien: '#hobbysties' }]
    },
    { title: 'contact', lien: '#contact' }
  ]
  return (
    <div className="App">
      <div class="container center">
        <NavBar nav={nav} />
      </div>
    </div>
  );
}
export default App;