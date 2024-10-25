document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const operation = document.getElementById('operation');
    let currentInput = '';
    let currentOperation = '';
    let previousInput = '';


    /**
     * Actualiza el contenido del display y del div de operación con los valores actuales de currentInput y currentOperation.
     * Si currentInput es una cadena vacía, muestra '0' en su lugar.
     */
    const updateDisplay = () => {
        display.textContent = currentInput || '0';
        operation.textContent = currentOperation || ' ';
    };



    /**
     * Itera sobre los botones con la clase 'number' y les agrega un listener de clic. Al pulsar un botón:
     * - Se actualiza el valor de currentInput con el contenido del botón.
     * - Se actualiza el display.
     */
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.textContent;
            updateDisplay();
        });
    });




    /**
     * Itera sobre los botones con la clase 'operator' y les agrega un listener de clic.
     * Si se ha ingresado un valor en el display, al pulsar un botón de operador:
     * - Si se ha ingresado un valor previo, se efectúa la operación correspondiente.
     * - Se guarda el valor actual como el valor previo.
     * - Se borra el valor actual.
     * - Se guarda el símbolo de la operación actual en currentOperation.
     * - Se actualiza el display y el div de operación con los valores actuales de currentInput y currentOperation.
     */
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    calculate();
                }
                previousInput = currentInput;
                currentInput = '';
                currentOperation = button.textContent;
                updateDisplay();
            }
        });
    });




    /**
     * Realiza la operación matemática correspondiente a la operación en currentOperation con los valores en previousInput y currentInput.
     * Asigna el resultado a currentInput y borra previousInput y currentOperation.
     */
    const calculate = () => {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        switch (currentOperation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
        }
        currentInput = result.toString();
        currentOperation = '';
        previousInput = '';
    };



    /**
     * Manejador para el botón de igual (=). Si hay números en previousInput y currentInput, realiza la operación correspondiente
     * a currentOperation y actualiza el display y los valores de currentInput, currentOperation y previousInput.
     * Si no hay números en previousInput y currentInput, no hace nada.
     */
    document.getElementById('equals').addEventListener('click', () => {
        if (currentInput !== '' && previousInput !== '') {
            calculate();
            updateDisplay();
        }
    });

   

    /**
     * Manejador para el botón de borrar (C). Borra el contenido actual de currentInput, currentOperation y previousInput.
     * Actualiza el display con el valor actual de currentInput.
     */
    document.getElementById('clear').addEventListener('click', () => {
        currentInput = '';
        currentOperation = '';
        previousInput = '';
        updateDisplay();
    });


    /**
     * Manejador para el botón de signo (+/-). Invierte el valor del currentInput.
     * Actualiza el display con el valor actual de currentInput.
     */
    document.getElementById('plus-minus').addEventListener('click', () => {
        if (currentInput !== '') {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay();
        }
    });

    updateDisplay();
});