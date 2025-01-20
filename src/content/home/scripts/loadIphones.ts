import { Application } from "@splinetool/runtime";


export async function LoadIphones() {
  const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
  if(!canvas) 
    throw new Error('Could not find canvas');
  
  const app = new Application(canvas);
  await app.load('https://prod.spline.design/ugzWXXGhlB9gMu30/scene.splinecode')
}