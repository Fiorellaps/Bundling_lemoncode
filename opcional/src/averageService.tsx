export function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores) {
  return scores.reduce((score, count) => score + count);
}

// esto da error si mo te has instalado ts const a: number = "Hello";

/**
 * 1. .s >> ts-loader [tsc(compilar + type-checking) >> bable (transpilar a ES5)] >> bundle --> es menos ligero porque primer pasa por ts-loader y kuego por babel; type check dentro de ts-loader
 * 1. .ts >> babel-loader [babeñ (compilar typescript + compilar a ES5)] >> bundle --> permite hacer typechecking en paralelo; no hace el type checking, se carga los tipos; esto es peligroso; por eso se genera al mismo tuempo un script de type-checking
 */
