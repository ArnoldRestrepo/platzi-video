# Curso de React 

## Ciclo de vida de un componenete:

En react tenemos 4 ciclos (El 4 desde la versión 16): _Montado, Actualización, Desmontado y Manejo de errores_**.

### Montado:

Es el momento en el que el componente entra en escena:

**Constructor:** Método llamado antes de que el componente sea montado (componente aun no se ve).


    class myComponent extends Components {
        constructor(){
            // Enlazo (bind) eventos y/o inicializo el estado
        }
    }

- Podemos iniciar el estado.
- Enlazar eventos (bind).
- Es el primer metodo que se llama al instanciar un componente.

**ComponentWillMount:** Método llamado inmediatamente antes de que el componente se valla a montar (el componente aún no se ve).

    class myComponent extends Components {
       
        constructor(){
            // Enlazo (bind) eventos y/o inicializo el estado
        }

        componentWillMount(){
            // Se ejecuta antes de montar el componente
            // Se podría usar para hacer un setState
            // No hacer llamados a un API o suscripción de eventos
        }
    }


- Podemos hacer un setState().
- No hacer llamados a un API o suscripción a eventos.


**Render:** Método que contiene todos los elementos a renderizar (estructura del componente). 

     class myComponent extends Components {
       
        constructor(){
            // Enlazo (bind) eventos y/o inicializo el estado
        }

        componentWillMount(){
            // Se ejecuta antes de montar el componente
            // Se podría usar para hacer un setState
            // No hacer llamados a un API o suscripción de eventos
        }

        render(){
            // Contiene todos los elementos a renderizar
            // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
        }
    }

- Contiene JSX en el return
- Puedes calcular propiedades nCompleto = name + lastName.

**CompoenentDidMount:** Método llamado luego de montarse el componente (el componente ya esta en la pantalla). 

    class myComponent extends Components {
       
        constructor(){
            // Enlazo (bind) eventos y/o inicializo el estado
        }

        componentWillMount(){
            // Se ejecuta antes de montar el componente
            // Se podría usar para hacer un setState
            // No hacer llamados a un API o suscripción de eventos
        }

        render(){
            // Contiene todos los elementos a renderizar
            // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
        }

        componentDidMount(){
            //Solo se lanza una vez
	        //Ideal para llamar a una API, hacer un setInteval, etc
        }
    }

- Solo se lanza una vez.
- Enlazar (bind) de eventos.
- Es el primer método que se llama al instanciar un componente.
- Aqui podemos utilizar APIs (Navegador o Datos Externos).

### Actualización:

Es cuando los componentes reciben nuevos datos:

**componentWillReceiveProps:** Método llamado al recibir nuevas propiedades que sirve para actualizar el estado con base a las nuevas propiedades.

    class myComponent extends Components {

        componentWillReceiveProps(){
            //Es llamado cuando el componente recibe nuevas propiedades
        }
    }

**shouldComponentUpdate:** Método que condiciona si el componente se debe volver a renderizar, es utilizado para optimizar el rendimiento.

    class myComponent extends Components {

        componentWillReceiveProps(){
            //Es llamado cuando el componente recibe nuevas propiedades
        }

        shouldComponentUpdate(){
            //Ideal para poner una condición y  si las propiedades que le llegaron anteriormente
            //eran las mismas que tenia retornar false para evitar re-renderear el componente
        }
    }

**componentWillUpdate:** Método llamado antes de re-renderizar un componente, es utilizado para optimizar el rendimiento.

    class myComponent extends Components {

        componentWillReceiveProps(){
            //Es llamado cuando el componente recibe nuevas propiedades
        }

        shouldComponentUpdate(){
            //Ideal para poner una condición y  si las propiedades que le llegaron anteriormente
            //eran las mismas que tenia retornar false para evitar re-renderear el componente
        }

        componentWillUpdate(){
            //método llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
        }
    }

**render** Re-render del componente

    class myComponent extends Components {

        componentWillReceiveProps(){
            //Es llamado cuando el componente recibe nuevas propiedades
        }

        shouldComponentUpdate(){
            //Ideal para poner una condición y  si las propiedades que le llegaron anteriormente
            //eran las mismas que tenia retornar false para evitar re-renderear el componente
        }

        componentWillUpdate(){
            //método llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
        }

        render(){
            // re-render
        }
    }

**componenteDidUpdate** Método llamado luego de que el componente se halla re-renderizado.

    class myComponent extends Components {

        componentWillReceiveProps(){
            //Es llamado cuando el componente recibe nuevas propiedades
        }

        shouldComponentUpdate(){
            //Ideal para poner una condición y  si las propiedades que le llegaron anteriormente
            //eran las mismas que tenia retornar false para evitar re-renderear el componente
        }

        componentWillUpdate(){
            //método llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
        }

        render(){
            // re-render
        }

        componenteDidUpdate(){
            //Método llamado luego del re-render
        }
    }

### Desmontado:

Es cuando el componente se va del navegador

**componenteWillUnmount** Método llamado antes de que el componente sea retirado de la aplicación.

    class myComponent extends Components {

        componenteWillUnmount(){
           // Método llamado antes de desmontar el componente
        }
    }

### Manejo de Errores:

Nos ayuda a prevenir si algún componente esta fallando y que rompan la aplicación.

**componenteDidCatch**  Método llamado cuando ocurre un error al renderizar el componente, el manejo de errores solamente ocurre en componentes hijos.

    class myComponent extends Components {

        componenteDidCatch(){
            // Si ocurre algún error, lo capturo desde acá:        
        }
    }

## Componentes Puros:

Tienen el método shouldComponentUpdate() ya asignado, si no se le asignan las propiedades no tenemos que validar manualmente, no se re-renderiza.

    import React, { PureComponent } from 'react';

    class Playlist extends PureComponent {
        render(){
            <Component />
        }
    }

## Componentes Funcionales:

Son funciones que solo retorna el JSX de nuestro componente (renderiza UI), es más sencillo, más fácil de probar, aunque estos componentes no tienen ciclo de vida.

    import React  from 'react';

    function Playlist(props){
        return(
            <Component title={props.title}>
        )
    }


# Smart & Dumb Components (Presentational & Containers) or (Inteligentes & Tontos)

_¿Cómo se ve? VS ¿Qué hacen?_


## Presentational: ¿Cómo se ve?

- Puede contener smart components u otros componentes de UI.
- Permiten composición con `[props.children]`
- No depeden del resto de la aplicación.
- No especifica cómo los datos son cargados o mutados.
- Recibe datos y callbacks solo con propiedades.
- Rara vez tienen su propio estado.
- Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components.


## Containers: ¿Qué hacen?

- Concetrado en el funcionamiento de la aplicación.
- Contienen componentes de UI u otros containers.
- No tienen estilos.
- Proveen de datos a componentes de UI u otros contenedores.
- Proveen de callbacks a la UI.
- Normalmente tienen estado.
- Llaman acciones.
- Generados por higher order components

### ¿Por qué dividir los componentes en smart and dumb?

- Separación de responsabilidades (Se parece a MVC, V para dumbs y C para smarts).
- Mejorar la capacidad de reutilizar componentes.







