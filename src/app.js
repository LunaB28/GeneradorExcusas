window.onload = function() {
  generarExcusa();
};

function generarExcusa() {
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['se comió', 'pisó', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de la clase', 'cuando dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras oraba'];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let excuse = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];

  document.getElementById('excuse').innerHTML = excuse;
}