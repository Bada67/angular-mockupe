import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabComponent } from './tab/tab.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
     ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    TopBarComponent,
    TabComponent,
    ModalComponent,
     ],
  providers: [],
  bootstrap:    [ AppComponent ],
  entryComponents: [ModalComponent]
})
export class AppModule { }
