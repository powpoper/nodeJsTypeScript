import { IResponseModel } from "../interfaces/IResponseModel.js";

export function DigestResponse(res: IResponseModel) {
    let organizationName = "OrganizationName";
    let csv: string[][] = [["OrganizationTitle", "ProcessTitle", "ProjectTitle"]];

    res.value.forEach(process => {
        if(process.name != null && process.projects != null) {
            process.projects.forEach(project => {
                if(project.name != null) {
                    let csvRow : string[] = [];
                    csvRow.push(organizationName);
                    csvRow.push(process.name);
                    csvRow.push(project.name);
                    csv.push(csvRow);
                }                
            });
        }        
    });

    return csv.map(e => e.join()).join("\n");
}