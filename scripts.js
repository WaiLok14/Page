// 全站的 JavaScript 文件
// 目前主要為空，因為移除了首頁輪播圖功能
// 你可以在這裡添加未來可能需要的互動效果，例如圖片燈箱效果等

// 示例：簡單的平滑滾動到錨點 (如果需要)
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// 示例：給導航欄添加滾動時的細微陰影變化 (可選)
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('header');
//   if (window.scrollY > 10) {
//     header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
//   } else {
//     header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.03)';
//   }
// });

// 等待DOM內容完全加載
document.addEventListener('DOMContentLoaded', function() {
  // 導航欄滾動效果
  const header = document.querySelector('header');
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('nav');
  const mobileNav = document.querySelector('.mobile-nav');
  
  // 監聽滾動事件
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // 移動端選單按鈕點擊事件
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuButton.classList.toggle('active');
    });
  }
  
  // 點擊導航連結時關閉選單
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      menuButton.classList.remove('active');
    });
  });

  // 行動端選單按鈕點擊事件
  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
      menuButton.classList.toggle('open');
    });
  }

  // 點擊行動選單連結時關閉選單
  if (mobileNav) {
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        menuButton.classList.remove('open');
      });
    });
  }

  // 點擊 mobile-nav 背景關閉選單
  if (mobileNav) {
    mobileNav.addEventListener('click', function(e) {
      if (e.target === mobileNav) {
        mobileNav.classList.remove('open');
        if (menuButton) menuButton.classList.remove('open');
      }
    });
  }
  
  // 圖片延遲加載功能已關閉
  // 其他圖片優化選項包括:
  // 1. 使用瀏覽器原生 loading="lazy" 屬性
  // 2. 使用 <picture> 元素和 srcset 屬性提供不同尺寸圖片
  // 3. 使用現代圖片格式如 WebP 和 AVIF
  // 4. 適當調整圖片質量和尺寸，避免過大文件
  // 5. 使用 CDN 提供圖片資源
  
  // 燈箱功能
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxImages = document.querySelectorAll('.lightbox-image');
  
  // 點擊圖片打開燈箱
  lightboxImages.forEach(img => {
    img.addEventListener('click', function() {
      lightbox.classList.add('open');
      lightboxImg.src = this.getAttribute('data-full') || this.src;
      lightboxCaption.innerHTML = this.alt;
      document.body.style.overflow = 'hidden';
    });
  });

  // 點擊關閉按鈕關閉燈箱
  if (lightboxClose) {
    lightboxClose.addEventListener('click', function() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // 點擊燈箱背景關閉燈箱
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === this) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 按ESC鍵關閉燈箱
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});