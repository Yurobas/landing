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
  const screen = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const center = {
    x: screen.width / 2,
    y: screen.height / 2
  }

  parallaxPlastic(center);
  parallaxStats(center);
  parallaxServices(center);
  parallaxBenefits(center);
  parallaxMinerals(center);

  function parallaxPlastic(center) {
    let parallax = {
      el: null,
      bg: {
        el: null,
        max: null
      },
      obj: {
        el: null,
        max: 50
      }
    }

    parallax.el = document.querySelector('[data-parallax-plastic]');
    parallax.obj.el = document.querySelector('[data-parallax-plastic-obj]');
    parallax.bg.el = document.querySelector('[data-parallax-plastic-bg]');
    parallax.bg.max = (parallax.bg.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 2;

    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
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
          parallax.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.bg.max * mod.x * -1}px), calc(-50% + ${parallax.bg.max * mod.y * -1}px), 1px)`;
          parallax.obj.el.style.transform = `translate3d(${parallax.obj.max * mod.x * -1}px, ${parallax.obj.max * mod.y * -1}px, 1px)`;
        })
      })
    });
  }

  function parallaxStats(center) {
    let parallax = {
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

    parallax.el = document.querySelector('[data-parallax-stats]');
    parallax.first.el = document.querySelector('[data-parallax-stats-first]');
    parallax.first.max = (parallax.first.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 4;
    
    parallax.second.el = document.querySelector('[data-parallax-stats-second]');
    parallax.second.max = (parallax.second.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 4;
    
    parallax.bg.el = document.querySelector('[data-parallax-stats-bg]');
    parallax.bg.max = (parallax.bg.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 2;

    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
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
          parallax.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.bg.max * mod.x * -1}px), calc(-50% + ${parallax.bg.max * mod.y * -1}px), 1px)`;
          parallax.first.el.style.transform = `translate3d(calc(-50% + ${parallax.second.max * mod.x * -1}px), ${parallax.second.max * mod.y * -1}px, 1px)`;
          parallax.second.el.style.transform = `translate3d(calc(-50% + ${parallax.second.max * mod.x * -1}px + 50px), ${parallax.second.max * mod.y * -1}px, 1px)`;
        })
      })
    });
  }

  function parallaxServices(center) {
    let parallax = {
      el: null,
      car: {
        el: null,
        max: 10
      },
      app: {
        el: null,
        max: 40
      },
      after: {
        el: null,
        max: 35
      },
      bg: {
        el: null,
        max: null
      }
    }

    parallax.el = document.querySelector('[data-parallax-service]');
    parallax.car.el = document.querySelector('[data-parallax-service-car]');
    parallax.app.el = document.querySelector('[data-parallax-service-app]');
    parallax.after.el = document.querySelector('[data-parallax-service-app-after]');
    parallax.bg.el = document.querySelector('[data-parallax-service-bg]');
    parallax.bg.max = (parallax.bg.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 2;
    parallax.car.max = parallax.bg.max * 2;
    parallax.app.max = parallax.bg.max * 5;
    parallax.after.max = parallax.bg.max * 4;

    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
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
          parallax.car.el.style.transform = `translate3d(${parallax.car.max * mod.x * -1}px, ${parallax.car.max * mod.y * -1}px, 1px)`;
          parallax.app.el.style.transform = `translate3d(${parallax.app.max * mod.x * -1}px, ${parallax.app.max * mod.y * -1}px, 1px)`;
          parallax.after.el.style.transform = `translate3d(calc(-50% + ${parallax.after.max * mod.x * -1}px), calc(-50% + ${parallax.after.max * mod.y * -1}px), 1px)`;
          parallax.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.bg.max * mod.x * -1}px), calc(-50% + ${parallax.bg.max * mod.y * -1}px), 1px)`;
        })
      })
    });
  }

  function parallaxBenefits(center) {
    let parallax = {
      el: null,
      bg: {
        el: null,
        max: null
      }
    }

    parallax.el = document.querySelector('[data-parallax-benefits]');
    parallax.bg.el = document.querySelector('[data-parallax-benefits-bg]');
    parallax.bg.max = (parallax.bg.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 2;

    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
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
          parallax.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.bg.max * mod.x * -1}px), calc(-50% + ${parallax.bg.max * mod.y * -1}px), 1px)`;
        })
      })
    });
  }

  function parallaxMinerals(center) {
    let parallax = {
      el: null,
      bg: {
        el: null,
        max: null
      },
      obj: {
        el: null,
        max: null
      }
    }

    parallax.el = document.querySelector('[data-parallax-minerals]');
    parallax.bg.el = document.querySelector('[data-parallax-minerals-bg]');
    parallax.bg.max = (parallax.bg.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 2;
    parallax.obj.el = document.querySelector('[data-parallax-minerals-obj]');
    parallax.obj.max = (parallax.obj.el.getBoundingClientRect().width - parallax.el.getBoundingClientRect().width) / 6;


    document.addEventListener('mousemove', event => {
      const mouse = {
        x: event.clientX === 0 ? event.clientX = 1 : event.clientX,
        y: event.clientY === 0 ? event.clientY = 1 : event.clientY
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
          parallax.bg.el.style.transform = `translate3d(calc(-50% + ${parallax.bg.max * mod.x * -1}px), calc(-50% + ${parallax.bg.max * mod.y * -1}px), 1px)`;
          parallax.obj.el.style.transform = `translate3d(calc(-50% + ${parallax.obj.max * mod.x * -1}px), calc(-50% + ${parallax.obj.max * mod.y * -1}px), 1px)`;
        })
      })
    });
  }
})
