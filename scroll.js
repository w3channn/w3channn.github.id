window.onload = () => {
  const track = document.getElementById('carouselTrack');
  const banners = track.children;
  let index = 0;

  setInterval(() => {
    index++;
    if (index >= banners.length) {
      index = 0;
    }
    const scrollAmount = banners[0].offsetWidth * index;
    track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 2000);
};
