

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
}

export default HttpStatus;
