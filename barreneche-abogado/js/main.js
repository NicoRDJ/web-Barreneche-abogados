/* =================================================================
   BARRENECHE ABOGADO — Landing Page Luxury
   JavaScript principal
   - Navegación sticky + menú móvil
   - Animaciones de aparición (reveal) al hacer scroll
   - Scroll suave entre secciones
   - Formulario de contacto automatizado por correo (FormSubmit.co)
   ================================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navegación sticky ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var menuToggle = document.getElementById('menuToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Animaciones de aparición ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Scroll suave entre secciones ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (id && id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Formulario de contacto (automatizado por correo) ----------
     Usa FormSubmit.co: envía cada solicitud directamente al correo
     Barreneche1989@hotmail.com sin necesidad de servidor propio.
     IMPORTANTE: la PRIMERA vez que se envíe el formulario, FormSubmit
     enviará un correo de activación a esa dirección. Hay que abrir ese
     correo y confirmar (un solo clic) para activar el reenvío automático.
  -------------------------------------------------------------------- */
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');

  if (form) {
    var submitBtn = form.querySelector('.form-submit');
    var submitText = submitBtn ? submitBtn.querySelector('.submit-text') : null;
    var ENDPOINT = 'https://formsubmit.co/ajax/Barreneche1989@hotmail.com';

    function showFeedback(type, message) {
      if (!feedback) return;
      feedback.className = 'form-feedback show ' + type;
      var icon = type === 'success'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';
      feedback.innerHTML = icon + '<span>' + message + '</span>';
      feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function setLoading(loading) {
      if (!submitBtn) return;
      submitBtn.disabled = loading;
      if (loading) {
        submitBtn.innerHTML = '<span class="spinner"></span><span class="submit-text">Enviando…</span>';
      } else {
        submitBtn.innerHTML = '<span class="submit-text">Enviar solicitud</span>'
          + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación nativa
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      setLoading(true);
      if (feedback) feedback.className = 'form-feedback';

      var data = new FormData(form);

      fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) { return res.json(); })
      .then(function (json) {
        setLoading(false);
        if (json.success === true || json.success === 'true') {
          showFeedback('success',
            '¡Solicitud enviada con éxito! El equipo de Barreneche Abogado se pondrá en contacto con usted a la brevedad.');
          form.reset();
        } else {
          throw new Error('respuesta no exitosa');
        }
      })
      .catch(function () {
        setLoading(false);
        // Plan B: abrir el cliente de correo con los datos prellenados
        var nombre = encodeURIComponent(form.nombre ? form.nombre.value : '');
        var contacto = encodeURIComponent(form.contacto ? form.contacto.value : '');
        var asunto = encodeURIComponent(form.asunto ? form.asunto.value : 'Solicitud de asesoría');
        var mensaje = encodeURIComponent(
          'Nombre: ' + (form.nombre ? form.nombre.value : '') + '\n' +
          'Contacto: ' + (form.contacto ? form.contacto.value : '') + '\n' +
          'Tipo de caso: ' + (form.asunto ? form.asunto.value : '') + '\n\n' +
          (form.mensaje ? form.mensaje.value : '')
        );
        showFeedback('error',
          'No fue posible enviar el formulario automáticamente. Abriremos su correo para completar el envío…');
        setTimeout(function () {
          window.location.href = 'mailto:Barreneche1989@hotmail.com'
            + '?subject=' + asunto + '&body=' + mensaje;
        }, 1500);
      });
    });
  }

});
