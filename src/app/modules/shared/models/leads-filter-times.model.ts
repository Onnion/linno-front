import * as moment from "moment";

export interface LeadsFilterTimesType {
    readonly id: string;
    readonly label: string;
    readonly shouldClose: boolean;
    min?: moment.Moment,
    max?: moment.Moment
}