import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { OrganigramaService } from './servicios/organigrama.services';

//component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent} from './components/home/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SomosComponent } from './components/somos/somos.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { GalleryComponent } from './components/gallery/gallery.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    SomosComponent,
    DocumentosComponent,
    ProcesosComponent,
    IndicadoresComponent,
    ContactosComponent,
    ColaboradoresComponent,
    GalleryComponent
    

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    OrganigramaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
