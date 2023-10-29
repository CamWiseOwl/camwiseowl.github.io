---
title: "Conway's Game of Life - Code Golfed [JS/Canvas]"
description: "Here's my attempt to fit Conway's Game of Life into tweet length."
date: 'Feb 3 2021'
image: '../../assets/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
---

Here's my attempt to fit Conway's Game of Life into tweet length. Unfortunately I'm 77 characters over at 358.

Paste this code into a blank HTML file and it should work (with some very minor visual issues!).

```js
<canvas/><script>b=document.all[3].getContext("2d");s=50;z=s*s;m=[];n=[];g=(x,y)=>m[x*s+y%s];for(i=z;--i;m[i]=new Date&1);setInterval(()=>{for(i=z;--i;)x=i/s|0,x=g(x,i-1)+g(x+1,i-1)+g(x+1,i)+g(x+1,i+1)+g(x,i+1)+g(x-1,i+1)+g(x-1,i)+g(x-1,i-1),n[i]=3==x||m[i]&&2==x;for(i=z;--i;)b.fillStyle=(m[i]=n[i])?'red':'tan',b.fillRect(i/s*10,i%s*10,10,10)},s)</script>
```

[Link to the Gist!](https://gist.github.com/CamWiseOwl/0462869d4efa9f4a08a0bfd96e40ff49)
