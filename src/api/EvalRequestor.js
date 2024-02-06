class EvalRequestor {
    constructor(endpoint, sessionId) {
        this.endpoint = endpoint;
        this.sessionId = sessionId;
    }

    // Sends eval request to flatval, returns parsed object
    async eval(code) {
        // request w/sessionId
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "code": code,
            "sessionId": this.sessionId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(endpoint, requestOptions);
        const evalResponseBody = await response.json();

        // parse response
        // const parsedResponse = this.parseEvalResponseBody(evalResponseBody);


        // TODO:  error handle
        return evalResponseBody;

    }

    // // returns actual object from flat response
    // parseEvalResponseBody(evalResponseBody) {
    //     let constructors = {
    //         "array": Array,
    //         "object": Object,
    //         "error": Error,
    //     };

    //     const root = evalResponseBody.root;
    //     const serialized = evalResponseBody.serialized;

    // }


}
