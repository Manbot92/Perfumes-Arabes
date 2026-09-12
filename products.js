// Catálogo centralizado — edita aquí para actualizar la tienda.
// destacado:true = aparece en Home. perfil = 6 rasgos (0-10) para el gráfico radial.
// imagenes[0] se usa como miniatura de la tarjeta; el resto solo aparece en el modal de detalle.
const PRODUCTS = [
  {
    id: "oud-royal",
    nombre: "Oud Royal Intenso",
    precio: 1290,
    genero: "hombre",
    destacado: true,
    notas: ["Oud", "Ámbar", "Madera de Agar"],
    descripcion: "Una fragancia densa y envolvente inspirada en los oasis del desierto.",
    imagenes: [
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 9, Duración: 9, Dulzura: 4, Amaderado: 9, Frescura: 2, Sensualidad: 7 }
  },
  {
    id: "musk-noir",
    nombre: "Musk Noir",
    precio: 990,
    genero: "unisex",
    destacado: true,
    notas: ["Almizcle", "Vainilla", "Sándalo"],
    descripcion: "Cálida y seductora, ideal para las noches de invierno.",
    imagenes: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3faa74b6b84?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 7, Duración: 8, Dulzura: 6, Amaderado: 5, Frescura: 3, Sensualidad: 9 }
  },
  {
    id: "zafran-gold",
    nombre: "Zafrán Gold",
    precio: 1150,
    genero: "mujer",
    destacado: true,
    notas: ["Azafrán", "Rosa Damascena", "Cuero"],
    descripcion: "Una explosión especiada con un toque floral de opulencia oriental.",
    imagenes: [
      "https://images.unsplash.com/photo-1592945403244-b3faa74b6b84?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 8, Duración: 7, Dulzura: 7, Amaderado: 4, Frescura: 4, Sensualidad: 8 }
  },
  {
    id: "amber-nights",
    nombre: "Amber Nights",
    precio: 1090,
    genero: "unisex",
    destacado: false,
    notas: ["Ámbar Gris", "Incienso", "Vainilla"],
    descripcion: "Elegancia atemporal envuelta en resinas preciosas de Oriente.",
    imagenes: [
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 8, Duración: 8, Dulzura: 5, Amaderado: 6, Frescura: 3, Sensualidad: 7 }
  },
  {
    id: "rose-oud",
    nombre: "Rose Al Oud",
    precio: 1350,
    genero: "mujer",
    destacado: false,
    notas: ["Rosa", "Oud", "Azafrán"],
    descripcion: "El equilibrio perfecto entre la delicadeza floral y la fuerza del oud.",
    imagenes: [
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3faa74b6b84?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 7, Duración: 8, Dulzura: 6, Amaderado: 7, Frescura: 3, Sensualidad: 6 }
  },
  {
    id: "sultan-wood",
    nombre: "Sultan Wood",
    precio: 950,
    genero: "hombre",
    destacado: false,
    notas: ["Sándalo", "Cedro", "Pimienta Negra"],
    descripcion: "Amaderada e imponente, la firma olfativa de un verdadero sultán.",
    imagenes: [
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop"
    ],
    ml: "https://www.mercadolibre.com/",
    perfil: { Intensidad: 6, Duración: 6, Dulzura: 2, Amaderado: 9, Frescura: 6, Sensualidad: 5 }
  }
];
