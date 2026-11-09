$(document).ready(function () {

  // =====================================================
  // 1. DATOS DE PRODUCTOS (agrega más copiando una línea)
  // =====================================================
  const productos = [
    // APIS
    { tab: 'apis', icono: '🍵', nombre: 'Api con Pastel', precio: 12, badge: 'Tradicional', desc: 'Api morado caliente con canela y clavo, acompañado de un pastel de queso frito.' },
    { tab: 'apis', icono: '🍵', nombre: 'Api Solo', precio: 7, badge: 'Caliente', desc: 'Vaso de api morado espeso, bien caliente y dulce.' },
    { tab: 'apis', icono: '🍵', nombre: 'Api Blanco con Pastel', precio: 12, badge: 'Tradicional', desc: 'Api blanco de maíz con un pastel recién frito y espolvoreado con azúcar.' },
    { tab: 'apis', icono: '🥐', nombre: 'Api con Buñuelo', precio: 13, badge: 'Combo', desc: 'Api morado acompañado de un buñuelo crocante con miel de caña.' },
    { tab: 'apis', icono: '🍵', nombre: 'Api Grande + 2 Pasteles', precio: 20, badge: 'Combo', desc: 'Jarro grande de api con dos pasteles de queso. Ideal para compartir.' },
    { tab: 'apis', icono: '🥟', nombre: 'Pastel de Queso', precio: 5, badge: 'Frito', desc: 'Pastel de masa frita relleno de queso, con azúcar flor encima.' },
    { tab: 'apis', icono: '🥐', nombre: 'Buñuelo con Miel', precio: 6, badge: 'Frito', desc: 'Buñuelo grande y crocante bañado en miel.' },

    // CAFÉS Y TÉS
    { tab: 'cafes', icono: '☕', nombre: 'Café Americano', precio: 10, badge: 'Caliente', desc: 'Café de los Yungas recién molido, servido en taza grande.' },
    { tab: 'cafes', icono: '☕', nombre: 'Cappuccino', precio: 14, badge: 'Caliente', desc: 'Espresso con leche vaporizada y espuma cremosa.' },
    { tab: 'cafes', icono: '☕', nombre: 'Café Latte', precio: 14, badge: 'Caliente', desc: 'Espresso suave con abundante leche caliente.' },
    { tab: 'cafes', icono: '🧊', nombre: 'Café Frío', precio: 15, badge: 'Frío', desc: 'Café con hielo y un toque de leche condensada.' },
    { tab: 'cafes', icono: '🫖', nombre: 'Té de Manzanilla', precio: 8, badge: 'Infusión', desc: 'Infusión natural de manzanilla, ideal para las tardes frías.' },
    { tab: 'cafes', icono: '🫖', nombre: 'Mate de Coca', precio: 7, badge: 'Infusión', desc: 'Mate de hoja de coca, muy bueno para la altura.' },
    { tab: 'cafes', icono: '🫖', nombre: 'Té con Limón', precio: 8, badge: 'Infusión', desc: 'Té negro con limón fresco y miel.' },
    { tab: 'cafes', icono: '🍫', nombre: 'Chocolate Caliente', precio: 12, badge: 'Caliente', desc: 'Chocolate espeso hecho con cacao boliviano.' },

    // POSTRES
    { tab: 'postres', icono: '🍰', nombre: 'Pastel de Chocolate', precio: 15, badge: 'Dulce', desc: 'Porción de pastel húmedo de chocolate con cobertura de ganache.' },
    { tab: 'postres', icono: '🍰', nombre: 'Tres Leches', precio: 14, badge: 'Dulce', desc: 'Bizcocho bañado en tres leches con crema chantilly.' },
    { tab: 'postres', icono: '🧁', nombre: 'Cheesecake de Frutilla', precio: 16, badge: 'Dulce', desc: 'Cheesecake cremoso con salsa de frutilla natural.' },
    { tab: 'postres', icono: '🍫', nombre: 'Brownie', precio: 10, badge: 'Dulce', desc: 'Brownie de chocolate con nueces, tibio y suave.' },
    { tab: 'postres', icono: '🍩', nombre: 'Rosquete', precio: 4, badge: 'Tradicional', desc: 'Galleta tradicional crocante de maíz con anís.' },
    { tab: 'postres', icono: '🍮', nombre: 'Flan de Leche', precio: 9, badge: 'Dulce', desc: 'Flan casero con caramelo.' },
    { tab: 'postres', icono: '🥧', nombre: 'Tarta de Manzana', precio: 13, badge: 'Dulce', desc: 'Tarta horneada con manzana y canela.' },

    // SALADOS
    { tab: 'salados', icono: '🥪', nombre: 'Sándwich de Pollo', precio: 18, badge: 'Salado', desc: 'Pan tostado con pollo deshilachado, lechuga, tomate y mayonesa.' },
    { tab: 'salados', icono: '🥖', nombre: 'Sándwich de Chola', precio: 16, badge: 'Salado', desc: 'Pan crujiente con cerdo al horno, salsa picante y encurtido.' },
    { tab: 'salados', icono: '🥪', nombre: 'Sándwich Jamón y Queso', precio: 14, badge: 'Salado', desc: 'Clásico tostado con jamón, queso derretido y tomate.' },
    { tab: 'salados', icono: '🥟', nombre: 'Salteña', precio: 7, badge: 'Horneada', desc: 'Empanada jugosa rellena de carne, papa y arvejas.' },
    { tab: 'salados', icono: '🥟', nombre: 'Tucumana', precio: 8, badge: 'Frita', desc: 'Empanada frita rellena de carne y huevo, con ensalada y llajua.' },
    { tab: 'salados', icono: '🥐', nombre: 'Croissant de Jamón', precio: 12, badge: 'Salado', desc: 'Croissant horneado relleno de jamón y queso.' },
    { tab: 'salados', icono: '🌭', nombre: 'Pan de Queso', precio: 5, badge: 'Horneado', desc: 'Pancito suave relleno de queso, recién salido del horno.' },

    // REFRESCOS
    { tab: 'refrescos', icono: '🥤', nombre: 'Sultana', precio: 9, badge: 'Refresco', desc: 'Refresco frío de cáscara de uva, canela y frutas.' },
    { tab: 'refrescos', icono: '🥤', nombre: 'Mocochinchi', precio: 9, badge: 'Tradicional', desc: 'Refresco de durazno deshidratado con canela, servido helado.' },
    { tab: 'refrescos', icono: '🍊', nombre: 'Jugo de Naranja', precio: 10, badge: 'Natural', desc: 'Jugo de naranja recién exprimido.' },
    { tab: 'refrescos', icono: '🍋', nombre: 'Limonada', precio: 8, badge: 'Natural', desc: 'Limonada fresca con hielo y hojitas de menta.' },
    { tab: 'refrescos', icono: '🍓', nombre: 'Batido de Frutilla', precio: 13, badge: 'Natural', desc: 'Batido cremoso de frutilla con leche.' }
  ];

  let pedido = {};          // { nombre: { precio, cantidad } }
  let intervalo = null;     // setInterval del modal

  // =====================================================
  // 2. GENERAR TARJETAS EN CADA PANEL
  // =====================================================
  productos.forEach(function (p) {
    const html =
      '<div class="card" data-name="' + p.nombre + '" data-price="' + p.precio + '">' +
        '<div class="icono">' + p.icono + '</div>' +
        '<span class="badge">' + p.badge + '</span>' +
        '<h3>' + p.nombre + '</h3>' +
        '<p class="precio">' + p.precio + ' BOB</p>' +
        '<div class="detalle">' + p.desc + '</div>' +
        '<button class="btn-detalle">Ver Detalles</button>' +
        '<button class="btn-agregar">Agregar</button>' +
      '</div>';
    $('#panel-' + p.tab + ' .grid').append(html);
  });

  // Mostrar solo el primer panel al inicio
  $('.panel').hide();
  $('#panel-apis').show();

  // =====================================================
  // 3. PESTAÑAS
  // =====================================================
  $('.tab').click(function () {
    $('.tab').removeClass('active');
    $(this).addClass('active');

    $('#buscador').val('');
    $('.card').show();
    $('#sinResultados').hide();

    $('.panel').hide();
    $('#panel-' + $(this).data('tab')).fadeIn(400);
  });

  // =====================================================
  // 4. BUSCADOR (keyup) - busca en la pestaña activa
  // =====================================================
  $('#buscador').on('keyup', function () {
    const texto = $(this).val().toLowerCase();
    const panel = $('.panel:visible');
    let visibles = 0;

    panel.find('.card').each(function () {
      const nombre = $(this).data('name').toLowerCase();
      if (nombre.includes(texto)) {
        $(this).show();
        visibles++;
      } else {
        $(this).hide();
      }
    });

    $('#sinResultados').toggle(visibles === 0);
  });

  // =====================================================
  // 5. ACORDEÓN DE DETALLES (slideToggle)
  // =====================================================
  $(document).on('click', '.btn-detalle', function () {
    $(this).siblings('.detalle').slideToggle('slow');
  });

  // =====================================================
  // 6. AGREGAR / QUITAR DEL PEDIDO
  // =====================================================
  $(document).on('click', '.btn-agregar', function () {
    const card = $(this).closest('.card');
    const nombre = card.data('name');
    const precio = Number(card.data('price'));

    if (pedido[nombre]) {
      pedido[nombre].cantidad++;
    } else {
      pedido[nombre] = { precio: precio, cantidad: 1 };
    }
    renderPedido();
    mostrarToast('✅ ' + nombre + ' agregado', 'ok');
  });

  $('#listaPedido').on('click', '.quitar', function () {
    const nombre = $(this).data('nombre');
    pedido[nombre].cantidad--;
    if (pedido[nombre].cantidad === 0) delete pedido[nombre];
    renderPedido();
  });

  function renderPedido() {
    $('#listaPedido').empty();
    let total = 0;

    for (const nombre in pedido) {
      const item = pedido[nombre];
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      $('#listaPedido').append(
        '<li><span>' + item.cantidad + 'x ' + nombre + '</span>' +
        '<span>' + subtotal + ' BOB <button class="quitar" data-nombre="' + nombre + '">−</button></span></li>'
      );
    }

    $('#pedidoVacio').toggle(total === 0);
    $('#total').text(total);

    $('#total').stop(true, true)
      .animate({ fontSize: '1.6rem' }, 150)
      .animate({ fontSize: '1rem' }, 150);
  }

  // =====================================================
  // 7. TOAST (slideDown, 3 s, fadeOut)
  // =====================================================
  function mostrarToast(mensaje, tipo) {
    $('#toast')
      .stop(true, true)
      .removeClass('ok error')
      .addClass(tipo)
      .text(mensaje)
      .hide()
      .slideDown(300)
      .delay(3000)
      .fadeOut(400);
  }

  // =====================================================
  // 8. MENÚ HAMBURGUESA
  // =====================================================
  $('#hamburguesa').click(function () {
  $('#menu').slideToggle();
});
  $('#menu a').click(function () {
    $('#menu').removeClass('show');
  });

  // =====================================================
  // 9. TEMA CLARO / OSCURO (se recuerda al recargar)
  // =====================================================
  try {
    if (localStorage.getItem('tema') === 'oscuro') {
      $('body').addClass('dark');
      $('#btnTema').text('☀️');
    }
  } catch (e) {}

  $('#btnTema').click(function () {
    $('body').toggleClass('dark');
    const oscuro = $('body').hasClass('dark');
    $(this).text(oscuro ? '☀️' : '🌙');
    try { localStorage.setItem('tema', oscuro ? 'oscuro' : 'claro'); } catch (e) {}
  });

  // =====================================================
  // 10. VALIDACIÓN DEL FORMULARIO
  // =====================================================
  function marcar(input, mensaje) {
    const campo = input.closest('.campo');
    if (mensaje) {
      input.removeClass('valid').addClass('invalid');
      campo.find('.error').text(mensaje);
      return false;
    }
    input.removeClass('invalid').addClass('valid');
    campo.find('.error').text('');
    return true;
  }

  function validarNombre() {
    const v = $('#nombre').val().trim();
    if (v === '') return marcar($('#nombre'), 'El nombre es obligatorio.');
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,}$/.test(v)) return marcar($('#nombre'), 'Mínimo 3 letras, sin números.');
    return marcar($('#nombre'), '');
  }

  function validarCelular() {
    const v = $('#celular').val().trim();
    if (v === '') return marcar($('#celular'), 'El celular es obligatorio.');
    if (!/^[67]\d{7}$/.test(v)) return marcar($('#celular'), 'Debe tener 8 dígitos y empezar con 6 o 7.');
    return marcar($('#celular'), '');
  }

  function validarCorreo() {
    const v = $('#correo').val().trim();
    if (v === '') {                       // es opcional
      $('#correo').removeClass('valid invalid');
      $('#correo').closest('.campo').find('.error').text('');
      return true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return marcar($('#correo'), 'Correo no válido.');
    return marcar($('#correo'), '');
  }

  function validarEntrega() {
    if ($('#entrega').val() === '') return marcar($('#entrega'), 'Selecciona un tipo de entrega.');
    return marcar($('#entrega'), '');
  }

  function validarDireccion() {
    if ($('#entrega').val() !== 'domicilio') return true;
    const v = $('#direccion').val().trim();
    if (v.length < 5) return marcar($('#direccion'), 'Escribe una dirección (mínimo 5 caracteres).');
    return marcar($('#direccion'), '');
  }

  // Validación en vivo
  $('#nombre').on('input blur', validarNombre);
  $('#celular').on('input blur', validarCelular);
  $('#correo').on('input blur', validarCorreo);
  $('#direccion').on('input blur', validarDireccion);

  $('#entrega').on('change', function () {
    validarEntrega();
    if ($(this).val() === 'domicilio') {
      $('#campoDireccion').slideDown();
    } else {
      $('#campoDireccion').slideUp();
      $('#direccion').val('').removeClass('valid invalid');
      $('#campoDireccion .error').text('');
    }
  });

  // Solo números en el celular
  $('#celular').on('input', function () {
    $(this).val($(this).val().replace(/\D/g, ''));
  });

  // =====================================================
  // 11. CONFIRMAR PEDIDO -> VALIDAR -> ABRIR MODAL
  // =====================================================
  $('#formComprador').submit(function (e) {
    e.preventDefault();

    if (Object.keys(pedido).length === 0) {
      mostrarToast('⚠️ Agrega productos al pedido primero', 'error');
      return;
    }

    // Se ejecutan todas (sin cortocircuito) para mostrar todos los errores
    const okNombre = validarNombre();
    const okCelular = validarCelular();
    const okCorreo = validarCorreo();
    const okEntrega = validarEntrega();
    const okDireccion = validarDireccion();

    if (!(okNombre && okCelular && okCorreo && okEntrega && okDireccion)) {
      mostrarToast('⚠️ Revisa los datos del formulario', 'error');
      return;
    }

    // Llenar el modal
    $('#modalNombre').text($('#nombre').val().trim());
    $('#modalEntrega').text(
      $('#entrega').val() === 'domicilio'
        ? 'Domicilio - ' + $('#direccion').val().trim()
        : 'Recojo en local'
    );
    $('#modalLista').empty();
    for (const nombre in pedido) {
      $('#modalLista').append('<li>' + pedido[nombre].cantidad + 'x ' + nombre + '</li>');
    }
    $('#modalTotal').text($('#total').text());

    $('#modal').fadeIn(300);
    iniciarTemporizador();
  });

  // =====================================================
  // 12. MODAL + TEMPORIZADOR DE 30 SEGUNDOS
  // =====================================================
  function iniciarTemporizador() {
    clearInterval(intervalo);
    let segundos = 30;
    $('#timer').text('00:30');

    intervalo = setInterval(function () {
      segundos--;
      $('#timer').text('00:' + (segundos < 10 ? '0' : '') + segundos);

      if (segundos <= 0) {
        clearInterval(intervalo);
        $('#modal').fadeOut(400);
        mostrarToast('⏰ Tarifa Flash Expirada', 'error');
      }
    }, 1000);
  }

  function cerrarModal() {
    clearInterval(intervalo);
    $('#modal').fadeOut(300);
  }

  $('#btnCerrar, #btnCancelar').click(cerrarModal);

  $('#btnPagar').click(function () {
    const nombre = $('#modalNombre').text();
    const total = $('#modalTotal').text();
    cerrarModal();
    mostrarToast('🎉 Gracias ' + nombre + ', pedido de ' + total + ' BOB confirmado', 'ok');

    // Limpiar todo
    pedido = {};
    renderPedido();
    $('#formComprador')[0].reset();
    $('#formComprador input, #formComprador select').removeClass('valid invalid');
    $('.error').text('');
    $('#campoDireccion').hide();
  });

});
