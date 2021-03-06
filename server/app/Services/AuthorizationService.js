const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthrorizationService {
    verifyPermission(resource, user) {
        if(!resource) {
            throw new ResourceNotExistException()
        }
        if(resource.user_id !== user.id) {
            throw new InvalidAccessException()
        }
    }
}

module.exports = new AuthrorizationService()