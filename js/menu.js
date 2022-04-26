document.addEventListener('DOMContentLoaded', () => {
   /* Menu event listeners */
  const menuHamburger = document.getElementById('menu-hamburger');
  const iconClose = document.getElementById('icon-close');
  const iconArrows = document.getElementsByClassName('icon-arrow');
  const menuMobile = document.getElementById('menu-mobile');

  menuHamburger.addEventListener('click', () => {
    if (!menuHamburger.classList.contains('hide')) {
      iconClose.classList.remove('hide');
      menuMobile.classList.remove('hide')
      menuHamburger.classList.add('hide');
    } else {
      menuHamburger.classList.remove('hide');
    }
  });

  iconClose.addEventListener('click', () => {
    if (!iconClose.classList.contains('hide')) {
      iconClose.classList.add('hide');
      menuMobile.classList.add('hide');
      menuHamburger.classList.remove('hide');
    }
  });

  for (let i = 0; i < iconArrows.length; i++) {
    const iconArrowEle = iconArrows[i];
    const sublistName = iconArrowEle.ariaLabel.split('-').at(-1);
    iconArrowEle.addEventListener('click', () => {
      const sublist = document.getElementById(`sublist-${sublistName}`);
      if (iconArrowEle.classList.contains('sublist-closed')) {
        sublist.classList.remove('hide');
        iconArrowEle.classList.remove('sublist-closed');
        iconArrowEle.classList.add('sublist-opened');
      } else {
        sublist.classList.add('hide');
        iconArrowEle.classList.remove('sublist-opened');
        iconArrowEle.classList.add('sublist-closed');
      }
    });
  }
});