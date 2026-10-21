const services = [
  {name:'Flyers y folletos', description:'Publicidad impresa para promocionar productos, servicios y eventos.', image:'flyers.webp'},
  {name:'Tarjetas', description:'Tarjetas de presentación personales y profesionales con distintos acabados.', image:'tarjetas.webp'},
  {name:'Cartas menú', description:'Menús impresos para restaurantes, cafeterías y bares.', image:'menus.webp'},
  {name:'Cuadros en lienzo', description:'Fotografías, arte y decoración personalizada en lienzo.', image:'lienzos.webp'},
  {name:'Pósters y láminas', description:'Anime, paisajes, ilustraciones y fotografías sobre papel.', image:'posters.webp'},
  {name:'Pegatinas y etiquetas', description:'Adhesivos personalizados para marcas, productos y envases.', image:'etiquetas.webp'},
  {name:'Vinilos', description:'Vinilos decorativos y publicitarios para diferentes superficies.', image:'vinilos.webp'},
  {name:'Lonas y carteles', description:'Impresión de gran formato para escaparates, eventos y promociones.', image:'lonas.webp'},
  {name:'Estampados DTF', description:'Personalización de prendas textiles con estampados DTF.', image:'dtf.webp'},
  {name:'Diseño gráfico', description:'Diseños personalizados para identidad visual, productos y publicidad.', image:'diseno.webp'}
];
const cards = document.getElementById('cards');
const select = document.getElementById('producto');
services.forEach(service => {
  const article = document.createElement('article');
  article.className = 'card';
  const visual = document.createElement('div');
  visual.className = 'visual';
  const img = document.createElement('img');
  img.src = `assets/${service.image}`;
  img.alt = `Imagen referencial de ${service.name.toLowerCase()}`;
  img.loading = 'lazy';
  visual.appendChild(img);
  const content = document.createElement('div');
  content.className = 'content';
  const title = document.createElement('h3');
  title.textContent = service.name;
  const description = document.createElement('p');
  description.textContent = service.description;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Consultar este producto →';
  button.addEventListener('click', () => {
    select.value = service.name;
    document.getElementById('presupuesto').scrollIntoView({behavior:'smooth'});
  });
  content.append(title, description, button);
  article.append(visual, content);
  cards.appendChild(article);
  const option = document.createElement('option');
  option.value = service.name;
  option.textContent = service.name;
  select.appendChild(option);
});
document.getElementById('form').addEventListener('submit', event => {
  event.preventDefault();
  const value = id => document.getElementById(id).value.trim();
  const message = `Hola, quisiera solicitar un presupuesto de diseño e impresión.\n\nNombre: ${value('nombre')}\nProducto: ${value('producto')}\nCantidad: ${value('cantidad') || 'Por definir'}\nMedidas: ${value('medidas') || 'Por definir'}\nDiseño: ${value('diseno')}\nDetalles: ${value('detalle') || 'Sin detalles adicionales'}`;
  window.location.href = 'https://wa.me/34614945455?text=' + encodeURIComponent(message);
});
