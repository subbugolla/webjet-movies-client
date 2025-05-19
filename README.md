# WebjetMoviePortal

Webjet Movie Portal built using .Net 8 backend APIs and React frontend

## Technology Stack

### Frontend (React)
- TypeScript
- Redux Toolkit for State Management
- Material-UI for Components
- React Router for Navigation
- Formik & Yup for Form Validation
- Axios for API Calls

## Running the Application

 Run the frontend:
   - npm install
   - npm start dev
   
## Things to improve

### UI

- Implement Config service to store URLs and other config values
- Implement Redux and Lazy loading
- Unit testing 
- Can implement paging and navigation as the data real-time grows

## Assumptions

- Api developed with an opportunity to move the filtering and business logic to identify cheapest price
- In-Memory Cache Used for temporary caching purposes
- Data will be reset when the application restarts
- Secret is in the appsettings which has to be secured(using keyvault or database)