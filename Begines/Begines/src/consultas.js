//Mostrar los cuadros que tengan un precio de 65000000€ y que tengas 5 unidades.
db.cuadros.find(
    {
        precio : 65000000, 
        cantidad : 5 
    }
).pretty()

/*
{_id: 2, titulo: "La noche estrellada", peso:{num:18, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Vicent van Gogh", tecnica: "Pintura al oleo", periodo:"Arte moderno", estilo: "Pintura de paisaje", dimensiones:{alto:73, ancho:92, unid: "cm"}, ubicacion: "MoMA", colores: ["negro","azul","blanco","amarillo"], cantidad: 5},
{_id: 14, titulo: "El beso", peso:{num:11, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Gustav Klimt", tecnica: "Pintura al oleo sobre tela", periodo:"Modernismo", estilo: "Pintura de genero", dimensiones:{alto:180, ancho:180, unid: "cm"}, ubicacion: "Galería Belvedere", colores: ["negro", "blanco","dorado","gris","azul","amarillo","marron","morado"], cantidad: 5},
*/


//Mostrar los cuadros que tengan un precio de 65000000€ y que tengas 5 unidades.
db.cuadros.find(
    {$and : 
        [
            {precio: 65000000}, 
            {cantidad: 5}
        ] 
    }
).pretty()

/*
{_id: 2, titulo: "La noche estrellada", peso:{num:18, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Vicent van Gogh", tecnica: "Pintura al oleo", periodo:"Arte moderno", estilo: "Pintura de paisaje", dimensiones:{alto:73, ancho:92, unid: "cm"}, ubicacion: "MoMA", colores: ["negro","azul","blanco","amarillo"], cantidad: 5},
{_id: 14, titulo: "El beso", peso:{num:11, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Gustav Klimt", tecnica: "Pintura al oleo sobre tela", periodo:"Modernismo", estilo: "Pintura de genero", dimensiones:{alto:180, ancho:180, unid: "cm"}, ubicacion: "Galería Belvedere", colores: ["negro", "blanco","dorado","gris","azul","amarillo","marron","morado"], cantidad: 5},
*/


//Mostrar los cuadros que tengan el precio mayor o igual a 1000000 Ó que la cantidad sea 1
db.cuadros.find(
    {$or: 
        [
            {precio:{$gte: 1000000}}, 
            {cantidad: 1} 
        ]
    }
).pretty()

/*
{_id: 2, titulo: "La noche estrellada", peso:{num:18, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Vicent van Gogh", tecnica: "Pintura al oleo", periodo:"Arte moderno", estilo: "Pintura de paisaje", dimensiones:{alto:73, ancho:92, unid: "cm"}, ubicacion: "MoMA", colores: ["negro","azul","blanco","amarillo"], cantidad: 5},
{_id: 4, titulo: "Las meninas", peso:{num:30, unid:"kg"}, precio:{num: 191000000, unid: "euro"}, autor: "Diego Velazquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:318, ancho:276, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["negro", "blanco","ocre", "azul"], cantidad: 10},
{_id: 14, titulo: "El beso", peso:{num:11, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Gustav Klimt", tecnica: "Pintura al oleo sobre tela", periodo:"Modernismo", estilo: "Pintura de genero", dimensiones:{alto:180, ancho:180, unid: "cm"}, ubicacion: "Galería Belvedere", colores: ["negro", "blanco","dorado","gris","azul","amarillo","marron","morado"], cantidad: 5},
{_id: 15, titulo: "El jardín de las delicias", peso:{num:33, unid:"kg"}, precio:{num: 6000000, unid: "euro"}, autor: "El Bosco", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "cristiano", dimensiones:{alto:220, ancho:289, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["verde", "rojo","azul","naranja","amarillo","dorado"], cantidad: 4},
{_id: 17, titulo: "Gótico estadounidense", peso:{num:88, unid:"kg"}, precio:{num: 89000000, unid: "euro"}, autor: "Grant Wood", tecnica: "Pintura al aceite", periodo:"Modernismo", estilo: "Retrato", dimensiones:{alto:74, ancho:62, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "marron","blanco","gris","azul","verde"], cantidad: 8},
{_id: 18, titulo: "El hijo del hombre", peso:{num:220, unid:"kg"}, precio:{num: 3000000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:116, ancho:89, unid: "cm"}, ubicacion: "Colección privada", colores: ["negro", "rojo","blanco","gris","azul","verde"], cantidad: 10},
{_id: 19, titulo: "La lechera", peso:{num:289, unid:"kg"}, precio:{num: 50000000, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:445, ancho:410, unid: "cm"}, ubicacion: "Museo Rijks", colores: ["negro", "cafe","blanco","amarillo","azul","marron"], cantidad: 9},
{_id: 24, titulo: "La dama del armiño", peso:{num:2, unid:"kg"}, precio:{num: 24000000, unid: "euro"}, autor: "Leonardo da Vinci", tecnica: "Pintura al oleo y temple", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:54, ancho:39, unid: "cm"}, ubicacion: "Museo Czartoryski", colores: ["negro", "naranja","gris","azul","marron"], cantidad: 0},
{_id: 25, titulo: "Autorretrato", peso:{num:1, unid:"kg"}, precio:{num: 270000000, unid: "euro"}, autor: "Vincent van Gogh", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Retrato", dimensiones:{alto:60, ancho:54, unid: "cm"}, ubicacion: " Musée d'Orsay", colores: ["azul", "naranja","blanco","marron","verde"], cantidad: 7},
{_id: 10, titulo: "Los amantes", peso:{num:907, unid:"kg"}, precio:{num: 36000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 1},
{_id: 17, titulo: "Gótico estadounidense", peso:{num:88, unid:"kg"}, precio:{num: 89000000, unid: "euro"}, autor: "Grant Wood", tecnica: "Pintura al aceite", periodo:"Modernismo", estilo: "Retrato", dimensiones:{alto:74, ancho:62, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "marron","blanco","gris","azul","verde"], cantidad: 8},    
*/


