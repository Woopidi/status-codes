/**
 * The server failed to fulfill a request.
 * Response status codes beginning with the digit "5" indicate cases in which 
 * the server is aware that it has encountered an error or is otherwise incapable
 * of performing the request. Except when responding to a HEAD request, 
 * the server should include an entity containing an explanation of the error situation, 
 * and indicate whether it is a temporary or permanent condition. Likewise, user agents 
 * should display any included entity to the user. 
 * These response codes are applicable to any request method.
 */
export enum ServerError {

	/**
	* statusCode: 500
	* 
	* A generic error message, given when an unexpected condition was encountered and 
	* no more specific message is suitable.
	*/
	InternalServerError = 500
}

export default ServerError;