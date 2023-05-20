var courses = [{
  image: 'whatisJS.jpeg',
  title: 'The Basics Of Javascript',
  category: 'JS',
  price: 29.9
},
{
    image: 'html.jpeg',
    title: 'Basics Of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: 'html_tags.jpeg',
    title: 'HTML Elements And Tags',
    category: 'HTML',
    price: 9.9
},
{
    image: 'css_selectors.jpeg',
    title: 'CSS Selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: 'js_operators.jpeg',
    title: 'Javascript Operators And Conditions',
    category: 'JS',
    price: 29.9
},
{
    image: 'html_attri.jpeg',
    title: 'HTML Attributes And Values',
    category: 'HTML',
    price: 19.9
},
{
    image: 'css_propreties.jpeg',
    title: 'CSS Properties',
    category: 'CSS',
    price: 29.9
},
{
    image: 'js _array.jpeg',
    title: 'Javascript Objects And Arrays',
    category: 'JS',
    price: 39.9
},
{
    image: 'cssanim.jpeg',
    title: 'CSS Animations',
    category: 'CSS',
    price: 19.9
},
{
    image: 'js_event.jpeg',
    title: 'Javascript Events',
    category: 'JS',
    price: 59.9
},
{
    image: 'css_color.jpeg',
    title: 'Css Colors',
    category: 'css',
    price: 29.9
},
{
    image: 'php_basics.jpeg',
    title: 'Getting Started With Php',
    category: 'php',
    price: 15.9
},
{
    image: 'js_funct.jpeg',
    title: 'Functions And Loops With Javascript',
    category: 'JS',
    price: 19.9
},
{
    image: 'conect_data_php.jpeg',
    title: 'Connecting To Database Using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: 'crud_php.jpeg',
    title: 'Manipulating Crud Using Php',
    category: 'php',
    price: 45.9
}];
function getRndmCourIndex() {
  return Math.floor(Math.random() * courses.length);
}

function updaCourInfor() {
  const random1 = getRndmCourIndex();
  const random2 = getRndmCourIndex();
  const random3 = getRndmCourIndex();
  
  const image1 = document.getElementById("leftItemImg");
  const image2 = document.getElementById("rightItemImg");
  const image3 = document.getElementById("centerItemImg");
  
  document.getElementById("leftItemH2").innerHTML = courses[random1].title;
  document.getElementById("centerItemH2").innerHTML = courses[random2].title;
  document.getElementById("rightItemH2").innerHTML = courses[random3].title;
  
  document.getElementById("price").innerHTML = '$' + courses[random1].price;
  document.getElementById("price2").innerHTML = '$' + courses[random2].price;
  document.getElementById("price3").innerHTML = '$' + courses[random3].price;
  
  image1.src = courses[random1].image;
  image2.src = courses[random3].image;
  image3.src = courses[random2].image;
  
}
setInterval(updaCourInfor, 1500);
