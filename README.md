<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MarketPulse - Borsa Platformu</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
  <script src="scripts.js" defer></script>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo">MarketPulse</div>
    <div class="nav-links">
      <a href="#home">Ana Sayfa</a>
      <a href="#about">Kurumsal</a>
      <a href="#news">Haberler</a>
      <a href="#charts">Grafikler</a>
    </div>
    <div class="auth-buttons">
      <button class="btn-login">Giriş Yap</button>
      <button class="btn-register">Kayıt Ol</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Borsa Dünyasına Adım Atın</h1>
      <p>Gerçek zamanlı veriler, analizler ve haberlerle borsayı keşfedin.</p>
      <button class="btn-explore">Keşfet</button>
    </div>
  </section>

  <!-- Kurumsal Bölüm -->
  <section id="about" class="about">
    <h2>MarketPulse Hakkında</h2>
    <p>MarketPulse, borsa dünyasında güvenilir ve hızlı bir platform sunar. Amacımız, kullanıcılarımıza en doğru bilgileri ulaştırmaktır.</p>
    <div class="about-cards">
      <div class="card">
        <h3>🏆 Ödüllü Hizmet</h3>
        <p>En iyi borsa platformu ödülüne sahibiz.</p>
      </div>
      <div class="card">
        <h3>📈 Gerçek Zamanlı Veri</h3>
        <p>Anlık verilerle piyasayı takip edin.</p>
      </div>
      <div class="card">
        <h3>🛡️ Güvenli Platform</h3>
        <p>Verileriniz güvende.</p>
      </div>
    </div>
  </section>

  <!-- Haberler -->
  <section id="news" class="news">
    <h2>Son Haberler</h2>
    <div class="news-grid">
      <div class="news-card">
        <img src="https://via.placeholder.com/400x250" alt="Haber 1">
        <h3>BIST 100 Rekor Kırdı</h3>
        <p>BIST 100 endeksi tarihinin en yüksek seviyesine ulaştı.</p>
        <a href="#">Devamını Oku</a>
      </div>
      <!-- Diğer haber kartları buraya eklenecek -->
    </div>
  </section>

  <!-- Grafikler -->
  <section id="charts" class="charts">
    <h2>Canlı Grafikler</h2>
    <div class="chart-container">
      <canvas id="market-chart"></canvas>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2023 MarketPulse. Tüm hakları saklıdır.</p>
  </footer>
</body>
</html>
