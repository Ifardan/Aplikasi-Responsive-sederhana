{/* <script>
    // =============== JS minimal untuk theming & utilitas ===============
    // Simpan preferensi tema di localStorage. Jika belum ada, gunakan prefers-color-scheme.
    (function initTheme() {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') document.body.setAttribute('data-theme', saved);
    })();

    document.getElementById('themeToggle').addEventListener('click', function() {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });

    // Tahun otomatis di footer
    document.getElementById('year').textContent = new Date().getFullYear();
  </script> */}