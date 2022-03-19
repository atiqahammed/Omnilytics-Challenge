# Omnilytics-Challenge

## Requirement
This application is a web app and api to generate four (4) types of printable random objects and store them in a single file, each object will be separated by a ",".  These are the 4 objects: alphabetical strings, real numbers, integers, alphanumerics.

Sample extracted output:
```
hisadfnnasd, 126263, assfdgsga12348fas, 13123.123, lizierdjfklaasf, 123192u3kjwekhf, 89181811238,122, nmarcysfa900jkifh, 3.781, 2.11, ....
```
Output filename: `RandomFile.txt`
The output file is 2MB in size. Once file generation is done the is available as a link which can be then downloaded by clicking on it. Also, there is a Report button on the page.  When clicked, the page shows the total count of generated objects.

## Repository Description
This Repository contains 2 major projects.
1. nest-api: the backend implementation of this project with nestjs. It contains three endpoints to generate file, download file and get report.
2. web_app: the UI implementation with reactjs. This is a single page application that contains a button to generate file, a link to download file and a report button to get file report.

## Instructions to run the code is development env

### Requirements
1. git
2. nodejs v14.17.0 or later version
3. yarn latest

#### Steps
1. Clone the repository from github
    ```
    git clone https://github.com/atiqahammed/Omnilytics-Challenge.git
    ```
2. go to nest-api project to run the api first
    ```
    cd nest-api
    ```
3. install dependencies 
    ```
    yarn install
    ```
4. set environment variables in .env if necessary
    ```
    NODE_ENV=development
    PORT=4000
    
    SWAGGER_TITLE=TepmlateAPI
    SWAGGER_DESCRIPTION=This is a template Tepmlate API
    SWAGGER_VERSION=1.0
    SWAGGER_TAG=API 
    ```
5. build the application
    ```
    yarn build
    ```
6. run application
    ```
    yarn start:dev
    ```
    this will run the application. In this case in port 4000. We will be able to the swagger UI in `<baseurl>/api` for this case it will be like `http://localhost:4000/api/`. 
    ![API swagger view](https://github.com/atiqahammed/Omnilytics-Challenge/blob/main/images/Screenshot%20from%202022-03-19%2018-25-33.png?raw=true)
7. go to the web_app directory to run the UI then
    ```
    cd ..
    cd web_app
    ```
8. install dependencies 
    ```
    yarn install
    ```
9. set environment variables in .env if necessary with api base url
    ```
    REACT_APP_API_BASE_URL=http://localhost:4000
    ```
10. run application
    ```
    yarn start
    ```
    then the application will be accessable in `http://localhost:3000`
    ![Web UI view](https://github.com/atiqahammed/Omnilytics-Challenge/blob/main/images/Screenshot%20from%202022-03-19%2018-53-33.png?raw=true)