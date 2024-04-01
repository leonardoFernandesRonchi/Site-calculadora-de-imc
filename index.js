const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const result = document.querySelector("#result");

const calcBMI = () => {
  if (weight.value !== "" && height.value !== "") {
    const bmi = (weight.value / (height.value * height.value)).toFixed(2);
    let classification = "";

    if (bmi < 18.5) {
      classification = "Abaixo do Peso";
    } else if (bmi < 25) {
      classification = "Peso normal";
    } else if (bmi < 30) {
      classification = "Acima do Peso";
    } else if (bmi < 35) {
      classification = "Obesidade 1";
    } else if (bmi < 40) {
      classification = "Obesidade 2";
    } else if (bmi < 35) {
      classification = "Obesidade Morbida";
    }
    result.innerHTML = `IMC: ${bmi} (${classification})`
  } else {
    result.innerHTML = 'Preencha os Campos';
  }
};
