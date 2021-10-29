# Backbase Employee Web App

Generated from the `employee-web-app` schematic in the package `@backbase/employee-web-app-schematics`.

## Project structure

Several files generated by the schematic should not be edited directly as doing so may prevent future versions of the
schematic from applying updates to them. Such files all contain a warning comment at the start to clearly identify them.

This includes the `src/app.module.ts` file which defines the root Angular `AppModule`. However, this file imports values
from several other files which may be edited freely and can therefore be used to provide customisation of the `AppModule`:

- `src/app-module-imports.ts` contains an array of Angular Modules which is imported by the `src/app.module.ts` file.
  Any entries in this array are added to the list of Angular modules imported by the root `AppModule`, so you can use  
  this file to add any custom Angular modules you require to the `AppModule` imports.
- `src/app-module-routes.ts` contains an array of Angular Routes which is imported by the `src/app.module.ts` file.
  Any entries in this array are added _at the start_ of the routes list provided to the root Angular `RouterModule`
  by the `AppModule`. Therefore, any routing customisations can be provided in this file.
- The `environment.ts` and `environment.prod.ts` files in `src/environments` can be used to provide several app
  customisations, including, but not limited to, custom `AppModule` providers and custom `DataHttpConfig`.

### Root HTML files

The project contains two root HTML files:

- `src/index.hbs` is served as the root document by CX. This file should not be edited.
- `src/index.html` is served as the root document when running the application standalone (e.g., via the Angular dev
  server). This may be edited freely.

### Styling

Replace the generated `/src/favicon.ico` and `/src/assets/logo-emblem.svg` files with your own logos.

CSS styles can be overridden by adding styling to `/src/styles.scss`.

## Building

Before building, edit the `sdlc/experience.json` file and set the correct hostnames for the `authUrl` and
`loginPageUrl` properties in the `authorization` section.

To build the app, run `npm run package:employee-app` from the Angular workspace root dir.

The build process produces two artifacts in the `/dist/provisioning-packages/employee-app` directory:

**cx.zip**

This contains the compiled SPA itself and any other statics required by the experience. This should be
provisioned first.

**portal.zip**

This contains a CX experience configured to use the compiled SPA as per the simplified model defined in the
`sdlc/experience.json` file. This should be provisioned _after_ `cx.zip`. Provisioning this will overwrite
any of the experience configuration properties that may have been changed in cxp-manager directly with the
values defined in the `sdlc/experience.json` file.

Following changes to the `sdlc/experience.json` file, you can rebuild this `portal.zip` file without recompiling
the whole app by running `npm run package:employee-app:experience`.

A third artifact is also produced by the build process at `/dist/provisioning-packages/employee-web-app-page.zip`.
This contains just the compiled SPA and is used during the build process to produce both the `cx.zip` and the
`portal.zip`. You do not need to provision this as it is contained within the `cx.zip` file. It is left in
place after the build for convenience to allow you to run `npm run package:employee-app:experience` to
regenerate the `portal.zip` file without needing to recompile the app.

## Running

The web app requires a set of backend services (APIs) to run against. For local development, you can either:

- Configure proxies to a live or fake backend, see the official [Angular documentation](https://v10.angular.io/guide/build#proxying-to-a-backend-server) for configuring this.
- Enable mocks, set `enableMocks : true` in the `Developer Options > Application > Local Storage` browser settings.

## Documentation

The latest documentation for the Employee Web App is available [here](https://community.backbase.com/documentation/employee_web_app/latest/index).