//Mostrar los cuadros que NO tengan un precio mayor o igual a 1000000.
db.cuadros.find(
    {precio: 
        {$not:
            {$gte: 1000000}
        } 
    }
).pretty()

/*
{_id: 1, titulo: "La Gioconda", peso:{num:63, unid:"kg"}, precio:{num: 200000, unid: "euro"}, autor: "Leonardo Da Vinci", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:77, ancho:53, unid: "cm"}, ubicacion: "Museo del Louvre", colores: ["negro", "café","ocre","verde"], cantidad: 1},
{_id: 3, titulo: "Gernica", peso:{num:300, unid:"kg"}, precio:{num: 114000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:776, ancho:349, unid: "cm"}, ubicacion: "Museo Nacional de Arte Reina Sofia", colores: ["negro", "blanco","gris"], cantidad: 0},
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21},
{_id: 13, titulo: "La joven de la perla", peso:{num:53, unid:"kg"}, precio:{num: 56709, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo sobre tela", periodo:"Siglo de Oro", estilo: "Retrato", dimensiones:{alto:44, ancho:39, unid: "cm"}, ubicacion: "Mauritshuis", colores: ["negro", "rojo","amarillo","marron","azul","blanco"], cantidad: 21},
{_id: 16, titulo: "La primavera", peso:{num:12, unid:"kg"}, precio:{num:570000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura de historia", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:203, ancho:314, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["negro", "naranja","blanco","gris","azul","verde","rojo"], cantidad: 6},
{_id: 20, titulo: "Terraza de café por la noche", peso:{num:3, unid:"kg"}, precio:{num: 88000, unid: "euro"}, autor: "Vincent van Gogh", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cloisonismo", dimensiones:{alto:81, ancho:65, unid: "cm"}, ubicacion: "Museo Kröller-Müller", colores: ["negro", "naranja","blanco","amarillo","azul","verde"], cantidad: 2},
{_id: 21, titulo: "La tentación de San Antonio", peso:{num:250, unid:"kg"}, precio:{num: 790000, unid: "euro"}, autor: "Salvador Dalí", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "Museos Reales de Bellas Artes de Bélgica", colores: ["azul", "negro","blanco","amarillo"], cantidad: 13},
{_id: 22, titulo: "Lirios", peso:{num:1, unid:"kg"}, precio:{num: 200000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:900, ancho:119, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 11},
{_id: 23, titulo: "Nighthawks", peso:{num:23800, unid:"kg"}, precio:{num: 86000, unid: "euro"}, autor: "Edward Hopper", tecnica: "Pintura al aceite", periodo:"Realismo", estilo: "Retrato", dimensiones:{alto:840, ancho:152, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "naranja","amarillo","gris","azul","verde"], cantidad: 18},
{_id: 26, titulo: "Impresión, sol naciente", peso:{num:480, unid:"kg"}, precio:{num: 11000, unid: "euro"}, autor: "Claude Monet", tecnica: "Pintura al oleo", periodo:"Impresionismo", estilo: "Pintura de paisaje", dimensiones:{alto:48, ancho:63, unid: "cm"}, ubicacion: "Museo Marmottan Monet", colores: ["negro", "naranja","blanco","azul","verde"], cantidad: 5},
{_id: 27, titulo: "La Infanta Margarita en azul", peso:{num:200, unid:"kg"}, precio:{num: 7600000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:127, ancho:107, unid: "cm"}, ubicacion: "Museo de Historia del Arte de Viena", colores: ["negro", "amarillo","blanco","dorado","azul"], cantidad: 1},
{_id: 28, titulo: "Cristo crucificado", peso:{num:3, unid:"kg"}, precio:{num: 19000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:250, ancho:170, unid: "cm"}, ubicacion: "Museo del Prado", colores: ["negro", "marron","blanco","amarillo"], cantidad: 17},
{_id: 29, titulo: "Venus del espejo", peso:{num:180, unid:"kg"}, precio:{num: 22000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:122, ancho:177, unid: "cm"}, ubicacion: "Galeria Nacional", colores: ["marron", "rojo","blanco","rosa"], cantidad: 2},
{_id: 30, titulo: "Las señoritas de Avignon", peso:{num:14, unid:"kg"}, precio:{num: 2800000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:243, ancho:233, unid: "cm"}, ubicacion: "MoMA", colores: ["rosa", "rojo","blanco","negro","azul","naranja"], cantidad: 0},
*/


// Muestra los cuadros de Pablo Picasso cuyo peso sea superior a 200kg.
db.cuadros.find({$and:[
    {autor:{$in:
        ["Pablo Picasso"]}},
    {"cantidad.peso":{$gte:200}}, 
    {"cantidad.unid":"kg"}
]}).pretty()

