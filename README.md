<h1>AR-BusinessCard: <em>OpenSource AR-BusinessCard Maker</em></h1>

<img src="https://dreamincodeforlife.github.io/AR-BusinessCard/Untitled.png"></br>
<sup><em>f1: Working example of converting AR-Marker to tags</em></sup>

by: Aman Adhav <a href="https://linkedin.com/in/amanadhav"><img src="https://raw.githubusercontent.com/jrobchin/phormatics/master/screenshots/linkedin.png" height="20px"></a> <a href="https://github.com/dreamincodeforlife"><img src="https://raw.githubusercontent.com/jrobchin/phormatics/master/screenshots/github.png" height="20px"></a>

### Getting Started : 

To create your Custom mark go to the following link and fill out the form. There is a share button you can use to save the form if needed. 
If you feel you are happy with the information provided then click submit button to generate your QR code

Save the QR code on your system and you can now start sharing and using the custom QR code.


### Disclamer : 

We are using myjson to save your information. Please review their community guidelines before procceding with using or development.

Development : 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



$ ngrok https 5000
ngrok by @inconshreveable                                                                               (Ctrl+C to quit)

Session Status                online
Session Expires               7 hours, 59 minutes
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://58a205b8.ngrok.io -> localhost:5000
Forwarding                    https://58a205b8.ngrok.io -> localhost:5000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```
Note : The url address changes every 7 hours.

Now via browser setup a connection endpoint that sends converted speech as text value via POST request (Node.JS works great with this).

