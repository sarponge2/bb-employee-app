import {
  EmployeeWebAppEnvironmentProperties,
  identityAuthInitializerProvider,
} from '@backbase/employee-web-app-core';
import { environmentBase } from './environment.base';

export const environment: EmployeeWebAppEnvironmentProperties = {
  ...environmentBase,
  production: true,
  useHashNavigation: true,
  providers: [...environmentBase.providers, identityAuthInitializerProvider],
  assetsConfig: {
    assetsStaticItemName: 'employee-web-app-page',
  },
  remoteConfigDefaults: {
    ...environmentBase.remoteConfigDefaults,
  },
};