/*
{_id: 3, titulo: "Gernica", peso:{num:300, unid:"kg"}, precio:{num: 114000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:776, ancho:349, unid: "cm"}, ubicacion: "Museo Nacional de Arte Reina Sofia", colores: ["negro", "blanco","gris"], cantidad: 0},
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21},
*/


//Mostrar todos los cuadros que tienen un precio mayor a 200000€
db.cuadros.find(
    {precio: { $gt:200000 }
}).pretty()

/*
{_id: 2, titulo: "La noche estrellada", peso:{num:18, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Vicent van Gogh", tecnica: "Pintura al oleo", periodo:"Arte moderno", estilo: "Pintura de paisaje", dimensiones:{alto:73, ancho:92, unid: "cm"}, ubicacion: "MoMA", colores: ["negro","azul","blanco","amarillo"], cantidad: 5},
{_id: 4, titulo: "Las meninas", peso:{num:30, unid:"kg"}, precio:{num: 191000000, unid: "euro"}, autor: "Diego Velazquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:318, ancho:276, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["negro", "blanco","ocre", "azul"], cantidad: 10},
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21},
{_id: 11, titulo: "El nacimiento de Venus", peso:{num:55, unid:"kg"}, precio:{num: 290000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura al temple", periodo:"Renacimeinto", estilo: "Retrato", dimensiones:{alto:172, ancho:278, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["naranja", "rosa","verde","blanco","marron"], cantidad: 0},
{_id: 14, titulo: "El beso", peso:{num:11, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Gustav Klimt", tecnica: "Pintura al oleo sobre tela", periodo:"Modernismo", estilo: "Pintura de genero", dimensiones:{alto:180, ancho:180, unid: "cm"}, ubicacion: "Galería Belvedere", colores: ["negro", "blanco","dorado","gris","azul","amarillo","marron","morado"], cantidad: 5},
{_id: 15, titulo: "El jardín de las delicias", peso:{num:33, unid:"kg"}, precio:{num: 6000000, unid: "euro"}, autor: "El Bosco", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "cristiano", dimensiones:{alto:220, ancho:289, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["verde", "rojo","azul","naranja","amarillo","dorado"], cantidad: 4},
{_id: 16, titulo: "La primavera", peso:{num:12, unid:"kg"}, precio:{num:570000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura de historia", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:203, ancho:314, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["negro", "naranja","blanco","gris","azul","verde","rojo"], cantidad: 6},
{_id: 17, titulo: "Gótico estadounidense", peso:{num:88, unid:"kg"}, precio:{num: 89000000, unid: "euro"}, autor: "Grant Wood", tecnica: "Pintura al aceite", periodo:"Modernismo", estilo: "Retrato", dimensiones:{alto:74, ancho:62, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "marron","blanco","gris","azul","verde"], cantidad: 8},
{_id: 18, titulo: "El hijo del hombre", peso:{num:220, unid:"kg"}, precio:{num: 3000000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:116, ancho:89, unid: "cm"}, ubicacion: "Colección privada", colores: ["negro", "rojo","blanco","gris","azul","verde"], cantidad: 10},
{_id: 19, titulo: "La lechera", peso:{num:289, unid:"kg"}, precio:{num: 50000000, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:445, ancho:410, unid: "cm"}, ubicacion: "Museo Rijks", colores: ["negro", "cafe","blanco","amarillo","azul","marron"], cantidad: 9},
{_id: 21, titulo: "La tentación de San Antonio", peso:{num:250, unid:"kg"}, precio:{num: 790000, unid: "euro"}, autor: "Salvador Dalí", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "Museos Reales de Bellas Artes de Bélgica", colores: ["azul", "negro","blanco","amarillo"], cantidad: 13},
{_id: 24, titulo: "La dama del armiño", peso:{num:2, unid:"kg"}, precio:{num: 24000000, unid: "euro"}, autor: "Leonardo da Vinci", tecnica: "Pintura al oleo y temple", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:54, ancho:39, unid: "cm"}, ubicacion: "Museo Czartoryski", colores: ["negro", "naranja","gris","azul","marron"], cantidad: 0},
{_id: 25, titulo: "Autorretrato", peso:{num:1, unid:"kg"}, precio:{num: 270000000, unid: "euro"}, autor: "Vincent van Gogh", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Retrato", dimensiones:{alto:60, ancho:54, unid: "cm"}, ubicacion: " Musée d'Orsay", colores: ["azul", "naranja","blanco","marron","verde"], cantidad: 7},
{_id: 27, titulo: "La Infanta Margarita en azul", peso:{num:200, unid:"kg"}, precio:{num: 7600000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:127, ancho:107, unid: "cm"}, ubicacion: "Museo de Historia del Arte de Viena", colores: ["negro", "amarillo","blanco","dorado","azul"], cantidad: 1},
{_id: 30, titulo: "Las señoritas de Avignon", peso:{num:14, unid:"kg"}, precio:{num: 2800000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:243, ancho:233, unid: "cm"}, ubicacion: "MoMA", colores: ["rosa", "rojo","blanco","negro","azul","naranja"], cantidad: 0},
*/

//Mostrar todos los cuadros que en el campo cantidad sea 10 o más
db.cuadros.find( 
    { cantidad: 
        { $gte : 10 }
    }
).pretty()

