## Technologies Used

-   [Angular](https://angular.io/) - A platform for building web applications.
-   [Jest](https://jestjs.io/) - A JavaScript testing framework.
-   [SCSS](https://sass-lang.com/) - A CSS preprocessor.

## Project Structure

The project is structured as follows:

-   `src/`: Contains the source code for the application.
    -   `app/`: Contains the application modules and components.
        -   `features/`: Contains the feature modules, such as `team` and `notifications`.
        -   `layout-components/`: Contains the layout components, such as `header` and `welcome-instructions`.
        -   `pages/`: Contains the application pages, such as `team-selection`.
    -   `styles/`: Contains the application styles.
-   `public/`: Contains the public assets, such as the favicon.

## Getting Started

### Installation

Run `npm install` to install the project dependencies.

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

### Running lint

Run `npm run lint` to lint the project
