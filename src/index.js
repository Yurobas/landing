document.addEventListener("DOMContentLoaded", () => {
  // Табы схемы очистки
  +function schemeTabs() {
    const tabs = [...document.querySelectorAll('[data-scheme-tab]')];
    const contents = [...document.querySelectorAll('[data-scheme-content]')];

    tabs.forEach((tab, ndx) => {
      tab.addEventListener('click', event => {
        event.preventDefault()
        openTab(ndx);
        openContent(ndx);
      })
    })

    function openTab(ndx) {
      tabs.forEach(tab => tab.classList.remove('--active'))
      tabs[ndx].classList.add('--active');
    }

    function openContent(ndx) {
      if (!contents[ndx]) return console.error('Нет блока с контентом!');

      let current = contents[ndx];
      let inner = current.querySelector('.scheme-block__content');
      let height = inner.getBoundingClientRect().height + 'px';

      contents.forEach(content => {
        content.style.maxHeight = '0';
      })

      current.style.maxHeight = height;

      let arrow = document.querySelector('.scheme-block__arrow');
      arrow.classList.remove('--active')
      setTimeout(() => {
        arrow.classList.add('--active')
      }, 32);
    }
  }();

  // Параллакс
  +function parallaxPlastic() {
    let parallax = {
      plastic: {
        el: null,
        bg: {
          el: null,
          max: null
        },
        obj: {
          el: null,
          max: 50
        }
      },
      stats: {
        el: null,
        bg: {
          el: null,
          max: null
        },
        first: {
          el: null,
          max: null
        },
        second: {
          el: null,
          max: null
        }
      }
    }

    parallax.plastic.el = document.querySelector('[data-parallax-plastic]');
    parallax.plastic.obj.el = document.querySelector('[data-parallax-plastic-obj]');
    parallax.plastic.bg.el = document.querySelector('[data-parallax-plastic-bg]');

    parallax.plastic.bg.el.addEventListener('load', () => {
      parallax.plastic.bg.max = (parallax.plastic.bg.el.getBoundingClientRect().width - parallax.plastic.el.getBoundingClientRect().width) / 2;
    })

    parallax.stats.el = document.querySelector('[data-parallax-stats]');
    parallax.stats.first.el = document.querySelector('[data-parallax-stats-first]');
    parallax.stats.first.el.addEventListener('load', () => {
      parallax.stats.first.max = (parallax.stats.first.el.getBoundingClientRect().width - parallax.stats.el.getBoundingClientRect().width) / 4;
    })
    
    parallax.stats.second.el = document.querySelector('[data-parallax-stats-second]');
    parallax.stats.second.el.addEventListener('load', () => {
      parallax.stats.second.max = (parallax.stats.second.el.getBoundingClientRect().width - parallax.stats.el.getBoundingClientRect().width) / 4;
    })
    
    parallax.stats.bg.el = document.querySelector('[data-parallax-stats-bg]');
    parallax.stats.bg.el.addEventListener('load', () => {
      parallax.stats.bg.max = (parallax.stats.bg.el.getBoundingClientRect().width - parallax.stats.el.getBoundingClientRect().width) / 2;
    })

    const screen = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
      }

      const center = {
        x: screen.width / 2,
        y: screen.height / 2
      }

      const current = {
        x: center.x - mouse.x,
        y: center.y - mouse.y
      }

      const mod = {
        x: current.x / center.x,
        y: current.y / center.y
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (parallax.plastic.bg.el !== null) {
            parallax.plastic.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.plastic.bg.max * mod.x * -1}px), calc(-50% + ${parallax.plastic.bg.max * mod.y * -1}px), 1px)`;
          }

          if (parallax.plastic.obj.el !== null) {
            parallax.plastic.obj.el.style.transform = `translate3d(${parallax.plastic.obj.max * mod.x * -1}px, ${parallax.plastic.obj.max * mod.y * -1}px, 1px)`;
          }

          if (parallax.stats.bg.el !== null) {
            parallax.stats.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.stats.bg.max * mod.x * -1}px), calc(-50% + ${parallax.stats.bg.max * mod.y * -1}px), 1px)`;
          }
          if (parallax.stats.first.el !== null) {
            parallax.stats.first.el.style.transform = `translate3d(calc(-50% + ${parallax.stats.second.max * mod.x * -1}px), ${parallax.stats.second.max * mod.y * -1}px, 1px)`;
          }
          if (parallax.stats.second.el !== null) {
            parallax.stats.second.el.style.transform = `translate3d(calc(-50% + ${parallax.stats.second.max * mod.x * -1}px + 50px), ${parallax.stats.second.max * mod.y * -1}px, 1px)`;
          }
        })
      })
    });
  }();
})
