

export namespace Types {

    // /**
    //  * Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.
    //  */
    // export type OK = 200;
    // /**
    //  * The request has been fulfilled, resulting in the creation of a new resource.
    //  */
    // export type Created = 201;
    /**
     * An informational response indicates that the request was received and understood. It is issued on a provisional basis while request processing continues. It alerts the client to wait for a final response. The message consists only of the status line and optional header fields, and is terminated by an empty line. As the HTTP/1.0 standard did not define any 1xx status codes, servers must not send a 1xx response to an HTTP/1.0 compliant client except under experimental conditions.
     */
    export type Information = 100|101|102|103
    
    /**
     * This class of status codes indicates the action requested by the client was received, understood and accepted.
     */
    export type Success = 200|201;
}

export enum HttpStatus {
    /**
     * Used to return some response headers before final HTTP message.
     */
    CONTINUE = 100,
    /**
     * The requester has asked the server to switch protocols and the server has agreed to do so.
     */
    SWITCH_PROTOCOLS = 101,
    /**
     * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.
     */
    PROCESSING = 102,
    /**
     * Used to return some response headers before final HTTP message.
     */
    EARLY_HINTS = 103,
    /**
     * Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.
     */
    OK = 200,
    /**
     * The request has been fulfilled, resulting in the creation of a new resource.
     */
    CREATED = 201,
    /**
     * The request has been accepted for processing, but the processing has not been completed. The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
     */
    ACCEPTED = 202,
    /**
     * The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).
     */
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    /**
     * The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or may need an account of some sort.
     */
    FORBIDDEN = 403,
}

export default HttpStatus;
