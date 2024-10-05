const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationResult = document.querySelector("#result-operation")

const resultOperation = document.querySelector("#result-operation")


const createMultiplication = (number, multiplicatorNumber) => {   
    multiplicationResult.innerHTML = ""
    
        const result = number * multiplicatorNumber; // Calcule o resultado

        const template = `
            <div class="row">
                <div class="result">${result}</div>
            </div>`;

        multiplicationResult.innerHTML += template; // Adiciona o resultado diretamente
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return

    createMultiplication(multiplicationNumber, multiplicatorNumber)
})