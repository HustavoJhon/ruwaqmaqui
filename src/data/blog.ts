export type BlogCategory = "Cuidado de Joyas" | "Tendencias" | "Historias" | "Consejos";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: string;
  image: string;
  content: string; // HTML content
  images?: string[]; // Additional images
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "como-cuidar-tus-joyas-oro-plata",
    title: "Cómo Cuidar tus Joyas de Oro y Plata",
    excerpt: "Descubre los mejores consejos para mantener tus joyas brillantes y en perfecto estado durante años.",
    category: "Cuidado de Joyas",
    date: "15 Enero 2024",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      "https://images.unsplash.com/photo-1588444650734-8ae5a61f47e9?w=800",
    ],
    content: `
      <p>
        Las joyas de oro y plata son inversiones valiosas que, con el cuidado adecuado, pueden durar generaciones. 
        En esta guía completa, te enseñamos todo lo que necesitas saber para mantener tus piezas en perfecto estado.
      </p>

      <h2>Limpieza Regular</h2>
      <p>
        La limpieza regular es fundamental para mantener el brillo de tus joyas. Para joyas de oro, puedes usar 
        una solución suave de agua tibia con jabón líquido neutro. Frota suavemente con un cepillo de dientes 
        suave y luego enjuaga con agua limpia.
      </p>
      <p>
        Para la plata, el proceso es similar, pero ten cuidado con las piezas que tienen gemas o esmaltes, 
        ya que algunos productos químicos pueden dañarlos.
      </p>

      <h2>Almacenamiento Correcto</h2>
      <p>
        Guarda tus joyas en un lugar seco y limpio. Lo ideal es usar bolsas individuales de tela suave o 
        cajas con separadores para evitar que se rayen entre sí. Nunca guardes todas tus joyas juntas sin protección.
      </p>

      <h2>Evita Productos Químicos</h2>
      <p>
        Quítate las joyas antes de usar productos de limpieza, perfumes, lacas para el cabello o cremas. 
        Estos productos pueden causar decoloración o dañar el acabado de tus piezas.
      </p>

      <h2>Mantenimiento Profesional</h2>
      <p>
        Recomendamos llevar tus joyas a un profesional al menos una vez al año para una limpieza profunda 
        y revisión de engarces y cierres. Esto asegurará que tus piezas estén en perfecto estado.
      </p>
    `,
  },
  {
    id: 2,
    slug: "tendencias-joyeria-2024",
    title: "Tendencias en Joyería 2024",
    excerpt: "Las tendencias más importantes en el mundo de la joyería para este año.",
    category: "Tendencias",
    date: "10 Enero 2024",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
    ],
    content: `
      <p>
        El 2024 trae consigo emocionantes tendencias en el mundo de la joyería que combinan lo clásico con lo moderno, 
        creando piezas únicas que reflejan la personalidad de quien las lleva.
      </p>

      <h2>Diseños Minimalistas</h2>
      <p>
        El minimalismo sigue siendo una tendencia fuerte en 2024. Piezas delicadas con líneas limpias y formas 
        geométricas simples están en auge. Estos diseños son versátiles y perfectos para el uso diario.
      </p>

      <h2>Joyas Personalizadas</h2>
      <p>
        La personalización es clave este año. Los clientes buscan piezas únicas que cuenten su historia. 
        Desde grabados personalizados hasta diseños completamente a medida, la personalización está en su punto máximo.
      </p>

      <h2>Oro Amarillo de Vuelta</h2>
      <p>
        Después de años de predominio del oro blanco y rosado, el oro amarillo está regresando con fuerza. 
        Su calidez y atemporalidad lo convierten en una elección popular para 2024.
      </p>

      <h2>Sustentabilidad</h2>
      <p>
        La conciencia ambiental influye en las decisiones de compra. Joyería hecha con materiales reciclados 
        y procesos sostenibles es cada vez más valorada por los consumidores conscientes.
      </p>
    `,
  },
  {
    id: 3,
    slug: "significado-simbolos-andinos-joyas",
    title: "El Significado de los Símbolos Andinos en Nuestras Joyas",
    excerpt: "Conoce el profundo significado cultural detrás de cada diseño en nuestra colección.",
    category: "Historias",
    date: "5 Enero 2024",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    ],
    content: `
      <p>
        Cada diseño en nuestra colección ORO INCA lleva consigo siglos de historia y significado profundo. 
        Los símbolos andinos no son solo decorativos; representan conceptos fundamentales de la cosmovisión incaica.
      </p>

      <h2>Inti - El Sol</h2>
      <p>
        El Inti, dios del sol en la mitología inca, representa poder, energía y vida. Las joyas con símbolos 
        solares están diseñadas para quienes buscan fuerza y vitalidad en sus vidas.
      </p>

      <h2>Killa - La Luna</h2>
      <p>
        Killa simboliza la feminidad, la fertilidad y la intuición. Nuestros diseños lunares son perfectos 
        para mujeres que valoran su conexión con la naturaleza y su esencia femenina.
      </p>

      <h2>Chakana - La Cruz Andina</h2>
      <p>
        La Chakana representa la conexión entre los tres mundos: Hanan Pacha (mundo superior), Kay Pacha 
        (mundo terrenal) y Uku Pacha (mundo inferior). Es un símbolo de equilibrio y armonía.
      </p>

      <h2>Serpiente - Transformación</h2>
      <p>
        La serpiente en la iconografía andina representa transformación y renovación. Las piezas con este 
        símbolo acompañan a quienes están en procesos de cambio y crecimiento personal.
      </p>
    `,
  },
  {
    id: 4,
    slug: "guia-elegir-anillo-perfecto",
    title: "Guía para Elegir el Anillo Perfecto",
    excerpt: "Todo lo que necesitas saber para encontrar el anillo ideal para tu ocasión especial.",
    category: "Consejos",
    date: "1 Enero 2024",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    content: `
      <p>
        Elegir el anillo perfecto es una decisión importante que requiere considerar varios factores. 
        Ya sea para compromiso, matrimonio o cualquier ocasión especial, esta guía te ayudará a tomar la mejor decisión.
      </p>

      <h2>Conoce la Talla</h2>
      <p>
        La talla correcta es fundamental. Un anillo muy grande puede perderse fácilmente, mientras que uno 
        muy pequeño puede ser incómodo. Si no estás seguro de la talla, puedes medir el dedo con un hilo 
        o visitar nuestra tienda para una medición profesional.
      </p>

      <h2>Estilo y Personalidad</h2>
      <p>
        Considera el estilo personal de quien llevará el anillo. ¿Prefiere diseños clásicos o modernos? 
        ¿Oro amarillo, blanco o rosado? Estas decisiones deben reflejar la personalidad y el gusto personal.
      </p>

      <h2>Presupuesto</h2>
      <p>
        Establece un presupuesto realista antes de comenzar a buscar. Recuerda que la calidad y el significado 
        de la pieza son más importantes que el precio. Ofrecemos opciones para diferentes presupuestos sin 
        comprometer la calidad.
      </p>

      <h2>Ocasion</h2>
      <p>
        El tipo de ocasión también influye en la elección. Un anillo de compromiso puede ser más elaborado, 
        mientras que uno para uso diario puede ser más simple y funcional.
      </p>
    `,
  },
  {
    id: 5,
    slug: "limpieza-profesional-joyas-casa",
    title: "Limpieza Profesional de Joyas en Casa",
    excerpt: "Aprende técnicas simples para limpiar tus joyas en casa de manera segura y efectiva.",
    category: "Cuidado de Joyas",
    date: "28 Diciembre 2023",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    content: `
      <p>
        Mantener tus joyas limpias no solo las hace lucir mejor, sino que también prolonga su vida útil. 
        Con las técnicas correctas, puedes lograr resultados profesionales desde la comodidad de tu hogar.
      </p>

      <h2>Materiales Necesarios</h2>
      <p>
        Para una limpieza efectiva necesitarás: agua tibia, jabón líquido neutro, cepillo de dientes suave, 
        paño de microfibra y, opcionalmente, bicarbonato de sodio para joyas de plata.
      </p>

      <h2>Proceso Paso a Paso</h2>
      <ol>
        <li>Llena un recipiente con agua tibia y añade unas gotas de jabón líquido neutro.</li>
        <li>Sumerge la joya durante 10-15 minutos.</li>
        <li>Usa un cepillo suave para limpiar áreas difíciles.</li>
        <li>Enjuaga con agua limpia.</li>
        <li>Seca cuidadosamente con un paño de microfibra.</li>
      </ol>

      <h2>Limpieza de Plata</h2>
      <p>
        Para joyas de plata, puedes usar una pasta hecha con bicarbonato de sodio y agua. Aplica suavemente 
        con un paño, enjuaga y seca. Evita este método si la pieza tiene gemas delicadas.
      </p>
    `,
  },
  {
    id: 6,
    slug: "historia-oro-peru",
    title: "La Historia del Oro en el Perú",
    excerpt: "Un recorrido por la rica historia de la orfebrería peruana y su legado ancestral.",
    category: "Historias",
    date: "20 Diciembre 2023",
    author: "Equipo ORO INCA",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
    ],
    content: `
      <p>
        El Perú tiene una relación milenaria con el oro que se remonta a las civilizaciones precolombinas. 
        Esta rica tradición orfebre continúa hoy en día, influenciando nuestros diseños contemporáneos.
      </p>

      <h2>Culturas Precolombinas</h2>
      <p>
        Civilizaciones como los Moche, Chimú e Incas fueron maestros en el trabajo del oro. Crearon 
        piezas increíblemente sofisticadas usando técnicas que aún hoy asombran a los orfebres modernos.
      </p>

      <h2>Técnicas Tradicionales</h2>
      <p>
        El repujado, el laminado y la soldadura eran técnicas comunes que se han transmitido de generación 
        en generación. Muchas de estas técnicas siguen siendo usadas en la joyería contemporánea peruana.
      </p>

      <h2>Legado Moderno</h2>
      <p>
        En ORO INCA, honramos esta tradición combinando técnicas ancestrales con diseño contemporáneo, 
        creando piezas que conectan el pasado con el presente.
      </p>
    `,
  },
];

