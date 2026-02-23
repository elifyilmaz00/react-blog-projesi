import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anasayfa from './pages/Anasayfa';
import YaziDetay from './pages/YaziDetay';
import YeniYazi from './pages/YeniYazi';
import './index.css'; // Global stiller için

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'React Öğreniyorum', content: 'Bugün state ve props öğrendim.' },
    { id: 2, title: 'React Router Harika', content: 'Sayfalar arası geçiş çok kolay.' }
  ]);

  const navigate = useNavigate(); // Programatik olarak yönlendirme yapmak için.

  // Yeni bir post ekleyen fonksiyon. Bunu YeniYazi component'ine prop olarak göndereceğiz.
  const handleAddPost = (post) => {
    const newPost = { id: Date.now(), ...post };
    setPosts([...posts, newPost]);
    // Post eklendikten sonra anasayfaya yönlendir.
    navigate('/'); 
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Anasayfa component'ine 'posts' dizisini prop olarak gönderiyoruz. */}
          <Route path="/" element={<Anasayfa posts={posts} />} />

          {/* YeniYazi component'ine post ekleme fonksiyonunu prop olarak gönderiyoruz. */}
          <Route path="/yeni-yazi" element={<YeniYazi onAddPost={handleAddPost} />} />

          {/* YaziDetay component'ine de tüm post'ları gönderiyoruz ki ID'ye göre doğru olanı bulabilsin. */}
          <Route path="/yazi/:id" element={<YaziDetay posts={posts} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;