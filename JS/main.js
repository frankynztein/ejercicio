document.addEventListener('DOMContentLoaded', function(event) {
  // Button Builder
  const ButtonCreator = function(container) {
    this.container = container;
    this.buttons = [];
  };

  ButtonCreator.prototype.appendButton = function(number) {
    // Do not change this method, is not part of the test
    const element = document.createElement('button');
    element.innerText = 'Button #' + (number + 1);
    this.container.appendChild(element);
    this.buttons.push(element);
  };

  ButtonCreator.prototype.addEventListeners = function() {
    for (let i = 0; i < this.buttons.length; ++i) {
      this.buttons[i].addEventListener('click', function() {
        alert('Button #' + ( i + 1 ) + ' pressed!');
      });
    }
  };

  // Initialization: Use button builder to generate 10 buttons
  const builder = new ButtonCreator(document.getElementById('container'));
  for (let i = 0; i < 10; ++i)
  {
    builder.appendButton(i);
  }
  builder.addEventListeners();
});
