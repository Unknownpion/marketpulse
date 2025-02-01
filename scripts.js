// GSAP Animasyonları
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".btn-explore", { opacity: 0, y: 20, duration: 1, delay: 1 });

// Chart.js Örneği
const ctx = document.getElementById('market-chart').getContext('2d');
const marketChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
    datasets: [{
      label: 'BIST 100',
      data: [1000, 1200, 1100, 1300, 1400],
      borderColor: '#00FF00',
      fill: false,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});