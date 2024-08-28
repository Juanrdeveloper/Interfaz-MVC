// script.js
// Modelo
class TimeRecord {
    constructor() {
        this.entryTime = '';
        this.exitTime = '';
    }

    setEntryTime(time) {
        this.entryTime = time;
    }

    setExitTime(time) {
        this.exitTime = time;
    }

    getEntryTime() {
        return this.entryTime;
    }

    getExitTime() {
        return this.exitTime;
    }

    isValid() {
        return this.entryTime && this.exitTime;
    }
}

// Vista
class View {
    constructor() {
        this.entryTimeInput = document.getElementById('entryTime');
        this.exitTimeInput = document.getElementById('exitTime');
        this.resultDiv = document.getElementById('result');
    }

    getEntryTime() {
        return this.entryTimeInput.value;
    }

    getExitTime() {
        return this.exitTimeInput.value;
    }

    displayResult(entryTime, exitTime) {
        this.resultDiv.innerHTML = `
            <p><strong>Hora de Entrada:</strong> ${entryTime}</p>
            <p><strong>Hora de Salida:</strong> ${exitTime}</p>
        `;
    }

    displayError(message) {
        this.resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
    }
}

// Controlador
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Asociar eventos
        this.view.entryTimeInput.addEventListener('change', () => this.updateEntryTime());
        this.view.exitTimeInput.addEventListener('change', () => this.updateExitTime());
        document.getElementById('registerBtn').addEventListener('click', () => this.registerTime());
    }

    updateEntryTime() {
        this.model.setEntryTime(this.view.getEntryTime());
    }

    updateExitTime() {
        this.model.setExitTime(this.view.getExitTime());
    }

    registerTime() {
        if (this.model.isValid()) {
            this.view.displayResult(this.model.getEntryTime(), this.model.getExitTime());
        } else {
            this.view.displayError('Por favor, completa ambas horas.');
        }
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const model = new TimeRecord();
    const view = new View();
    new Controller(model, view);
});