/*
{_id: 4, titulo: "Las meninas", peso:{num:30, unid:"kg"}, precio:{num: 191000000, unid: "euro"}, autor: "Diego Velazquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:318, ancho:276, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["negro", "blanco","ocre", "azul"], cantidad: 10},
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21}
{_id: 6, titulo: "La persistencia de la memoria", peso:{num:1400, unid:"kg"}, precio:{num: 349, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Alegoria", dimensiones:{alto:24, ancho:33, unid: "cm"}, ubicacion: "MoMA", colores: ["azul", "gris","blanco","ocre","marron","amarillo"], cantidad: 12},
{_id: 12, titulo: "Composición Ocho", peso:{num:5, unid:"kg"}, precio:{num: 18000, unid: "euro"}, autor: "Vasili Kandinski", tecnica: "Pintura al oleo", periodo:"Suprematismo", estilo: "Abstracto", dimensiones:{alto:140, ancho:201, unid: "cm"}, ubicacion: "Museo Solomon R. Guggenheim", colores: ["negro", "naranja","blanco","gris","azul","verde","amarillo","morado"], cantidad: 11},
{_id: 13, titulo: "La joven de la perla", peso:{num:53, unid:"kg"}, precio:{num: 56709, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo sobre tela", periodo:"Siglo de Oro", estilo: "Retrato", dimensiones:{alto:44, ancho:39, unid: "cm"}, ubicacion: "Mauritshuis", colores: ["negro", "rojo","amarillo","marron","azul","blanco"], cantidad: 21},
{_id: 18, titulo: "El hijo del hombre", peso:{num:220, unid:"kg"}, precio:{num: 3000000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:116, ancho:89, unid: "cm"}, ubicacion: "Colección privada", colores: ["negro", "rojo","blanco","gris","azul","verde"], cantidad: 10},
{_id: 21, titulo: "La tentación de San Antonio", peso:{num:250, unid:"kg"}, precio:{num: 790000, unid: "euro"}, autor: "Salvador Dalí", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "Museos Reales de Bellas Artes de Bélgica", colores: ["azul", "negro","blanco","amarillo"], cantidad: 13},
{_id: 22, titulo: "Lirios", peso:{num:1, unid:"kg"}, precio:{num: 200000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:900, ancho:119, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 11},
{_id: 23, titulo: "Nighthawks", peso:{num:23800, unid:"kg"}, precio:{num: 86000, unid: "euro"}, autor: "Edward Hopper", tecnica: "Pintura al aceite", periodo:"Realismo", estilo: "Retrato", dimensiones:{alto:840, ancho:152, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "naranja","amarillo","gris","azul","verde"], cantidad: 18},
{_id: 28, titulo: "Cristo crucificado", peso:{num:3, unid:"kg"}, precio:{num: 19000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:250, ancho:170, unid: "cm"}, ubicacion: "Museo del Prado", colores: ["negro", "marron","blanco","amarillo"], cantidad: 17},
*/


//Mostrar todos los cuadros que en el campo cantidad haya un valor distinto a 5:
db.cuadros.find( 
    { cantidad: 
        { $ne : 5 }
    }
).pretty()


