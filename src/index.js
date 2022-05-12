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

  // Параллаксы
  parallaxPlastic();
  parallaxStats();
  parallaxMinerals();
  parallaxBenefits();
  parallaxServices();

  parallaxPlanet();
  parallaxHero();

  function parallaxPlastic() {
    const el = document.querySelector('[data-parallax-plastic]');
    const block = document.querySelector('[data-parallax-plastic-frame]');

    const bg = {
      el: null,
      max: null
    }

    const obj = {
      el: null,
      max: null
    }

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    bg.el = document.querySelector('[data-parallax-plastic-bg]');

    if (block.complete) {
      calc.height = block.getBoundingClientRect().height;
      calc.top = el.offsetTop - calc.height;
      calc.bottom = el.offsetTop + calc.height / 2;
      if (bg.el.complete) {
        bg.max = bg.el.getBoundingClientRect().height - calc.height;
        bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
      }
    } else {
      block.addEventListener('load', () => {
        calc.height = block.getBoundingClientRect().height;
        calc.top = el.offsetTop - calc.height;
        calc.bottom = el.offsetTop + calc.height / 2;
        bg.el.addEventListener('load', () => {
          bg.max = bg.el.getBoundingClientRect().height - calc.height;
          bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
        })
      })
    }

    obj.el = document.querySelector('[data-parallax-plastic-obj]');
    if (obj.el.complete) {
      obj.max = calc.height - obj.el.getBoundingClientRect().height;
      obj.el.style.transform = `translate3d(0, ${obj.max}px, 1px)`;
    } else {
      obj.el.addEventListener('load', () => {
        obj.max = calc.height - obj.el.getBoundingClientRect().height;
        obj.el.style.transform = `translate3d(0, ${obj.max}px, 1px)`;
      })
    }

    document.addEventListener('scroll', event => {
      let mod = null;
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            obj.el.style.transform = `translate3d(0, ${obj.max * mod}px, 1px)`;
            bg.el.style.transform = `translate3d(-50%, ${bg.max * mod}px, 1px)`;
          })
        })
      }
    })
  }

  function parallaxStats() {
    const el = document.querySelector('[data-parallax-stats]');
    const block = document.querySelector('[data-parallax-stats-frame]');
    
    const bg = {
      el: null,
      max: null
    }

    const first = {
      el: null,
      max: null
    }

    const second = {
      el: null,
      max: null
    }

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    bg.el = document.querySelector('[data-parallax-stats-bg]');
    first.el = document.querySelector('[data-parallax-stats-first]');
    second.el = document.querySelector('[data-parallax-stats-second]');

    if (block.complete) {
      calc.height = block.getBoundingClientRect().height;
      calc.top = el.offsetTop - calc.height;
      calc.bottom = el.offsetTop + calc.height / 2;
      first.max = calc.height / 5;
      second.max = calc.height / 2;
      first.el.style.transform = `translate3d(-50%, ${first.max}px, 1px)`;
      second.el.style.transform = `translate3d(-50%, ${second.max}px, 1px)`;
      if (bg.el.complete) {
        bg.max = bg.el.getBoundingClientRect().height - calc.height;
        bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
      }
    } else {
      block.addEventListener('load', () => {
        calc.height = block.getBoundingClientRect().height;
        calc.top = el.offsetTop - calc.height;
        calc.bottom = el.offsetTop + calc.height / 2;
        first.max = calc.height / 5;
        second.max = calc.height / 2;
        first.el.style.transform = `translate3d(-50%, ${first.max}px, 1px)`;
        second.el.style.transform = `translate3d(-50%, ${second.max}px, 1px)`;
        bg.el.addEventListener('load', () => {
          bg.max = bg.el.getBoundingClientRect().height - calc.height;
          bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
        })
      })
    }

    document.addEventListener('scroll', event => {
      let mod = null;
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            first.el.style.transform = `translate3d(-50%, ${first.max * mod}px, 1px)`;
            second.el.style.transform = `translate3d(-50%, ${second.max * mod}px, 1px)`;
            bg.el.style.transform = `translate3d(-50%, ${bg.max * mod}px, 1px)`;
          })
        })
      }
    })
  }

  function parallaxServices() {
    const el = document.querySelector('[data-parallax-service]');
    const block = document.querySelector('[data-parallax-service-frame]');

    const car = {
      el: null,
      max: null
    }

    const app = {
      el: null,
      max: null
    }

    const after = {
      el: null,
      max: null
    }

    const bg = {
      el: null,
      max: null
    }

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    car.el = document.querySelector('[data-parallax-service-car]');
    app.el = document.querySelector('[data-parallax-service-app]');
    after.el = document.querySelector('[data-parallax-service-app-after]');
    bg.el = document.querySelector('[data-parallax-service-bg]');

    if (block.complete) {
      calc.height = block.getBoundingClientRect().height;
      calc.top = el.offsetTop;
      calc.bottom = el.offsetTop + calc.height;
      if (bg.el.complete) {
        bg.max = bg.el.getBoundingClientRect().height - calc.height;
        bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
      }
    } else {
      block.addEventListener('load', () => {
        calc.height = block.getBoundingClientRect().height;
        calc.top = el.offsetTop ;
        calc.bottom = el.offsetTop + calc.height;
        bg.el.addEventListener('load', () => {
          bg.max = bg.el.getBoundingClientRect().height - calc.height;
          bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
        })
      })
    }

    if (car.el.complete) {
      car.max = car.el.getBoundingClientRect().height / 2.5;
      car.el.style.transform = `translate3d(0, ${car.max}px, 1px)`;
    } else {
      car.el.addEventListener('load', () => {
        car.max = car.el.getBoundingClientRect().height / 2.5;
        car.el.style.transform = `translate3d(0, ${car.max}px, 1px)`;
      })
    }

    if (app.el.complete) {
      app.max = app.el.getBoundingClientRect().height / 2;
      app.el.style.transform = `translate3d(0, ${app.max}px, 1px)`;
    } else {
      app.el.addEventListener('load', () => {
        app.max = app.el.getBoundingClientRect().height / 2;
        app.el.style.transform = `translate3d(0, ${app.max}px, 1px)`;
      })
    }

    if (after.el.complete) {
      after.max = after.el.getBoundingClientRect().height / 3;
      after.el.style.transform = `translate3d(0, ${after.max}px, 1px)`;
    } else {
      after.el.addEventListener('load', () => {
        after.max = after.el.getBoundingClientRect().height / 3;
        after.el.style.transform = `translate3d(0, ${after.max}px, 1px)`;
      })
    }

    document.addEventListener('scroll', event => {
      let mod = null;
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bg.el.style.transform = `translate3d(-50%, ${bg.max * mod}px, 1px)`;
            car.el.style.transform = `translate3d(0, ${car.max * mod}px, 1px)`;
            app.el.style.transform = `translate3d(0, ${app.max * mod}px, 1px)`;
            after.el.style.transform = `translate3d(-50%, calc(-50% + ${after.max * mod}px), 1px)`;
          })
        })
      }
    })
  }

  function parallaxBenefits() {
    const el = document.querySelector('[data-parallax-benefits]');
    const block = document.querySelector('[data-parallax-benefits-frame]');
    
    const bg ={
      el: null,
      max: null
    }

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    bg.el = document.querySelector('[data-parallax-benefits-bg]');

    if (block.complete) {
      calc.height = block.getBoundingClientRect().height;
      calc.top = el.offsetTop;
      calc.bottom = el.offsetTop + calc.height;
      if (bg.el.complete) {
        bg.max = bg.el.getBoundingClientRect().height - calc.height;
        bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
      }
    } else {
      block.addEventListener('load', () => {
        calc.height = block.getBoundingClientRect().height;
        calc.top = el.offsetTop;
        calc.bottom = el.offsetTop + calc.height;
        bg.el.addEventListener('load', () => {
          bg.max = bg.el.getBoundingClientRect().height - calc.height;
          bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
        })
      })
    }

    document.addEventListener('scroll', event => {
      let mod = null;
      console.log(pageYOffset, calc.top, calc.bottom)
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bg.el.style.transform = `translate3d(-50%, ${bg.max * mod}px, 1px)`;
          })
        })
      }
    })
  }

  function parallaxMinerals() {
    const el = document.querySelector('[data-parallax-minerals]');
    const block = document.querySelector('[data-parallax-minerals-frame]');

    const obj = {
      el: null,
      max: null
    }

    const bg = {
      el: null,
      max: null
    }

    const first = {
      el: null,
      max: 8
    }

    const second = {
      el: null,
      max: 14
    }

    const third = {
      el: null,
      max: 18
    }

    const fourth = {
      el: null,
      max: 22
    }

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    obj.el = document.querySelector('[data-parallax-minerals-obj]');

    if (block.complete) {
      calc.height = block.getBoundingClientRect().height;
      calc.top = el.offsetTop;
      calc.bottom = el.offsetTop + calc.height * 1.5;
      first.max = calc.height / 6;
      second.max = calc.height / 5;
      third.max = calc.height / 4;
      fourth.max = calc.height / 3;
      if (obj.el.complete) {
        obj.max = calc.height / 3;
      }
    } else {
      block.addEventListener('load', () => {
        calc.height = block.getBoundingClientRect().height;
        calc.top = el.offsetTop;
        calc.bottom = el.offsetTop + calc.height * 1.5;
        first.max = calc.height / 6;
        second.max = calc.height / 5;
        third.max = calc.height / 4;
        fourth.max = calc.height / 3;
        obj.el.addEventListener('load', () => {
          obj.max = calc.height / 3;
        })
      })
    }

    bg.el = document.querySelector('[data-parallax-minerals-bg]');
    if (bg.el.complete && block.complete) {
      bg.max = bg.el.getBoundingClientRect().height - calc.height;
      bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
    } else {
      bg.el.addEventListener('load', () => {
        bg.max = bg.el.getBoundingClientRect().height - calc.height;
        bg.el.style.transform = `translate3d(-50%, ${bg.max}px, 1px)`;
      })
    }

    first.el = document.querySelector('[data-parallax-minerals-1]');
    second.el = document.querySelector('[data-parallax-minerals-2]');
    third.el = document.querySelector('[data-parallax-minerals-3]');
    fourth.el = document.querySelector('[data-parallax-minerals-4]');

    document.addEventListener('scroll', event => {
      let mod = null;
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bg.el.style.transform = `translate3d(-50%, ${bg.max * mod}px, 1px)`;
            obj.el.style.transform = `translate3d(-50%, calc(-50% + ${obj.max * mod}px), 1px)`;
            first.el.style.transform = `translate3d(0, ${first.max * mod}px, 1px)`;
            second.el.style.transform = `translate3d(0, ${second.max * mod}px, 1px)`;
            third.el.style.transform = `translate3d(0, ${third.max * mod}px, 1px)`;
            fourth.el.style.transform = `translate3d(0, ${fourth.max * mod}px, 1px)`;
          })
        })
      }
    })
  }

  function parallaxPlanet() {
    const el = document.querySelector('[data-scroll-parallax-planet]');

    const calc = {
      top: null,
      bottom: null,
      height: null
    }

    const obj = {
      el: null,
      height: null
    }

    obj.el = el.querySelector('[data-scroll-parallax-planet-obj]');
    if (obj.el.complete) {
      obj.height = obj.el.getBoundingClientRect().height / 3;
      calc.height = el.getBoundingClientRect().height;
      calc.top = el.offsetTop - calc.height;
      calc.bottom = el.offsetTop;
      obj.el.style.transform = `translate3d(0, ${obj.height / 2}px, 1px) rotate(-45deg)`;
    } else {
      obj.el.addEventListener('load', () => {
        obj.height = obj.el.getBoundingClientRect().height / 3;
        calc.height = el.getBoundingClientRect().height;
        calc.top = el.offsetTop - calc.height / 2;
        calc.bottom = el.offsetTop;
        obj.el.style.transform = `translate3d(0, ${obj.height / 2}px, 1px) rotate(-45deg)`;
      })
    }

    document.addEventListener('scroll', event => {
      let mod = null;
      if (pageYOffset >= calc.top && pageYOffset <= calc.bottom) {
        mod = (calc.bottom - pageYOffset) / calc.height;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            obj.el.style.transform = `translate3d(0, ${obj.height * mod}px, 1px) rotate(-45deg)`;
          })
        })
      }
    })
  }

  function parallaxHero() {
    const layer1 = document.querySelector('[data-scroll-parallax-hero-1]');
    const layer2 = document.querySelector('[data-scroll-parallax-hero-2]');
    const layer3 = document.querySelector('[data-scroll-parallax-hero-3]');
    


    document.addEventListener('scroll', event => {
      let step = pageYOffset / 100;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          layer1.style.transform = `translate3d(-50%, -${12 * step}px, 1px)`;
          layer2.style.transform = `translate3d(-50%, -${36 * step}px, 1px)`;
          layer3.style.transform = `translate3d(0, -${32 * step}px, 1px)`;
        })
      })
    })
  }

  // Модалки
  +function modals() {
    const wrapper = document.querySelector('.wrapper');
    const links = [...document.querySelectorAll('[data-modal]')];
    const modals = [...document.querySelectorAll('.modal')];

    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const type = link.href.split('#')[1];
        const modal = document.getElementById(type);
        openModal(modal);
      })
    })
    
    modals.forEach(modal => {
      const close = modal.querySelector('.modal__close');
      const container = modal.querySelector('.modal__container');

      close.addEventListener('click', event => {
        event.preventDefault();
        closeModal(modal);
      })
      modal.addEventListener('click', event => {
        const target = event.target;
        target === modal || target === container ? closeModal(modal) : false;
      });
    })

    document.body.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        modals.forEach(modal => {
          closeModal(modal);
        });
      }
    });

    function openModal(el) {
      el.classList.add('--active');
      wrapper.classList.add('--modal');
    }

    function closeModal(el) {
      el.classList.remove('--active');
      wrapper.classList.remove('--modal');
    }
  }();

  // Форма
  +function forms() {
    const forms = [...document.querySelectorAll('.form')];

    forms.forEach(form => {
      const formEl = form.querySelector('form');
      const policy = form.querySelector('[name="policy"]');
      const submit = form.querySelector('[type="submit"]');

      const nameLabel = form.querySelector('.--name');
      const nameInput = nameLabel.querySelector('input');

      const name = {
        label: nameLabel,
        input: nameInput,
        test: function() {
          if (this.input.value.length > 1) {
            let regexp = new RegExp('^([a-zа-яё ]+|\d+)$','gi');
            return regexp.test(this.input.value)
          } else {
            return false;
          }
        }
      }

      const phoneLabel = form.querySelector('.--phone');
      const phoneInput = phoneLabel.querySelector('input');

      const phone = {
        label: phoneLabel,
        input: phoneInput,
        mask: IMask(phoneInput, {
          mask: '+{7} (000) 000-00-00'
        }),
        test: function() {
          if (this.input.value.length === 18) {
            return true;
          } else {
            return false;
          }
        }
      }

      phone.mask.updateValue();

      form.addEventListener('submit', event => {
        event.preventDefault();
        if (validation(name, phone, policy)) {
          formEl.submit();
        } else {
          console.error('Форма не прошла валидацию и не отправилась!')
        }
      })

      name.input.addEventListener('input', () => {
        if (name.input.value.length > 0) {
          name.input.classList.add('--value');
          if (name.test()) {
            name.label.classList.add('--success');
            name.label.classList.remove('--error');
          } else {
            name.label.classList.add('--error');
            name.label.classList.remove('--success');
          }
        } else {
          name.input.classList.remove('--value');
        }
      })

      name.input.addEventListener('change', () => {
        if (name.test()) {
          name.label.classList.add('--success');
          name.label.classList.remove('--error');
        } else {
          name.label.classList.add('--error');
          name.label.classList.remove('--success');
        }

        if (name.input.value.length === 0 ) {
          name.label.classList.remove('--error');
          name.label.classList.remove('--success');
        }
      })

      phone.input.addEventListener('input', () => {
        if (phone.input.value.length > 0) {
          phone.input.classList.add('--value');
          if (phone.test()) {
            phone.label.classList.add('--success');
            phone.label.classList.remove('--error');
          } else {
            phone.label.classList.add('--error');
            phone.label.classList.remove('--success');
          }
        } else {
          phone.input.classList.remove('--value');
        }
      })

      phone.input.addEventListener('change', () => {
        if (phone.test()) {
          phone.label.classList.add('--success');
          phone.label.classList.remove('--error');
        } else {
          phone.label.classList.add('--error');
          phone.label.classList.remove('--success');
        }

        if (phone.input.value.length === 0 ) {
          phone.label.classList.remove('--error');
          phone.label.classList.remove('--success');
          phone.label.classList.remove('--warn');
        }
      })

      policy.addEventListener('change', () => {
        if (!policy.checked) {
          submit.classList.add('--disabled');
        } else {
          submit.classList.remove('--disabled');
        }
      })

      phone.mask.on("accept", function() {
        let value = phone.mask._unmaskedValue;
        if (value.length === 2) {
          let string = String(value).split('');
          if (+string[1] === 8 && !checked) {
            checked = true;
            mask.value = '+7 (';
            phone.label.classList.add('--warn');
          }
        }
      });

      phone.mask.on("complete", function () {
        let value = phone.mask._unmaskedValue;
        let string = String(value).split('');
        if (string[1] == 7 || string[1] == 8) {
          phone.label.classList.add('--warn');
        } else {
          phone.label.classList.remove('--warn');
        }
      });
    })

    function validation(name, phone, policy) {
      let check = false;

      if (!name.test()) {
        name.label.classList.add('--error');
        name.label.classList.remove('--success');
      }

      if (!phone.test()) {
        phone.label.classList.add('--error');
        phone.label.classList.remove('--success');
      }

      if (name.test() && phone.test() && policy.checked) {
        check = true; 
      }

      return check;
    }
  }();

  // Scroll top
  +function scrollTop() {
    const link = document.querySelector('[data-scroll-top]');
    const startEl = document.querySelector('section.hero');
    const startPosition = startEl.getBoundingClientRect().height;

    document.addEventListener('scroll', event => {
      const scroll = pageYOffset;
      if (scroll > startPosition) {
        link.classList.add('--show');
      } else {
        link.classList.remove('--show');
      }
    })

    link.addEventListener('click', event => {
      event.preventDefault();
      const top = document.body.getBoundingClientRect().top;
      let pageTo = window.scrollY + top;
      const time = Date.now();

      requestAnimationFrame(scroll);

      function scroll(){
        var timeFracion = (Date.now() - time) / 800;
        if (timeFracion > 1) {
          window.scrollTo(0, pageTo);
          return;
        }
        var multiple = 1 - Math.sin(Math.acos(timeFracion - 1));
        window.scrollTo(0,pageTo - top * multiple);
        requestAnimationFrame(scroll);
      }
    })
  }();

  // Анимация firewall
  +function firewallAnimation() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('--active')
        } else {
          entry.target.classList.remove('--active')
        }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };
    
    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector('.firewall__scheme');
    observer.observe(target);
  }();

  // Высота подвала
  +function footerHeight() {
    const wrapper = document.querySelector('.section:last-of-type');
    const footer = document.querySelector('.footer');
    const height = footer.getBoundingClientRect().height;

    wrapper.style.marginBottom = `${height}px`;
  }();
})
