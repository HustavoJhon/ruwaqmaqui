export function initProductGallery() {
  const changeMainImage = (imageSrc, button) => {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
      mainImage.src = imageSrc;
      document.querySelectorAll('.thumbnail-btn').forEach((btn) => {
        btn.classList.remove('border-[#D4AF37]', 'ring-2', 'ring-[#D4AF37]');
        btn.classList.add('border-gray-200');
      });
      if (button) {
        button.classList.remove('border-gray-200');
        button.classList.add('border-[#D4AF37]', 'ring-2', 'ring-[#D4AF37]');
      }
    }
  };

  const setup = () => {
    const mainImageContainer = document.getElementById('main-image-container');
    const mainImage = document.getElementById('main-product-image');

    if (mainImageContainer && mainImage) {
      mainImageContainer.addEventListener('mousemove', (e) => {
        const rect = mainImageContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        mainImage.style.transformOrigin = `${x}% ${y}%`;
        mainImage.style.transform = 'scale(1.5)';
      });

      mainImageContainer.addEventListener('mouseleave', () => {
        mainImage.style.transform = 'scale(1)';
        mainImage.style.transformOrigin = 'center center';
      });
    }

    document.querySelectorAll('.thumbnail-btn').forEach((button) => {
      button.addEventListener('click', () => {
        const imageSrc = button.getAttribute('data-image-src');
        if (imageSrc) {
          changeMainImage(imageSrc, button);
        }
      });
    });

    const firstThumbnail = document.querySelector('.thumbnail-btn');
    if (firstThumbnail) {
      firstThumbnail.classList.remove('border-gray-200');
      firstThumbnail.classList.add('border-[#D4AF37]', 'ring-2', 'ring-[#D4AF37]');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
}
