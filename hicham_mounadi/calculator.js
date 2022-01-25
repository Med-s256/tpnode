

// PERIMETRE

// Perimetre Cercle
const perimetreCercle = (diametre) => {
    const perimCercle = 3.14 * diametre
    return console.log(`Le perimetre de votre cercle est : ${perimCercle}`)
}

// Perimetre Triangle
const perimetreTriangle = (sideA, sideB, sideC) => {
    const perimTeriangle = sideA + sideB + sideC
    return console.log(`Le perimetre de votre triangle est : ${perimTeriangle}`)
}

// Perimetre Rectangle
const perimtreRectangle = (largeur1, longueurA, largeur2, longueurB) => {
    const perimRectancle = largeur1 + longueurA + largeur2 + longueurB
    return console.log(`Le perimetre de votre rectangle est : ${perimRectancle}`)
}

// SURFACE

// Surface cercle
const surfaceCercle = (rayon) =>{
    const surfCercle = 3.14 * (rayon * rayon)
    return console.log(`Surface du cercle est : ${surfCercle}`)
}

// Surface Triangle
const surfaceTriangle = (hauteurBase, baseSide) => {
    const surfTriangle = (hauteurBase * baseSide) / 2
    return console.log(`Surface du triangle est : ${surfTriangle}`)
}

// Surface rectangle
const surfRectangle = (largeur, hauteur) => {
    const surfRect = largeur * hauteur
    return console.log(`Surface du rectangle est : ${surfRect}`)
}

module.exports = {
    perimetreCercle,
    perimetreTriangle,
    perimtreRectangle,
    surfaceCercle,
    surfaceTriangle,
    surfRectangle
}