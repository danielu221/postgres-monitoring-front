# PostrgesMonitoringBackend

Application allows to monitor PostgreSQL database. Each 10 seconds GET request is being made and data displayed in "Activity" and "Statements" bookmark is being refreshed. Below technologies were used for implementation:
- **Frontend** [Link to repo](https://github.com/danielu221/postgres-monitoring-front):
- Angular 7
- Angular material

- **Backend** [Link to repo](https://github.com/danielu221/postgres-monitoring):
- NodeJS with Express
- PostgreSQL with sample database (link)

## How to run

1. Restore PostgreSQL db data and run server from backend repo 
2. Run `npm install` to install dependencies for frontend  
3. Run `npm start` on frontend side for a dev server. 
4. Navigate to `http://localhost:4200/`.

## Authors
- Mateusz Danieluk
- Arkadiusz Gotfryd
