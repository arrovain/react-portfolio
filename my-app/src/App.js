import Anasayfa from './components/anasayfa/Anasayfa';
import Navbar from './components/navbar/Navbar'
import './App.scss';
import Iletisim from './components/iletişim/Iletisim';
import Bilgim from './components/bilgilerim/Bilgim';


function App() {
  return (
    <div>
      <section id='Anasayfa'>
        <Navbar />
        <Anasayfa />
        
      </section>
      <section id='Bilgim'><Bilgim/>
      </section>

      <section id='İletişim'> <Iletisim />  </section>
      
    </div>
  );
}

export default App;
