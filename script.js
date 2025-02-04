const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            try {
                calculatorScreen.value = eval(calculatorScreen.value);
            } catch (error) {
                calculatorScreen.value = 'Error';
            }
        } else {
            calculatorScreen.value += value;
        }
    });
});

// Clear the screen on load
calculatorScreen.value = '';