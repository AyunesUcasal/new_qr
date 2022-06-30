import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
//import { stringify } from 'querystring';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public noticias: any[] = [];
  link_noticias :string  = 'https://newsapi.org/v2/everything?q=videogames&from=2022-06-29&sortBy=publishedAt&apiKey=e8ec12c7f8fe473a862204d0579eaf89';

  //link:string  = 'api/evento';
  //link:string  = 'capacitor://acreditaciones-desa.ucasal.edu.ar/api/evento';
  //link:string  = 'http://acreditaciones-desa.ucasal.edu.ar/api/evento';
  //link:string  = 'http://localhost:8100/api/evento';    
  //link:string = 'participante/asistio-evento/19-204';
  link_participante:string = 'http://acreditaciones-desa.ucasal.edu.ar/participante/asistio-evento/19-204';
  link_eventos:string = 'http://acreditaciones-desa.ucasal.edu.ar/api/evento';


  constructor(
    public http:HttpClient
  ) {}
 
  listarNoticias(){
    console.log('Listar eventos');
    
    /* fetch(this.link)
     .then(response => response.text())
     .then(data => console.log(data));  */
    /* 
    fetch(this.link)
      .then(response => response.json())
      .then(data => console.log(data)); 
    */ 
    

    //--- Funciona con noticias ----------------------  
    this.http.get(this.link_noticias)
      .subscribe( (resp:any) => {
        //console.log(resp);
        console.log(resp.articles);
        this.noticias = resp.articles;
        
    });  

    //--- Funciona con noticias ----------------------
    /*
    this.http.get(this.link)
      .subscribe(data => this.noticias.push(data));
    */     
  }//---noticias



  acreditarParticipante(){    

    console.log(this.link_participante);  

    fetch(this.link_participante)
     .then(response => response.text())
     .then(data => console.log(data));
 

   /*   this.http.get(this.link_participante)
      .subscribe( (resp:any) => {
        console.log(resp);        
    });   */

      /* this.http.get(this.link)
          .subscribe(resp =>{
            console.log(resp);
          });
      console.log('Acreditar Participante final'); 
      */

  }//--- end acreditaciones -----------------

  listarEventos(){

    this.http.get(this.link_eventos)
      .subscribe( (resp:any) => {
        console.log(resp);        
    });  

  }//--- end listar -------------------------

}