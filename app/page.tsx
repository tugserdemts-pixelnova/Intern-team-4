export default function Home() {
  return (
    <div>
      <header className="nav">
        <div className="nav-inner">
          <span className="brand">Team 4</span>
          <nav className="nav-links">
            <div >About us</div>
            <div >Яаж барьдаг вэ?</div>
            <div >Баг</div>
          </nav>
        </div>
      </header>
 
      <main>
       
 
        <section id="mission" className="section">
          <h2>Манай багийн зорилго</h2>
          <p className="lede">
            Хэн ч байсан Монгол гэрийг анхнаас нь — хана, уни, эсгий бүрийг нь
            нэг нэгээр нь босгох буюу наад захын монгол ахуйг сурталчиллах.
          </p>
          <p>
            Дарсан элемент бүр тухайн хэсэг яагаад байдаг, юугаар хийгдсэн, тал
            нутгийн цаг агаарыг хэрхэн сөрдөг гэх мэт мэдээллүүдийг багтаана.
          </p>
        </section>
 
   
        <section id="build" className="section">
          <h2>Гэр барих үе шат</h2>
         
          <div className="list">
             <div className="list-item">
              <strong>1. Шалаа тавих</strong>
            </div>
           
          </div>
        </section>
 
       
        <section id="experience" className="section">
          <h2>Тоглоом дотор</h2>
         
          <ul style={{ paddingLeft: '20px' }}>
            <li>
              <strong> Story</strong> — Гэр яагаад нурсан бэ гэх шалтгааныг илэрхийлэх богино хэмжээний animation явна.
            </li>
            <li>
              <strong>Step-by-step Guide</strong> —Гэрийг ямар дарааллаар барих тухай зааварчилгаа.
            </li>
            <li>
              <strong>Language</strong> — Англи ба Монгол хэлнээс сонгон тоглох боломж
            </li>
            <li>
              <strong>Sound track</strong> — Тоглоомын турш Монгол ахуй, тал нутгийн уур амьсгалыг илэрхийлэх sound-track
            </li>
            <li>
              <strong>Game ending</strong> — Гэрийг бүрэн барьж дуусгаснаар төгсөнө.
            </li>
           
          </ul>
        </section>
 
       
        <section id="team" className="section">
          <h2>4-р баг</h2>
          <p className="section-sub">Гэр төслийг багийн гишүүд:</p>
          <ul className="team-grid">
            <li className="team-card">Отгонжаргал</li>
            <li className="team-card">Марлаа</li>
            <li className="team-card">Цэцэгсүрэн</li>
            <li className="team-card">Должинсүрэн</li>
            <li className="team-card">Төгс-Эрдэнэ</li>
            <li className="team-card">Төгс-Төгөлдөр</li>
          </ul>
        </section>
      </main>
 
     
    </div>
  );
}
 