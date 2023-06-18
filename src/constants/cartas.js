
const imagens = [
  "javascript.png",
  "nextjs.png",
  "nodejs.png",
  "reactjs.png",
  "typescript.png",
  "vitejs.png",
];

 export const cartasUnicas = imagens.map((imagem, idDoPar) => ({
    idDoPar,
    imagem,
}));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (carta, id) => ({
    ...carta,
    id,
})
);