/*
{_id: 3, titulo: "Gernica", peso:{num:300, unid:"kg"}, precio:{num: 114000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:776, ancho:349, unid: "cm"}, ubicacion: "Museo Nacional de Arte Reina Sofia", colores: ["negro", "blanco","gris"], cantidad: 0},
{_id: 4, titulo: "Las meninas", peso:{num:30, unid:"kg"}, precio:{num: 191000000, unid: "euro"}, autor: "Diego Velazquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:318, ancho:276, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["negro", "blanco","ocre", "azul"], cantidad: 10},
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21},
{_id: 6, titulo: "La persistencia de la memoria", peso:{num:1400, unid:"kg"}, precio:{num: 349, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Alegoria", dimensiones:{alto:24, ancho:33, unid: "cm"}, ubicacion: "MoMA", colores: ["azul", "gris","blanco","ocre","marron","amarillo"], cantidad: 12},
{_id: 7, titulo: "Hombre de Vitruvio", peso:{num:63, unid:"kg"}, precio:{num: 15000, unid: "euro"}, autor: "Leonardo Da Vinci", tecnica: "Tinta sobre papel", periodo:"Renacimiento", estilo: "Dibujo anatomia", dimensiones:{alto:35, ancho:26, unid: "cm"}, ubicacion: "Galeria de la Academia de Venecia", colores: ["negro"], cantidad: 9},
{_id: 8, titulo: "La metamorfosis de Narciso", peso:{num:75, unid:"kg"}, precio:{num: 1900, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al aceite", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:52, ancho:78, unid: "cm"}, ubicacion: "Tate Moderm", colores: ["amarillo", "naranja","rojo","marron"], cantidad: 3},
{_id: 9, titulo: "El triunfo de Galatea", peso:{num:8, unid:"kg"}, precio:{num: 53000, unid: "euro"}, autor: "Rafael Sanzio", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "Fresco", dimensiones:{alto:297, ancho:225, unid: "cm"}, ubicacion: "Villa Farnesina", colores: ["azul", "marron","ocre","blanco"], cantidad: 2},
{_id: 10, titulo: "Los amantes", peso:{num:907, unid:"kg"}, precio:{num: 36000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 1},
{_id: 11, titulo: "El nacimiento de Venus", peso:{num:55, unid:"kg"}, precio:{num: 290000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura al temple", periodo:"Renacimeinto", estilo: "Retrato", dimensiones:{alto:172, ancho:278, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["naranja", "rosa","verde","blanco","marron"], cantidad: 0},
{_id: 12, titulo: "Composición Ocho", peso:{num:5, unid:"kg"}, precio:{num: 18000, unid: "euro"}, autor: "Vasili Kandinski", tecnica: "Pintura al oleo", periodo:"Suprematismo", estilo: "Abstracto", dimensiones:{alto:140, ancho:201, unid: "cm"}, ubicacion: "Museo Solomon R. Guggenheim", colores: ["negro", "naranja","blanco","gris","azul","verde","amarillo","morado"], cantidad: 11},
{_id: 13, titulo: "La joven de la perla", peso:{num:53, unid:"kg"}, precio:{num: 56709, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo sobre tela", periodo:"Siglo de Oro", estilo: "Retrato", dimensiones:{alto:44, ancho:39, unid: "cm"}, ubicacion: "Mauritshuis", colores: ["negro", "rojo","amarillo","marron","azul","blanco"], cantidad: 21},
{_id: 15, titulo: "El jardín de las delicias", peso:{num:33, unid:"kg"}, precio:{num: 6000000, unid: "euro"}, autor: "El Bosco", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "cristiano", dimensiones:{alto:220, ancho:289, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["verde", "rojo","azul","naranja","amarillo","dorado"], cantidad: 4},
{_id: 16, titulo: "La primavera", peso:{num:12, unid:"kg"}, precio:{num:570000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura de historia", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:203, ancho:314, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["negro", "naranja","blanco","gris","azul","verde","rojo"], cantidad: 6},
{_id: 17, titulo: "Gótico estadounidense", peso:{num:88, unid:"kg"}, precio:{num: 89000000, unid: "euro"}, autor: "Grant Wood", tecnica: "Pintura al aceite", periodo:"Modernismo", estilo: "Retrato", dimensiones:{alto:74, ancho:62, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "marron","blanco","gris","azul","verde"], cantidad: 8},
{_id: 18, titulo: "El hijo del hombre", peso:{num:220, unid:"kg"}, precio:{num: 3000000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:116, ancho:89, unid: "cm"}, ubicacion: "Colección privada", colores: ["negro", "rojo","blanco","gris","azul","verde"], cantidad: 10},
{_id: 19, titulo: "La lechera", peso:{num:289, unid:"kg"}, precio:{num: 50000000, unid: "euro"}, autor: "Johannes Vermeer", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:445, ancho:410, unid: "cm"}, ubicacion: "Museo Rijks", colores: ["negro", "cafe","blanco","amarillo","azul","marron"], cantidad: 9},
{_id: 20, titulo: "Terraza de café por la noche", peso:{num:3, unid:"kg"}, precio:{num: 88000, unid: "euro"}, autor: "Vincent van Gogh", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cloisonismo", dimensiones:{alto:81, ancho:65, unid: "cm"}, ubicacion: "Museo Kröller-Müller", colores: ["negro", "naranja","blanco","amarillo","azul","verde"], cantidad: 2},
{_id: 21, titulo: "La tentación de San Antonio", peso:{num:250, unid:"kg"}, precio:{num: 790000, unid: "euro"}, autor: "Salvador Dalí", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "Museos Reales de Bellas Artes de Bélgica", colores: ["azul", "negro","blanco","amarillo"], cantidad: 13},
{_id: 22, titulo: "Lirios", peso:{num:1, unid:"kg"}, precio:{num: 200000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:900, ancho:119, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 11},
{_id: 23, titulo: "Nighthawks", peso:{num:23800, unid:"kg"}, precio:{num: 86000, unid: "euro"}, autor: "Edward Hopper", tecnica: "Pintura al aceite", periodo:"Realismo", estilo: "Retrato", dimensiones:{alto:840, ancho:152, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["negro", "naranja","amarillo","gris","azul","verde"], cantidad: 18},
{_id: 24, titulo: "La dama del armiño", peso:{num:2, unid:"kg"}, precio:{num: 24000000, unid: "euro"}, autor: "Leonardo da Vinci", tecnica: "Pintura al oleo y temple", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:54, ancho:39, unid: "cm"}, ubicacion: "Museo Czartoryski", colores: ["negro", "naranja","gris","azul","marron"], cantidad: 0},
{_id: 25, titulo: "Autorretrato", peso:{num:1, unid:"kg"}, precio:{num: 270000000, unid: "euro"}, autor: "Vincent van Gogh", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Retrato", dimensiones:{alto:60, ancho:54, unid: "cm"}, ubicacion: " Musée d'Orsay", colores: ["azul", "naranja","blanco","marron","verde"], cantidad: 7},
{_id: 27, titulo: "La Infanta Margarita en azul", peso:{num:200, unid:"kg"}, precio:{num: 7600000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:127, ancho:107, unid: "cm"}, ubicacion: "Museo de Historia del Arte de Viena", colores: ["negro", "amarillo","blanco","dorado","azul"], cantidad: 1},
{_id: 28, titulo: "Cristo crucificado", peso:{num:3, unid:"kg"}, precio:{num: 19000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:250, ancho:170, unid: "cm"}, ubicacion: "Museo del Prado", colores: ["negro", "marron","blanco","amarillo"], cantidad: 17},
{_id: 29, titulo: "Venus del espejo", peso:{num:180, unid:"kg"}, precio:{num: 22000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:122, ancho:177, unid: "cm"}, ubicacion: "Galeria Nacional", colores: ["marron", "rojo","blanco","rosa"], cantidad: 2},
{_id: 30, titulo: "Las señoritas de Avignon", peso:{num:14, unid:"kg"}, precio:{num: 2800000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Cubismo", dimensiones:{alto:243, ancho:233, unid: "cm"}, ubicacion: "MoMA", colores: ["rosa", "rojo","blanco","negro","azul","naranja"], cantidad: 0},

*/

