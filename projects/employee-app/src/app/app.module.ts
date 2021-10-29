/*
 *
 *
 *
 *
 *
 *         WARNING: Editing this file may prevent future updates via schematics.
 *                  To maintain easy upgradability, do not edit this file.
 *
 *
 *
 *
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeWebAppCoreModule } from '@backbase/employee-web-app-core';
import {
  EmployeeWebAppChromeComponent,
  EmployeeWebAppRootModule,
  SelectContextWrapperComponent,
} from '@backbase/employee-web-app-root';
import {
  BackbaseCoreModule,
  DeprecationsService,
} from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appModuleImports } from './app-module-imports';
import { additionalRoutes, workspaceRoutes } from './app-module-routes';
import { AppDataModules } from './app-data-modules';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeWebAppLayoutModule } from '@backbase/employee-web-app-layout';

const routes: Routes = [
  ...additionalRoutes,
  { path: 'select-context', component: SelectContextWrapperComponent },
  {
    path: '',
    component: EmployeeWebAppChromeComponent,
    children: [...workspaceRoutes],
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    EmployeeWebAppCoreModule.forRoot(environment),
    BackbaseCoreModule.forRoot({
      features: {
        NEW_COMMUNICATION_API_ENABLED: true,
        ...(environment.features || {}),
      },
      assets: environment.assetsConfig || {
        assetsStaticItemName: '',
      },
    }),
    HttpClientModule,
    AppDataModules,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: environment.useHashNavigation,
      paramsInheritanceStrategy: 'always',
    }),
    EmployeeWebAppRootModule,
    EmployeeWebAppLayoutModule,
    ...appModuleImports,
  ],
  providers: [DeprecationsService, ...(environment.providers || [])],
  bootstrap: [AppComponent],
})
export class AppModule {}