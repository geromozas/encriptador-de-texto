const textArea = document.getElementById("textoEncriptar");
const respuesta = document.getElementById("mensajeEncriptado");
const boxDos = document.querySelector(".boxDos");
const boxTres = document.querySelector(".boxTres");

const btnEncriptar = () => {
  const texto = textArea.value;
  if (!validarTexto(texto)) {
    alert("Solo se permiten letras minúsculas y sin acentos.");
    return;
  }
  const textoEncriptado = encriptar(textArea.value);
  respuesta.value = textoEncriptado;
  boxDos.classList.add("hidden");
  boxTres.classList.remove("hidden");
};

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  respuesta.value = textoDesencriptado;
  boxDos.classList.add("hidden");
  boxTres.classList.remove("hidden");
}

const encriptar = (stringEncriptado) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
};

const desencriptar = (stringDesencriptado) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
};

const btnCopiar = () => {
  const texto = respuesta.value;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado");
    })
    .catch((err) => {
      alert("Error al copiar el texto");
    });
};

const validarTexto = (texto) => {
  const condicion = /^[a-z\s]*$/;
  return condicion.test(texto);
};

const btnNuevoTexto = () => {
  location.reload();
};
