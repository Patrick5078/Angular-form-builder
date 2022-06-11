import { ViewDynamicFormComponent } from './components/view-dynamic-form/view-dynamic-form.component';
import { FormFieldConfigurationComponent } from './components/form-field-configuration/form-field-configuration.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { FormViewerComponent } from './components/form-viewer/form-viewer.component';
import { NgxMaskModule } from 'ngx-mask';
import { EditInputGroupModalComponent } from './components/modal/edit-input-group-modal/edit-input-group-modal.component';
import { FormFieldDropListComponent } from './components/form-field-drop-list/form-field-drop-list.component';
import { FormFieldDisplayComponent } from './components/form-viewer/form-field-display/form-field-display.component';
import { LogicRulesModalComponent } from './components/modal/logic-rules-modal/logic-rules-modal.component';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';

@NgModule({
  declarations: [
    AppComponent,
    FormViewerComponent,
    FormFieldConfigurationComponent,
    EditInputGroupModalComponent,
    FormFieldDropListComponent,
    FormFieldDisplayComponent,
    LogicRulesModalComponent,
    ViewDynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    DynamicFormsBasicUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
