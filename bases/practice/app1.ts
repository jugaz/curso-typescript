(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman:string = 'Clark';
 
    const existe:boolean = false;

    console.log({
        batman,
        superman,
        existe
    })
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
   
    const villano: [string, number, boolean] =  ['Lex Lutor',5,true];

    console.log({ 
        parejaHeroes,
        villano
     });
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
    aliados.push('Linterna Verde')
    console.log({ 
        aliados,
     });
    //Enumeraciones
   
    enum fuerza {
        acuaman = 0,
        batman = 1,
        flash = 5,
        superman = 100

    }
    const fuerzaFlash:fuerza = fuerza.flash;
    const fuerzaSuperman:fuerza = fuerza.superman;
    const fuerzaBatman:fuerza = fuerza.batman;
    const fuerzaAcuaman:fuerza = fuerza.acuaman;

    console.log({ 
        fuerzaFlash,
        fuerzaSuperman,
        fuerzaBatman,
        fuerzaAcuaman
     });
  
    // Retorno de funciones
    function activar_batiseñal() :string {
      return 'activada';
    }
    function pedir_ayuda(): void{
        console.log('Auxilio!!!');
      }
    
      console.log({ 
        activar_batiseñal,
        pedir_ayuda,
     });
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    
    console.log( largoDelPoder );
  
  })()
  
  