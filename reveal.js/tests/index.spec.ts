import Reveal, { RevealStatic } from "reveal.js";

Reveal.initialize();
Reveal.initialize({
  shuffle: true
});

const reveal = (window as any).Reveal as RevealStatic;
reveal.configure({});