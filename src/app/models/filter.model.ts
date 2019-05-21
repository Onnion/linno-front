import { LeadsFilterTimesType } from "../modules/shared/models/leads-filter-times.model";
import { LeadsFilterType } from "../modules/shared/models/leads-filter.model";

export interface Filter {
    readonly times: LeadsFilterTimesType;
    readonly type: LeadsFilterType[];
}