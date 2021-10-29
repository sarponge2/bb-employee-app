/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always include an array named
 * `routes` of type `Routes` and should always export an `@NgModule` class named
 * `UserModeRoutesModule`.
 *
 * You may freely alter the routes defined in this file, but please be aware that
 * doing so may prevent some future updates being automatically applied by
 * migration schematics.  In such cases, the schematic will log a warning and
 * manual steps may be required to adopt any new features or fix breaking changes.
 *
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AccountDetailsComponent,
  ActivityLogComponent,
  DeviceInformationWrapperComponent,
  MessagesComponent,
  PaymentsComponent,
  ProductsComponent,
  UserDetailsWrapperComponent,
  UserModeComponent,
  UserModeSecurityComponent,
  UserOverviewComponent,
  SessionsComponent,
} from '@backbase/employee-mode-user';
import { CanDeactivateUnsavedChangesGuard } from '@backbase/employee-web-app-common-components';

const routes: Routes = [
  {
    path: 'sa',
    redirectTo: 'sa/-',
  },
  {
    path: 'sa/:serviceAgreementId',
    component: UserModeComponent,
    children: [
      {
        path: 'security',
        component: UserModeSecurityComponent,
      },
      {
        path: 'devices',
        component: DeviceInformationWrapperComponent,
      },
      {
        path: 'products/:accountId',
        component: AccountDetailsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'activity-log',
        component: ActivityLogComponent,
      },
      {
        path: 'profile',
        component: UserDetailsWrapperComponent,
        canDeactivate: [CanDeactivateUnsavedChangesGuard],
      },
      {
        path: '',
        pathMatch: 'full',
        component: UserOverviewComponent,
      },
      {
        path: 'sessions',
        component: SessionsComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sa/-',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserModeRoutesModule {}
