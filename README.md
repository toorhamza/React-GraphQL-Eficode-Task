This project was created as an assignment for eficode Summer Internship. 

The live version can be found online here. 

# Details

The Front-End is written with react. 
This is a journey planning application. The origin is already decided which is Pohjoinen Rautatiekatu 25 (eficode's headqurters) in Helsinki. The destination can be chosen from within Helsinki Area. 
HSL Public Open API was used provided by Digitransit. 
As coordinates were required to plan the journey. We first get the coordinates of the destination using the Geocoding API
provided by Digitransit. https://digitransit.fi/en/developers/apis/2-geocoding-api/address-search/
Axios is used to send GET request with parameters. Custom hooks were built to make code cleaner.
When destination is selected appropriate Graphql Query is sent to the Routing API https://digitransit.fi/en/developers/apis/1-routing-api/

Please note: The focus was on making the app work and not the design.
