'use strict';

module.exports = {
    properties: {
        username: {isRequired: true},
        email: {isRequired: true, isMutable: true},
        password: {isRequired: true}
    }
};
