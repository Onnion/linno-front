import { LeadsFilterTimesType } from "../modules/common/models/leads-filter-times.model";
import { LeadsFilterAccountType } from "../modules/common/models/leads-filter-account.model";

export interface Filter {
    readonly times: LeadsFilterTimesType;
    readonly account: LeadsFilterAccountType;
}