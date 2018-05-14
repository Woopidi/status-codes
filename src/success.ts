export type Stuff  = "awe" | "stuff" | "More" ;


export enum Success {

	/**
	* statusCode: 200
	* 
	* Standard response for successful HTTP requests. 
	* The actual response will depend on the request method used. 
	* In a GET request, the response will contain an entity corresponding to the 
	*/
	OK = 200,

	/**
   * statusCode: 201
   * 
   * The request has been fulfilled, resulting in the creation of a new resource.
   */
	Created = 201,

	/**
   * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
   * 2xx Success
   * 
   * The request has been accepted for processing, but the processing has not been completed. 
   * The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
   */
	Accepted = 202,
	NonAuthoritativeInformation = 203,
	NoContent = 204,
	ResetContent = 205,
	PartialContent = 206,
	MultiStatus = 207,
	AlreadyReported = 208,
	IMUsed = 226
}

export default Success;