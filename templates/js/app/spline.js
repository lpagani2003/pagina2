import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/0mUoS6NXXdhArHmO/scene.splinecode');



const canvas2 = document.getElementById('canvas3d2');
const app2 = new Application(canvas2);
app2.load('https://prod.spline.design/eSQ7tIYHU968OMK7/scene.splinecode');

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(() => {
      const etiquetas = document.querySelectorAll('canvas');
      etiquetas.forEach(etiqueta => {
        etiqueta.style.display = 'block';
      });
    }, 2500);
  });