document.getElementById("cotizarBtn").addEventListener("click", () => {
  const ci = document.getElementById("ci").value;
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const vehiculo = document.getElementById("vehiculo").value;
  const precio = document.getElementById("precio").value;
  let descuento = 0;

  if (vehiculo === "fiesta") {
      descuento = 0.05;
  } else if (vehiculo === "focus") {
      descuento = 0.1;
  }

  const precioFinal = precio - (precio * descuento);

  const cotizacionResult = document.getElementById("cotizacionResult");
  cotizacionResult.innerHTML = `
      <h3>Cotización:</h3>
      <p>CI: ${ci}</p>
      <p>Nombre: ${nombre} ${apellido}</p>
      <p>Dirección: ${direccion}</p>
      <p>Vehículo: ${vehiculo}</p>
      <p>Precio Final: $${precioFinal.toFixed(2)}</p>
  `;
});

document.getElementById("generarRolBtn").addEventListener("click", () => {
  const nombreEmpleado = document.getElementById("nombreEmpleado").value;
  const cargo = document.getElementById("cargo").value;
  let sueldoBase = 0;

  switch (cargo) {
      case "administrativo":
          sueldoBase = 700.00;
          break;
      case "supervisor":
          sueldoBase = 650.00;
          break;
      case "operario":
          sueldoBase = 440.00;
          break;
      case "controlCalidad":
          sueldoBase = 490.00;
          break;
  }

  const horasExtras = document.getElementById("horasExtras").value;
  const sueldoRecibir = sueldoBase + (horasExtras * 10);

  const rolResult = document.getElementById("rolResult");
  rolResult.innerHTML = `
      <h3>Rol de Pagos:</h3>
      <p>Nombre del Empleado: ${nombreEmpleado}</p>
      <p>Cargo: ${cargo}</p>
      <p>Sueldo a Recibir: $${sueldoRecibir.toFixed(2)}</p>
  `;
});