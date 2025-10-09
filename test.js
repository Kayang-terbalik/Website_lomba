    document.querySelectorAll('a[href^="#"]').forEach(function(linkElement) {
      linkElement.addEventListener('click', function(event) {
        const hrefTujuan = linkElement.getAttribute('href');
        
        // Hanya proses jika href lebih dari satu karakter (bukan hanya "#")
        if (hrefTujuan.length > 1) {
          event.preventDefault();
          
          const targetElement = document.querySelector(hrefTujuan);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    const navigasiUtama = document.getElementById('navigasi-utama');
    const batangProgres = document.getElementById('batang-progres');
    
    window.addEventListener('scroll', function() {
  
      if (window.scrollY > 40) {
        navigasiUtama.classList.add('navigasi-bergulir');
      } else {
        navigasiUtama.classList.remove('navigasi-bergulir');
      }
      const elemenHTML = document.documentElement;
      const posisiScroll = elemenHTML.scrollTop || document.body.scrollTop;
      const tinggiTotal = elemenHTML.scrollHeight - elemenHTML.clientHeight;
      const persentase = posisiScroll / tinggiTotal;
      

      batangProgres.style.width = Math.min(100, Math.max(0, persentase * 100)) + '%';
    });

    const lapisanParallax = document.querySelectorAll('.lapisan-parallax');
    
    window.addEventListener('scroll', function() {
      const posisiScrollAtas = window.scrollY;
      
      lapisanParallax.forEach(function(lapisan) {
        const kecepatan = parseFloat(lapisan.dataset.kecepatan) || 0.3;
        
        lapisan.style.transform = 'translateY(' + (posisiScrollAtas * kecepatan) + 'px)';
      });
    });

    gsap.from('.konten-hero h1', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });
    
  
    gsap.from('.konten-hero p.teks-utama', {
      y: 20,
      opacity: 0,
      delay: 0.2,
      duration: 1
    });

    document.getElementById('tombol-swiss').addEventListener('click', function() {
      const kontenModal = document.getElementById('konten-modal-swiss');
      
    
      kontenModal.innerHTML = `
        <p>
          Swiss dikenal sebagai pusat inovasi terapi biologis berkat peran besar Roche dan Novartis. Roche, berdiri sejak 1896, memimpin pengembangan terapi biologis terutama untuk kanker dan penyakit autoimun, dengan produk revolusioner seperti Avastin dan Herceptin. Novartis fokus pada penyakit kronis, terapi gen, terapi sel, serta imunoterapi presisi, sambil mengembangkan teknologi penghantaran obat yang lebih aman dan efektif. Kombinasi riset intensif, teknologi maju, dan kolaborasi global menjadikan Swiss pemain utama dalam kemajuan terapi biologis dunia.
        </p>
        <p class='teks-redup'>
          Fokus pada kualitas manufaktur klinis, compliance, dan pipeline untuk 
          penyakit kronis membuat Swiss menjadi contoh bagaimana riset dapat 
          dipercepat menjadi produk klinis.
        </p>
      `;

      const modalSwiss = new bootstrap.Modal(document.getElementById('modal-swiss'));
      modalSwiss.show();
    });


const tombolSimulasi = document.getElementById('tombol-simulasi');
if (tombolSimulasi) {
  tombolSimulasi.addEventListener('click', function() {
    gsap.fromTo('.kartu-negara', 
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out'
      }
    );
  });
}
    
    document.querySelectorAll('.kartu-negara button').forEach(function(tombol) {
      tombol.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          tombol.click();
        }
      });
    });


    gsap.from('.kartu-negara', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out'
    });

    document.getElementById('tombol-amerika').addEventListener('click', function() {
  const modalAmerika = new bootstrap.Modal(document.getElementById('modal-amerika'));
  modalAmerika.show();
});

