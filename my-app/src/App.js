import Anasayfa from './components/anasayfa/Anasayfa';
import Navbar from './components/navbar/Navbar'
import './App.scss';
import Iletisim from './components/iletişim/Iletisim';
import Bilgim from './components/bilgilerim/Bilgim';
import Gecis from './components/gecissayfalari/Gecis';
import Gecis2 from './components/gecis2/Gecis2';


function App() {
  return (
    <div>
      <section id='Anasayfa'>
        <Navbar />
        <Anasayfa />
        
      </section>
      <section><Gecis/></section>
      <section id='Bilgim'><Bilgim/></section>
      <section><Gecis2/></section>
      

      <section id='İletişim'> <Iletisim />  </section>
      
    </div>
  );
}

export default App;
