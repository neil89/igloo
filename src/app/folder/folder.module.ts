import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    FolderPageRoutingModule,
    SharedModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
