const restRoot  = 'http://phantomradio-wp:8888/wp-json';
const login     = document.querySelector( '#loginform' );
const loginBar  = document.querySelector( '.login' );
const logoutBtn = document.querySelector( '.logout' );
let token       = sessionStorage.getItem('newToken');
let success     = document.querySelector( '.success' );
let error       = document.querySelector( '.error' );
// console.info("Token on load: ", token);


/**
 * Monitor interaction with the login form, trigger action on click.
 */
function monitorLogin() {
    if (token === null ) {

        login.addEventListener( 'submit', ( event ) => {
            console.log("Login Button Fired");
            event.preventDefault();
            let username = document.querySelector('#user_login').value;
            let password = document.querySelector('#user_pass').value;
            console.info(`Username: ${username} Password: ${password}`);

            getToken( username, password );
        });

    } else {
        // window.location.replace("index.html");

    }
}

/**
 * Request JWT token from the REST API using supplied username and password.
 * @param {string} username
 * @param {string} password
 */
function getToken( username, password ) {

    let restURL = `${restRoot}/jwt-auth/v1/token`;

    // The POST request to get the token.
    const response = fetch( restURL, {
        method: 'POST',
        body: JSON.stringify( {
            'username': username,
            'password': password
        } ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response.json() )
    .then( response => {
        // If we get a token in response (username and password match).
        if ( response.token ) {
            // console.log( 'getToken: ', response.token );
            sessionStorage.setItem('login token', response.token);
            window.location.replace("index.html");
        }
        else {
            // error.html("<p>Er ging iets niet goed</p>");

        }
    })
    .catch( ( error ) => {
        console.error( 'getToken error: ', error );
    });

}

monitorLogin();