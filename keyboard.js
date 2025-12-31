// KEYBOARD SUPPORT FOR BOTH MODES (FIXED)
document.addEventListener("keydown", function (e) {

    // STOP browser default actions
    if (["Enter", "Backspace"].includes(e.key)) {
        e.preventDefault();
    }

    // COMMON KEYS
    if (e.key === "Backspace") {
        backspace();
        return;
    }

    if (e.key === "Escape") {
        clearDisplay();
        return;
    }

    // ======================
    // CALCULATOR MODE
    // ======================
    if (isCalcMode) {

        // Numbers (0–9)
        if (e.key.match(/^[0-9]$/)) {
            appendValue(e.key);
            return;
        }

        // Operators
        if (["+", "-", "*", "/", "."].includes(e.key)) {
            appendValue(e.key);
            return;
        }

        // Enter = Calculate
        if (e.key === "Enter") {
            calculate();
            return;
        }
    }

    // ======================
    // CONVERTER MODE
    // ======================
    else {

        // Numbers
        if (e.key.match(/^[0-9]$/)) {
            appendValue(e.key);
            return;
        }

        // HEX characters
        if (e.key.match(/^[a-fA-F]$/)) {
            appendValue(e.key.toUpperCase());
            return;
        }

        // Enter = Convert
        if (e.key === "Enter") {
            convert();
            return;
        }
    }
});
