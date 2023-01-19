// тут в переменные мы записали наши кнопки.
const resetButton = document.querySelector(".resetClass");
const submitButton = document.querySelector(".submitClass");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;

// span с калориями
const normalCal = document.querySelector(".normal_cal");
const minCal = document.querySelector(".min_cal");
const maxCal = document.querySelector(".max_cal");

const inputAge = document.querySelector("#inputAge");
const inputHeight = document.querySelector("#inputHeight");
const inputWeight = document.querySelector("#inputWeight");

// вешаем событие щелчка по кнопки внутри пример функции
resetButton.addEventListener("click", (event) => {

    document.getElementsByClassName('resultSection')[0].id = "withoutResult";

    // нужно чтобы страница после нажатия не обновлялась
    //event.preventDefault();
});

submitButton.addEventListener("click", (event) => {

    document.getElementsByClassName('resultSection')[0].id = "withResult";

    let man = 5;
    if(caloriesForm.gender[1].checked) {
        man = -161;
    }

    let rang = 1.2;
    if(caloriesForm.physT[1].checked){
        rang = 1.375;
    }
    else if(caloriesForm.physT[2].checked) {
        rang = 1.55;
    }
    else if(caloriesForm.physT[3].checked) {
        rang = 1.725;
    }
    else if(caloriesForm.physT[4].checked) {
        rang = 1.9;
    }

    let resW = (10 * parseInt(inputWeight.value)) + (6,25 * parseInt(inputHeight.value)) - (5 * parseInt(inputAge.value)) + man;

    resW *= rang;

    // тоже можно будет удалить, пример как менять верстку из JS
    // нажмите "Рассчитать" и проверьте
    normalCal.textContent = resW;

    minCal.textContent = resW - resW * 0.15;
    maxCal.textContent = resW + resW * 0.15;

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});

document.querySelectorAll('.inputLabel').forEach(function(element) {
    element.addEventListener("change", (event) => {
        
        if((inputAge.value != "") && (inputHeight.value != "") && (inputWeight.value != "")) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }

        if((inputAge.value != "") || (inputHeight.value != "") || (inputWeight.value != "")) {
            resetButton.disabled = false;
        }
        else {
            resetButton.disabled = true;
        }

    });
})