//Mostrar todos los cuadros cuyo precio estén comprendidos entre 15000 y 50000:
db.cuadros.find( 
    { precio: 
        { $gte : 15000 , $lte : 50000}
    }
).pretty()

/*
{_id: 6, titulo: "La persistencia de la memoria", peso:{num:1400, unid:"kg"}, precio:{num: 349, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Alegoria", dimensiones:{alto:24, ancho:33, unid: "cm"}, ubicacion: "MoMA", colores: ["azul", "gris","blanco","ocre","marron","amarillo"], cantidad: 12},
{_id: 7, titulo: "Hombre de Vitruvio", peso:{num:63, unid:"kg"}, precio:{num: 15000, unid: "euro"}, autor: "Leonardo Da Vinci", tecnica: "Tinta sobre papel", periodo:"Renacimiento", estilo: "Dibujo anatomia", dimensiones:{alto:35, ancho:26, unid: "cm"}, ubicacion: "Galeria de la Academia de Venecia", colores: ["negro"], cantidad: 9},
{_id: 8, titulo: "La metamorfosis de Narciso", peso:{num:75, unid:"kg"}, precio:{num: 1900, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al aceite", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:52, ancho:78, unid: "cm"}, ubicacion: "Tate Moderm", colores: ["amarillo", "naranja","rojo","marron"], cantidad: 3},
{_id: 10, titulo: "Los amantes", peso:{num:907, unid:"kg"}, precio:{num: 36000, unid: "euro"}, autor: "René Magritte", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Retrato", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "MoMA", colores: ["negro", "naranja","blanco","gris","azul","verde"], cantidad: 1},
{_id: 12, titulo: "Composición Ocho", peso:{num:5, unid:"kg"}, precio:{num: 18000, unid: "euro"}, autor: "Vasili Kandinski", tecnica: "Pintura al oleo", periodo:"Suprematismo", estilo: "Abstracto", dimensiones:{alto:140, ancho:201, unid: "cm"}, ubicacion: "Museo Solomon R. Guggenheim", colores: ["negro", "naranja","blanco","gris","azul","verde","amarillo","morado"], cantidad: 11},
{_id: 26, titulo: "Impresión, sol naciente", peso:{num:480, unid:"kg"}, precio:{num: 11000, unid: "euro"}, autor: "Claude Monet", tecnica: "Pintura al oleo", periodo:"Impresionismo", estilo: "Pintura de paisaje", dimensiones:{alto:48, ancho:63, unid: "cm"}, ubicacion: "Museo Marmottan Monet", colores: ["negro", "naranja","blanco","azul","verde"], cantidad: 5},
{_id: 28, titulo: "Cristo crucificado", peso:{num:3, unid:"kg"}, precio:{num: 19000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:250, ancho:170, unid: "cm"}, ubicacion: "Museo del Prado", colores: ["negro", "marron","blanco","amarillo"], cantidad: 17},
{_id: 29, titulo: "Venus del espejo", peso:{num:180, unid:"kg"}, precio:{num: 22000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:122, ancho:177, unid: "cm"}, ubicacion: "Galeria Nacional", colores: ["marron", "rojo","blanco","rosa"], cantidad: 2},
*/


//Mostrar todos los cuadros del periodo del Renacimiento:
db.cuadros.find( 
    { periodo: 
        { $in : 
            ['Renacimiento'] 
        } 
    }
).pretty()

/*
{_id: 7, titulo: "Hombre de Vitruvio", peso:{num:63, unid:"kg"}, precio:{num: 15000, unid: "euro"}, autor: "Leonardo Da Vinci", tecnica: "Tinta sobre papel", periodo:"Renacimiento", estilo: "Dibujo anatomia", dimensiones:{alto:35, ancho:26, unid: "cm"}, ubicacion: "Galeria de la Academia de Venecia", colores: ["negro"], cantidad: 9},
{_id: 9, titulo: "El triunfo de Galatea", peso:{num:8, unid:"kg"}, precio:{num: 53000, unid: "euro"}, autor: "Rafael Sanzio", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "Fresco", dimensiones:{alto:297, ancho:225, unid: "cm"}, ubicacion: "Villa Farnesina", colores: ["azul", "marron","ocre","blanco"], cantidad: 2},
{_id: 15, titulo: "El jardín de las delicias", peso:{num:33, unid:"kg"}, precio:{num: 6000000, unid: "euro"}, autor: "El Bosco", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "cristiano", dimensiones:{alto:220, ancho:289, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["verde", "rojo","azul","naranja","amarillo","dorado"], cantidad: 4},
{_id: 16, titulo: "La primavera", peso:{num:12, unid:"kg"}, precio:{num:570000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura de historia", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:203, ancho:314, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["negro", "naranja","blanco","gris","azul","verde","rojo"], cantidad: 6},
{_id: 24, titulo: "La dama del armiño", peso:{num:2, unid:"kg"}, precio:{num: 24000000, unid: "euro"}, autor: "Leonardo da Vinci", tecnica: "Pintura al oleo y temple", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:54, ancho:39, unid: "cm"}, ubicacion: "Museo Czartoryski", colores: ["negro", "naranja","gris","azul","marron"], cantidad: 0},
*/


