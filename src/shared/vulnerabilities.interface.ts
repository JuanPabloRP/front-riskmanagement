export interface Vulnerability{
    id:string;
    title:string
    description: string
    severity:'LOW'|'MEDIUM'|'HIGH'|'CRITICAL'
    impact:string
    soluction:string
    createdAt:Date
    updateAt:Date

}
