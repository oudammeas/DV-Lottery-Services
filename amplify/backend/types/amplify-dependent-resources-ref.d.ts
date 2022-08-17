export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "DVLotteryServices": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        }
    },
    "api": {
        "DVLotteryServices": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "filesStorageS3": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}