//Recuperar todos los cuadros que no usen la tecnica 'Pintura al oleo':
db.cuadros.find( 
    { tecnica: 
        { $nin : 
            ['Pintura al oleo'] 
        } 
    }
).pretty()

/*
{_id: 5, titulo: "El viejo guitarrista ciego", peso:{num:1300, unid:"kg"}, precio:{num: 250000, unid: "euro"}, autor: "Pablo Picasso", tecnica: "Pintura al aceite", periodo:"Postimpresionismo", estilo: "Pintura de género", dimensiones:{alto:123, ancho:83, unid: "cm"}, ubicacion: "Instituto de Arte de Chicago", colores: ["azul", "café","marron","blanco","negro"], cantidad: 21},
{_id: 7, titulo: "Hombre de Vitruvio", peso:{num:63, unid:"kg"}, precio:{num: 15000, unid: "euro"}, autor: "Leonardo Da Vinci", tecnica: "Tinta sobre papel", periodo:"Renacimiento", estilo: "Dibujo anatomia", dimensiones:{alto:35, ancho:26, unid: "cm"}, ubicacion: "Galeria de la Academia de Venecia", colores: ["negro"], cantidad: 9},
{_id: 8, titulo: "La metamorfosis de Narciso", peso:{num:75, unid:"kg"}, precio:{num: 1900, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al aceite", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:52, ancho:78, unid: "cm"}, ubicacion: "Tate Moderm", colores: ["amarillo", "naranja","rojo","marron"], cantidad: 3},
{_id: 16, titulo: "La primavera", peso:{num:12, unid:"kg"}, precio:{num:570000, unid: "euro"}, autor: "Sandro Botticelli", tecnica: "Pintura de historia", periodo:"Renacimiento", estilo: "Retrato", dimensiones:{alto:203, ancho:314, unid: "cm"}, ubicacion: "Galeria degli Uffizi", colores: ["negro", "naranja","blanco","gris","azul","verde","rojo"], cantidad: 6},
{_id: 27, titulo: "La Infanta Margarita en azul", peso:{num:200, unid:"kg"}, precio:{num: 7600000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:127, ancho:107, unid: "cm"}, ubicacion: "Museo de Historia del Arte de Viena", colores: ["negro", "amarillo","blanco","dorado","azul"], cantidad: 1},
{_id: 29, titulo: "Venus del espejo", peso:{num:180, unid:"kg"}, precio:{num: 22000, unid: "euro"}, autor: "Diego Velázquez", tecnica: "Pintura al aceite", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:122, ancho:177, unid: "cm"}, ubicacion: "Galeria Nacional", colores: ["marron", "rojo","blanco","rosa"], cantidad: 2},
*/


// Muestra los pedidos con un cobro menos o igual a 500000 que hayan llegado con retraso.
db.pedidos.find({
    precio:{$lte:500000},
    retraso:true
}).pretty()

/*
{_id: 5, producto: "Venus del espejo", cantidad: 2, precio: 22000, ciudad: "Cordoba", fechaPedido: new Date("2021,09,09"), fechaEntrega: new Date("2021,11,10"), retraso: true}
{_id: 7, producto: "Los amantes", cantidad: 8, precio: 36000, ciudad: "Toledo", fechaPedido: new Date("2021,02,24"), fechaEntrega: new Date("2021,07,28"), retraso: true},
{_id: 9, producto: "El triunfo de Galatea", cantidad: 3, precio: 53000, ciudad: "Valencia", fechaPedido: new Date("2021,06,03"), fechaEntrega: new Date("2021,11,09"), retraso: true},
*/ 


// Muestra los pedidos del cuadro 'Nighthawks' que no hayan sido enviados con retraso.
db.pedidos.find( {$and:[
    {producto:
        {$regex: /^Nighthawks/i}},
    {retraso:false}
]}).pretty()

/*
{_id: 13, producto: "Nighthawks", cantidad: 3, precio: 86000, ciudad: "Badajoz", fechaPedido: new Date("2021,06,16"), fechaEntrega: new Date("2021,10,30"), retraso: false},
*/


//Muestra los pedidos realizados en Madrid, Sevilla o Barcelona cuya cantidad supere las 5 unidades y un precio de 1000000
db.pedidos.find(
    {$or:[
        {$and:[
            {ciudad:{$in:["Madrid","Sevilla","Barcelona"]}},
            {precio:{$gt:1000000}},
            {cantidad:{$gte:5}}

        ]}
    ]}
).pretty()

/*
{_id: 1, producto: "Las meninas", cantidad: 5, precio: 191000000, ciudad: "Madrid", fechaPedido: new Date("2021,01,05"), fechaEntrega: new Date("2021,11,07"), retraso: true},
{_id: 2, producto: "La lechera", cantidad: 8, precio: 50000000, ciudad: "Sevilla", fechaPedido: new Date("2021,03,24"), fechaEntrega: new Date("2021,07,07"), retraso: false},
{_id: 3, producto: "El beso", cantidad: 10, precio: 65000000, ciudad: "Barcelona", fechaPedido: new Date("2021,05,30"), fechaEntrega: new Date("2021,10,09"), retraso: true},
*/

//Muestra pedido entregados entre febrero y octubre de 2021
db.pedidos.find(
    {
        date: {$gte: new Date("2021-02-01"), $lte: new Date("2021-10-01")},
    }
).pretty()

