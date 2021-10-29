/*
 *
 * The content of this file can be edited freely, but to maintain upgradability
 * this file should not be renamed and should always export the class
 * `BankAdminWorkspaceNavigationComponent`.
 *
 */

import { Component } from '@angular/core';
import { EmployeeWebAppEnvironment } from '@backbase/employee-web-app-core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bank-admin-workspace-navigation',
  templateUrl: './bank-admin-workspace-navigation.component.html',
})
export class BankAdminWorkspaceNavigationComponent {
  readonly identityAdminHref$: Observable<string>;
  readonly paymentAdminHref$: Observable<string>;
  readonly showOtherToolsHeader$: Observable<boolean>;

  constructor(environment: EmployeeWebAppEnvironment) {
    this.identityAdminHref$ = environment.remoteConfig.property<string>(
      'identityAdminHref'
    );
    this.paymentAdminHref$ = environment.remoteConfig.property<string>(
      'paymentAdminHref'
    );

    const isAnyValueSet = (values) => !!values.find((value) => !!value);

    this.showOtherToolsHeader$ = combineLatest([
      this.identityAdminHref$,
      this.paymentAdminHref$,
    ]).pipe(map(isAnyValueSet));
  }
}
