HTTP-Hyper Text Transfer Protocol
HTML-Hyper Text Mark Language
CSS- Cascading Style Sheet
NPM-Note Package Manager



#API:any api can be of four types
1.Git->read
2.POST->CREATE
3.PUT/PATCH->UPDATE
4.DELETE->DELETE
API CAN BE RESPONSE BY SERVER WITH STATUS CODE AND JSON DATA
API GENERALLY START WITH API/VERSION
/api/v1/products
/api/v2/products/2169
/api/v1/users
/api/v1/users/mohan
/api/v1/products?s=nobile
by default browser can check only get request
to check other three request types loke post,put,patch and delete we required frontend or third party api tester like postman/thunderclient/echo API




Content-Type is an HTTP response header that tells client what type of data is being sent by the server.
text/html → HTML webpage
text/plain → Plain text
application/json → JSON data









3 SEPTEMBER 2026

## STATUS CODE
200-------> OK
201------->CREATED
202------->ACCEPTED
204------->NO CONTENT
400------->BAD REQUEST
401------->UNAUTHORIZED
403------->FORBID
404------->NOT FOUND
500------->INTERNAL SERVER ERROR
503------->SERVICE UNAVAILABLE

## SERVER CAN SEND DATA
1. html content
2. html files
3. json data
4. plain text
5. css
6. jss
7. file

## server can set header to send data

1. res.writeHeader( )
2. res.setHeader


## Server can set status code
1. res.statusCode()
2. res.wrietHeader()

## request methods
1. get
2. post
3. put/patch
4. delete









###### Routes ######
