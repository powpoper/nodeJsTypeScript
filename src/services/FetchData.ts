import { IResponseModel } from "../interfaces/IResponseModel.js";

export function FetchData () : IResponseModel {
    return {
        "count": 1,
        "value": [
            {
                "typeId": "00000000-0000-0000-0000-000000000000",
                "name": "name - some sample process name",
                "referenceName": "referenceName - some sample ref",
                "description": "description some sample description",
                "projects": [
                    {
                        "id": "11111111-1111-1111-1111-111111111111",
                        "name": "name - some sample project name 1",
                        "description": "description - some sample description",
                        "url": "url - some sample url"
                    },
                    {
                        "id": "22222222-2222-2222-2222-222222222222",
                        "name": "name - some sample project name 2",
                        "description": "description - some sample description",
                        "url": "url - some sample url"
                    },
                    {
                        "id": "33333333-3333-3333-3333-333333333333",
                        "name": "name - some sample project name 3",
                        "description": "description - some sample description",
                        "url": "url - some sample url"
                    }
                ],
                "parentProcessTypeId": "44444444-4444-4444-4444-444444444444",
                "isEnabled": true,
                "isDefault": false,
                "customizationType": "customizationType"
            },
        ]
    };
}