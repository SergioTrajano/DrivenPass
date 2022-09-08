function unathorizedError() {
    return { code:401, message: "invalid credentials" };
}

function forbiddenError(method: string) {
    if (method === "delete") return { code: 403, message: "You can not delete other users infos" };
    if (method === "get") return { code: 403, message: "You can not see other users infos" };
}

function notFountError(entity: string) {
    return { code: 404, message: `${entity} does not exist` };
}

function conflictError(entity: String) {
    return { code: 409, message: `${entity} already in use` };
}

function unprocessableEntityError(error: {details: {message: String}[]}) {
    return { code: 422, message: error.details.map(detail => detail.message) };
}

export const error = {
    unathorizedError,
    forbiddenError,
    notFountError,
    conflictError,
    unprocessableEntityError,
}