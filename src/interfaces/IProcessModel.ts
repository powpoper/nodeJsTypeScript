import { IProjectModel } from "./IProjectModel.js";

export interface IProcessModel {
    typeId: string,
    name: string,
    referenceName: string,
    description: string,
    projects?: IProjectModel[],
    parentProcessTypeId: string,
    isEnabled: boolean,
    isDefault: boolean,
    customizationType: string
}