'use strict';

/**
 * The step amount by which the counter value is incremented or decremented.
 * @type {number}
 */
const STEP_AMOUNT = 1;

/**
 * The input element that displays the counter value.
 * @type {HTMLInputElement}
 */
const numberInput = document.querySelector('[data-key="number"]');

/**
 * The subtract button element.
 * @type {HTMLButtonElement}
 */
const subtractButton = document.querySelector('[data-key="subtract"]');

/**
 * The add button element.
 * @type {HTMLButtonElement}
 */
const addButton = document.querySelector('[data-key="add"]');

/**
 * The reset button element.
 * @type {HTMLButtonElement}
 */
const resetButton = document.querySelector('[data-key="reset"]');

/**
 * The reset alert message element.
 * @type {HTMLElement}
 */
const resetAlert = document.querySelector('[data-key="alert-reset"]');

/**
 * Abstract superclass representing a counter.
 * @class
 */
class Counter {
  constructor() {
    this.value = 0;
  }

  /**
   * Increases the value of the counter by the step amount.
   * This method will be overridden in the subclasses.
   * @abstract
   */
  increment() {}

  /**
   * Decreases the value of the counter by the step amount.
   * This method will be overridden in the subclasses.
   * @abstract
   */
  decrement() {}
}

/**
 * Subclass of Counter representing a positive counter.
 * @extends Counter
 */
class PositiveCounter extends Counter {
  /**
   * Increases the value of the counter by STEP_AMOUNT.
   * @override
   */
  increment() {
    this.value += STEP_AMOUNT;
  }

  /**
   * Decreases the value of the counter by STEP_AMOUNT, ensuring non-negative values.
   * @override
   */
  decrement() {
    if (this.value >= STEP_AMOUNT) {
      this.value -= STEP_AMOUNT;
    }
  }
}

// Create an instance of the PositiveCounter class
const counter = new PositiveCounter();

/**
 * Updates the counter value displayed in the input element.
 */
function updateCounterDisplay() {
  numberInput.value = counter.value;
}

/**
 * Increases the value of the counter by STEP_AMOUNT and updates display.
 */
function handleIncrement() {
  counter.increment();
  updateCounterDisplay();
}

/**
 * Decreases the value of the counter by STEP_AMOUNT, ensuring non-negative values, and updates display.
 */
function handleDecrement() {
  counter.decrement();
  updateCounterDisplay();
}

/**
 * Resets the value of the counter to 0, shows a reset message, and updates display.
 */
function handleReset() {
  counter.value = 0;
  resetAlert.show(); 
  updateCounterDisplay();
}

// Event listeners
subtractButton.addEventListener('click', handleDecrement);
addButton.addEventListener('click', handleIncrement);
resetButton.addEventListener('click', handleReset);