/*
{_id: 2, producto: "La lechera", cantidad: 8, precio: 50000000, ciudad: "Sevilla", fechaPedido: new Date("2021,03,24"), fechaEntrega: new Date("2021,07,07"), retraso: false},
{_id: 3, producto: "El beso", cantidad: 10, precio: 65000000, ciudad: "Barcelona", fechaPedido: new Date("2021,05,30"), fechaEntrega: new Date("2021,10,09"), retraso: true},
{_id: 6, producto: "Gotico estadounidense", cantidad: 4, precio: 89000000, ciudad: "Zaragoza", fechaPedido: new Date("2021,01,02"), fechaEntrega: new Date("2021,09,20"), retraso: false},
{_id: 7, producto: "Los amantes", cantidad: 8, precio: 36000, ciudad: "Toledo", fechaPedido: new Date("2021,02,24"), fechaEntrega: new Date("2021,07,28"), retraso: true},
{_id: 8, producto: "La Gioconda", cantidad: 10, precio: 200000, ciudad: "Palma", fechaPedido: new Date("2021,04,26"), fechaEntrega: new Date("2021,10,10"), retraso: false},
{_id: 10, producto: "Lirios", cantidad: 1, precio: 200000, ciudad: "Burgos", fechaPedido: new Date("2021,08,16"), fechaEntrega: new Date("2021,09,17"), retraso: false},    
{_id: 13, producto: "Nighthawks", cantidad: 3, precio: 86000, ciudad: "Badajoz", fechaPedido: new Date("2021,06,16"), fechaEntrega: new Date("2021,10,30"), retraso: false},
{_id: 14, producto: "La persistencia de la memoria", cantidad: 7, precio: 349, ciudad: "Asturias", fechaPedido: new Date("2021,07,19"), fechaEntrega: new Date("2021,08,20"), retraso: false},
{_id: 15, producto: "La noche estrellada", cantidad: 21, precio: 66000000, ciudad: "Salamanca", fechaPedido: new Date("2021,02,23"), fechaEntrega: new Date("2021,07,23"), retraso: false},
*/

//Mostrar todos los cuadros que contengan el color ocre
db.cuadros.find({
    colores: {$all: ["ocre"]},
})

/*
{_id: 4, titulo: "Las meninas", peso:{num:30, unid:"kg"}, precio:{num: 191000000, unid: "euro"}, autor: "Diego Velazquez", tecnica: "Pintura al oleo", periodo:"Barroco", estilo: "Retrato", dimensiones:{alto:318, ancho:276, unid: "cm"}, ubicacion: "Museo Nacional del Prado", colores: ["negro", "blanco","ocre", "azul"], cantidad: 10},
{_id: 6, titulo: "La persistencia de la memoria", peso:{num:1400, unid:"kg"}, precio:{num: 349, unid: "euro"}, autor: "Salvador Dali", tecnica: "Pintura al oleo", periodo:"Postimpresionismo", estilo: "Alegoria", dimensiones:{alto:24, ancho:33, unid: "cm"}, ubicacion: "MoMA", colores: ["azul", "gris","blanco","ocre","marron","amarillo"], cantidad: 12},
{_id: 9, titulo: "El triunfo de Galatea", peso:{num:8, unid:"kg"}, precio:{num: 53000, unid: "euro"}, autor: "Rafael Sanzio", tecnica: "Pintura al oleo", periodo:"Renacimiento", estilo: "Fresco", dimensiones:{alto:297, ancho:225, unid: "cm"}, ubicacion: "Villa Farnesina", colores: ["azul", "marron","ocre","blanco"], cantidad: 2},
*/


//Mostrar todos los cuadros que simplemente esten pintados con los colores negro, azul, blanco, amarillo
db.cuadros.find({
    colores: {$eq: ["negro","azul","blanco","amarillo"]},
})

/*
{_id: 2, titulo: "La noche estrellada", peso:{num:18, unid:"kg"}, precio:{num: 65000000, unid: "euro"}, autor: "Vicent van Gogh", tecnica: "Pintura al oleo", periodo:"Arte moderno", estilo: "Pintura de paisaje", dimensiones:{alto:73, ancho:92, unid: "cm"}, ubicacion: "MoMA", colores: ["negro","azul","blanco","amarillo"], cantidad: 5},
{_id: 21, titulo: "La tentación de San Antonio", peso:{num:250, unid:"kg"}, precio:{num: 790000, unid: "euro"}, autor: "Salvador Dalí", tecnica: "Pintura al oleo", periodo:"Subrrealismo", estilo: "Abstracto", dimensiones:{alto:54, ancho:73, unid: "cm"}, ubicacion: "Museos Reales de Bellas Artes de Bélgica", colores: ["negro","azul","blanco","amarillo"], cantidad: 13},
*/


//Muestra los pedidos de más de 15 cuadros realilzados en 2021 sin retraso en Salamanca
db.pedidos.find({$and:[
        {ciudad:{$eq: "Salamanca"}},
        {"fechaEntrega":{"$gte": new Date("2021,01,01")}},
        {cantidad:{$gte:15}},
        {retraso: false}
    
]}).pretty()

/*
{_id: 15, producto: "La noche estrellada", cantidad: 21, precio: 66000000, ciudad: "Salamanca", fechaPedido: new Date("2021,02,23"), fechaEntrega: new Date("2021,07,23"), retraso: false},
*/