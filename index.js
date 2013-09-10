/**
 * Set or get value form element or to element/elements
 *
 * @param {Element} el
 * @param {Mixed} val
 * @return {Mixed}
 * @api public
 */

function Value() {
  // if (2 == arguments.length) return this.set(el, val);
  // if (1 == arguments.length) return this.get(el);
};

module.exports = Value;

/**
 * Get value/inner html from `el`.
 */

Value.prototype.get = function(el) {
    var element = document.querySelector(el),
        content;

    if (element.value) {
        // get value form form inputs, textareas, selects
        content = element.value;
    } else {
        // get inner html from other html elements
        content = element.innerHTML;
    }

    return content;
};

/**
 * Set `el` a new `val`.
 */

Value.prototype.set = function(el, val) {
    var elements = document.querySelectorAll(el),
        i;

    for (i = elements.length - 1; i >= 0; i--) {
        if (!elements[i].type) {
            elements[i].innerHTML = val;
        } else {
            elements[i].value = val;
        }
    };
};