import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];     //buraya ne dersek onun arrayi olur
}