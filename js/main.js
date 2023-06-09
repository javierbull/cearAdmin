"use strict";

$(document).ready(function () {

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  $("#show-resumen").click(function () {
    $("#content-sorteo").hide();
    $("#content-resumen").show();
  });

  $("#show-sorteo").click(function () {
    $("#content-sorteo").show();
    $("#content-resumen").hide();
  });

  // Admin Dashboard  active item sidebar
  $(".sidebar-admin button").click(function () {
    $(".active").removeClass("active-item-sidebar");
  });
  // Admin Dashboard  active item sidebar

  // Admin panel
  $("#toggle-btn-sidebar").click(function () {
    $("#admin-panel").toggleClass("ml-panel ml-panel-0");
  });
  // End admin panel

  // SHOW HIDE PANELS
  $(".showProfesionales").click(function () {
    $("#profesionales-panel").show();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showAgregarProfesional").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").show();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showDesignacion").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").show();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showAgregarDesignacion").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").show();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showEspecialidad").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").show();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showAgregarEspecialidad").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").show();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showProfesiones").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").show();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showAgregarProfesion").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").show();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCasos").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").show();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showEditarCaso").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").show();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showUsuarios").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").show();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showEditarUsuario").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").show();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudFisico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").show();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudElectronico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").show();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudesIngresadas").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").show();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showDetalleSolicitudIngresada").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").show();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showDetalleSolicitudIngresadaElectronico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").show();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoArbitroUnico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").show();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoTribunalArbitral").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").show();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoSecretariaArbitral").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").show();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoCuantiaIndeterminada").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").show();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoArbitroEmergencia").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").show();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showCostoCentroArbitral").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").show();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showNuevaSolicitud").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").show();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showTipoSolicitud-arbitrajeGeneral").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").show();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showTipoSolicitud-ContratacionPublica").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").show();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });
  
  $(".showSolicitudArbitrajeGeneralFisico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").show();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudArbitrajeGeneralElectronico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").show();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudArbitrajeContratacionPublicaFisico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").show();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
  });

  $(".showSolicitudArbitrajeContratacionPublicaElectronico").click(function () {
    $("#profesionales-panel").hide();
    $("#agregarProfesional-panel").hide();
    $("#designacion-panel").hide();
    $("#agregarDesignacion-panel").hide();
    $("#especialidades-panel").hide();
    $("#agregarEspecialidad-panel").hide();
    $("#profesiones-panel").hide();
    $("#agregarProfesion-panel").hide();
    $("#casos-panel").hide();
    $("#editar-caso-panel").hide();
    $("#usuarios-panel").hide();
    $("#editar-usuario-panel").hide();
    $("#solicitud-fisico-panel").hide();
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").show();
  });

  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function () {
    var curElement = $('#photoProfile');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
  // END UPLOAD PICTURE PROFILE

  // Show hide Tag
  $('#checkContratacionPublicaNp').click(function () {
    $("#tag-arbitro").toggleClass("flex hide");
  });
  // End Show hide Tag
  // End admin dashboard

  // SHOW HIDE CHECKBOX
  $("#checkDatosDemandanteRepLegalSfPn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPn-ag").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSfPn-acp").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPn-acp").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPn-acp").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSfPj-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPj-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPj-ag").hide();
    }
  });



  $("#checkDatosDemandanteRepLegalSePn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSePn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSePn-ag").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSePj-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSePj-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSePj").hide();
    }
  });

  $("#checkShowInputEnlaceSf-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-ag").hide();
    }
  });

  $("#checkShowInputEnlaceSe-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-se-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-se-ag").hide();
    }
  });

  $("#checkShowInputEnlaceSeSi-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-se-si-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-se-si-ag").hide();
    }
  });

  $("#checkDatosRepresentanteLegalSe-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-DatosRepresntanteLegalSe-ag").show();
    } else {
      $("#fieldset-DatosRepresntanteLegalSe-ag").hide();
    }
  });

  $("#cuantiaDeterminado-ag").click(function () {
    $("#fieldset-cuantia-determinada-ag").show();
  });

  $("#cuantiaIndeterminado-ag").click(function () {
    $("#fieldset-cuantia-determinada-ag").hide();
  });

  $("#cuantiaDeterminadoSi-ag").click(function () {
    $("#fieldset-cuantia-determinada-Si-ag").show();
  });

  $("#cuantiaIndeterminadoSi-ag").click(function () {
    $("#fieldset-cuantia-determinada-Si-ag").hide();
  });

  $("#datosDemandanteSfPj-ag").click(function () {
    $("#fieldset-demandante-sf-pn-ag").hide();
    $("#fieldset-demandante-sf-pj-ag").show();
  });

  $("#datosDemandanteSfPn-ag").click(function () {
    $("#fieldset-demandante-sf-pn-ag").show();
    $("#fieldset-demandante-sf-pj-ag").hide();
  });

  $("#datosDemandanteSfPj-acp").click(function () {
    $("#fieldset-demandante-sf-pn-acp").hide();
    $("#fieldset-demandante-sf-pj-acp").show();
  });

  $("#datosDemandanteSfPn-acp").click(function () {
    $("#fieldset-demandante-sf-pn-acp").show();
    $("#fieldset-demandante-sf-pj-acp").hide();
  });

  $("#datosDemandadoSfPj-ag").click(function () {
    $("#fieldset-demandado-sf-pn-ag").hide();
    $("#fieldset-demandado-sf-pj-ag").show();
  });

  $("#datosDemandadoSfPn-ag").click(function () {
    $("#fieldset-demandado-sf-pn-ag").show();
    $("#fieldset-demandado-sf-pj-ag").hide();
  });

  $("#datosDemandanteSePj-ag").click(function () {
    $("#fieldset-demandante-se-pn-ag").hide();
    $("#fieldset-demandante-se-pj-ag").show();
  });

  $("#datosDemandanteSePn-ag").click(function () {
    $("#fieldset-demandante-se-pn-ag").show();
    $("#fieldset-demandante-se-pj-ag").hide();
  });

  $("#datosDemandadoSePj-ag").click(function () {
    $("#fieldset-demandado-se-pn-ag").hide();
    $("#fieldset-demandado-se-pj-ag").show();
  });

  $("#datosDemandadoSePn-ag").click(function () {
    $("#fieldset-demandado-se-pn-ag").show();
    $("#fieldset-demandado-se-pj-ag").hide();
  });

  $("#datosDemandanteSiPj-ag").click(function () {
    $("#fieldset-demandante-si-pn-ag").hide();
    $("#fieldset-demandante-si-pj-ag").show();
  });

  $("#datosDemandanteSiPn-ag").click(function () {
    $("#fieldset-demandante-si-pn-ag").show();
    $("#fieldset-demandante-si-pj-ag").hide();
  });

  $("#datosDemandadoSiPj-ag").click(function () {
    $("#fieldset-demandado-si-pn-ag").hide();
    $("#fieldset-demandado-si-pj-ag").show();
  });

  $("#datosDemandadoSiPn-ag").click(function () {
    $("#fieldset-demandado-si-pn-ag").show();
    $("#fieldset-demandado-si-pj-ag").hide();
  });

  $("#checkDatosDemandanteRepLegalSiPn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSiPn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSiPn-ag").hide();
    }
  });

  // END SHOW HIDE CHECKBOX

  // SHOW HIDE SELECT
  $('#comprobanteSelectorSe').change(function () {
    var myID = $(this).val();
    $('.comprobanteSe').each(function () {
      myID === $(this).attr('id') ? $(this).show() : $(this).hide();
    });
  });
  // END SHOW HIDE SELECT

  // ACTIVAR SELECT 2
  $('.select2').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder')
  });

  $('.select2modal').each(function () {
    $(this).select2({
      theme: "bootstrap-5",
      width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
      placeholder: $(this).data('placeholder'),
      dropdownParent: $(this).parent()
    });
  });

  $('.select2-multiple').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
    closeOnSelect: false,
    allowClear: true,
  });

  // END ACTIVAR SELECT2

  // TOOLTIP
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // END TOOLTIP


});

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu

// Drag & Drop
const $inputFile = document.getElementById("file");
const $iconFile = document.getElementById("iconFile");
const $textFile = document.getElementById("textFile");

$inputFile.addEventListener("change", (e) => {
  if (e.target.files.length) {
    $iconFile.className = "fas fa-folder";
    $textFile.innerText = `Has agregado este documento: ${e.target.files[0].name}`;
  }
});

// End Drag & Drop
