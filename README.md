# Padrões de projeto de criação (creational)

Os padrões de projeto de criação são padrões que abstraem o processo de instanciação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atingem este objetivo delegando tarefas para outros objetos.  

Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são usadas. Além disso, ocultam o modo como as instâncias são criadas e compostas. O foco é eliminar conhecimento do cliente sobre o *QUE*, *COMO* e *QUANDO* está sendo criado e *QUEM* faz parte do processo de criação.  

## Padrões e intenções

Os padrões de projeto de criação originais da GoF são:

- **Singleton** - Garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso para ela.
- **Builder** - Separar a construção de um objeto complexo de sua representação, de modo que o mesmo processo de construção possa criar diferentes representações;
- **Prototype** - Especificar os tipos de objetos a serem criados usando uma instância prototípica e criar novos objetos copiando este protótipo;
- **Factory Method** - Definir uma interface para criar um objeto, mas deixar as subclasses decidirem qual classe a ser instanciada. O Factory Method permite a uma classe postergar (defer) a instanciação às subclasses;
- **Abstract Factory** - Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas;

---

# Padrões de projeto estruturais (structural)

Os padrões estruturais se preocupam com a forma como os objetos são compostos para formar estruturas maiores.

## Padrões e intenções

Os padrões de projeto estruturais originais da GoF são:

- **Composite** - compor objetos em estruturas de árvore para representarem hierarquias partes-todo. Composite permite aos cliente tratarem de maneira uniforme objetos individuais e composições de objetos.
- **Adapter** - converte a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por causa de suas interfaces incompatíveis.
- **Bridge** - separa uma abstração da sua implementação, de modo que as duas possam variar independentemente.
- **Decorator** - atribui responsabilidades adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível à subclasses para extensão da funcionalidade.
- **Façade** - fornece uma interface unifica para um conjunto de interfaces em um subsistema. O Façade define uma interface de nível mais alto que torna o subsistema mais fácil de usar.
- **Proxy** - fornece um objeto representante (surrogate), ou um marcador de outro objeto para controlar o acesso ao mesmo.
- **Flyweight** - usa compartilhamento para suportar grandes quantidades de objetos de granularidade fina, de maneira eficiente.
