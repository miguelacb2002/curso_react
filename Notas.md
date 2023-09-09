- React ciclos de vida:

- Distribucion de carpetas
-> Pages se crean las vistas 



- ciclo de vida de un componente en react
useEffect (ver vista categorias)
- Hooks en react permiten manejar estados locales dentro del componente, garantiza que la informacion del hook es inmutable.
const [nombre_variable, funcion de escritura] = usestate(valor incial) mejora la experiencia del desarrollo. 

- por qué usar react-> reutilizacion de codigo, mantenibilidad. 
reduccion de duplicacion de codigo y logica, evita las clases y los posibles inconvenientes de la herencia.  

- Formulario basado en steps 

-Compenten padre e hijos: la pagina (pages) es el vomponente padre 
en la carperta components se dejan los componetes hijos.

- Yo necesito almacenar la información en el hook del componente padre, le paso la funcion que coloca ese dato en el hook al componete hijo. Es decir, quiero visualizar desde el compoenente padre, pero quiero que sea el componente hijo el que realice el cambio. Para eso utilizo propiedades donde pinto el componente hijo

- ¿Qué es redux? -->> biblioteca de gestion de estados
- ¿Que consigo con redux? -->> gestionar la aplicacion de forma global el estafo de la aplicacion se concentra en un unico objeto, este objeto es el store, toda la infromacion relavante de la apñicacion se almacena aquí los que facilita el acceso del estado en toda la aplicación. no podemos modificar directamente un estado.  