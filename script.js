// Tunggu hingga dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Logika Simulasi Login
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulasi pengecekan sederhana
            const email = e.target.querySelector('input[type="email"]').value;
            const password = e.target.querySelector('input[type="password"]').value;

            if (email && password) {
                alert('Login Berhasil! Selamat datang di Hutan Hujan Tropis.');
                window.location.href = 'index.html'; // Pindah ke halaman utama
            } else {
                alert('Mohon isi email dan password Anda.');
            }
        });
    }

    // 2. Smooth Scroll untuk Navigasi
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Interaktivitas Kartu Klasifikasi (Efek Muncul saat Scroll)
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 4. Logika Logout Otomatis (Hanya untuk halaman logout.html)
    if (window.location.pathname.includes('logout.html')) {
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 5000); // Redirect ke login setelah 5 detik
    }
});

// Fitur Edukasi: Fungsi Donasi Sederhana
function handleDonation() {
    const amount = prompt("Masukkan jumlah donasi untuk pelestarian hutan (Rp):", "50000");
    if (amount) {
        alert("Terima kasih! Kontribusi Anda sebesar Rp" + amount + " sangat berarti bagi keberlangsungan hutan.");
    }
}
