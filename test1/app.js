//setup Pixi renderer
var renderer = PIXI.autoDetectRenderer(600, 400, {
    backgroundColor: 0x000000
  });
  document.body.appendChild(renderer.view);
  
  // create new stage
  var stage = new PIXI.Container();
  
  // create helpful message
  var style = {
    font: '18px Courier, monospace',
    fill: '#ffffff'
  };
  
  
  // create graphic object called circle then draw a circle on it
  var circle = new PIXI.Graphics();
  circle.lineStyle(5, 0xFFFFFF, 1);
  circle.beginFill(0x0000FF, 1);
  circle.drawCircle(150, 150, 100);
  circle.endFill();
  circle.alpha = 0.5;
  stage.addChild(circle);
  
  // designate circle as being interactive so it handles events
  circle.interactive = true;
  
  // create hit area, needed for interactivity
  circle.hitArea = new PIXI.Circle(150, 150, 100);
  
  // make circle non-transparent when mouse is over it
  circle.mouseover = function(mouseData) {
      var message = new PIXI.Text('Hover your mouse over the circle to see the effect.', style);
    message.x = mouseData.data.global.x;
    message.y = mouseData.data.global.y;
    /**
    const x = event.data.global.x;
      const y = event.data.global.y;
    */
    circle.message = message;
    circle.addChild(message);
  }
  
  // make circle half-transparent when mouse leaves
  circle.mouseout = function(mouseData) {
    this.alpha = 0.5;
    circle.removeChild(circle.message);
    delete circle.message;
  }
  
  // start animating
  animate();
  
  function animate() {
    requestAnimationFrame(animate);
    // render the root container
    renderer.render(stage);
  };