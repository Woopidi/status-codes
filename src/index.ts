export enum Codes {

	/**
	* statusCode: 200
	* 
	* Standard response for successful HTTP requests. 
	* The actual response will depend on the request method used. 
	* In a GET request, the response will contain an entity corresponding to the 
	*/
	OK = 200,

	Created = 201,
	Accepted = 202,
	NonAuthoritativeInformation = 203,
	NoContent = 204,
	ResetContent = 205,
	PartialContent = 206,
	MultiStatus = 207,
	AlreadyReported = 208,
	IMUsed = 226
}

export default Codes;