import * as fs from 'fs';

export function Save(csv: string): void {
    try {
        fs.writeFileSync("data.csv", csv);
    }
    catch(e) {
        console.error(e);
    }
}