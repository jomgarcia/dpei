import { PagesComponent } from './pages/pages.component';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/home/inicio.component';
import { SomosComponent } from './components/somos/somos.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { ProcesosComponent} from './components/procesos/procesos.component';
import { IndicadoresComponent} from './components/indicadores/indicadores.component';
import { ContactosComponent} from './components/contactos/contactos.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { GalleryComponent } from './components/gallery/gallery.component';



const APP_ROUTES: Routes = [
      { path: '',
      component: PagesComponent,
      children: [
        { path: 'inicio', component: InicioComponent },
        { path: 'somos', component: SomosComponent },
        { path: 'documentos', component: DocumentosComponent },
        { path: 'procesos', component: ProcesosComponent },
        { path: 'indicadores', component: IndicadoresComponent },
        { path: 'contactos', component: ContactosComponent },
        { path: 'colaboradores', component: ColaboradoresComponent },
        { path: '', pathMatch: 'full', redirectTo: 'inicio'}
      ]
    },

      { path: 'gallery', component: GalleryComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
