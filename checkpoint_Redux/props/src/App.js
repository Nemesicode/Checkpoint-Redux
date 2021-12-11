import React from 'react';
import ProfilComponent from './profil/ProfilComponent';

function App() {
  return (
    <div className="App">
      <ProfilComponent fullName='Abdoulaye Diallo'
      bio='Etudiant Gomycode'
      profession='Developpeur WEB'
      myimage='https://wallpapershome.com/images/pages/pic_h/23660.jpg'
      handleName={()=>alert('Abdoulaye Diallo')}/>
    </div>
  );
}
export default App;