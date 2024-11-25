const visited = document.querySelectorAll('input, select');
visited.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value){
            this.classList.add('visited');
        }
        else{
            this.classList.remove('visited');
        }
    });
});
function textToNumber(variable) {
    variable = variable.replace(/[^0-9.,]/g, '');
    if (variable.includes(",")) {
        variable = variable.replace(",", ".");
    }
    return oneDot(variable);
}

function oneDot(variable){
    const firstDotIndex = variable.indexOf('.');

    if (firstDotIndex === -1){
        return variable;
    }
    if(firstDotIndex === 0){
        variable = "0.";
        return variable;
    }
    const beforeDot = variable.slice(0, firstDotIndex + 1);
    let afterDot = variable.slice(firstDotIndex + 1);
    afterDot = afterDot.replace(".", "");
    afterDot = afterDot.slice(0, 2);

    return beforeDot + afterDot;
}

const elementConversionSelect = document.querySelector('#conversion-select')
const elementMultiplier = document.querySelector('#multiplier')
const elementInput = document.querySelector('#input-to-calculate')
const elementResult = document.querySelector('#result-display')
const elementReset = document.querySelector('#reset')

elementConversionSelect.addEventListener('change', function() {
    elementMultiplier.innerHTML = elementConversionSelect.value
})

elementInput.addEventListener('input', function() {
    let value = textToNumber(elementInput.value)
    elementInput.value = value

    elementResult.innerHTML = Math.round(elementConversionSelect.value * Number(value) * 100)/100
})

elementReset.addEventListener('click', function() {
    elementConversionSelect.value = ""
    elementMultiplier.innerHTML = ""
    elementInput.value = ""
    elementResult.innerHTML = ""

    elementConversionSelect.classList.remove('visited')
    elementInput.classList.remove('visited')
})

