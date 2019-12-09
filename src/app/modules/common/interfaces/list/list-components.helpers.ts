import { MatPaginator, PageEvent } from '@angular/material';
import { ViewChild, EventEmitter, HostListener } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { TableListHeader } from '../../models/table-list-header/table-list-header.model';
import { WrapperChild } from '../wrapper-child/wrapper-child';

export class ComponentDataSource extends DataSource<any> {
    private data: any[];
    private isExpandable: (boolean | any);

    constructor(dataList: any[], isExpandable: (boolean | any)) {
        super();
        this.data = dataList;
        this.isExpandable = isExpandable;
    }

    connect(): Observable<any[]> {
        const rows = [];
        if (this.isExpandable) {
            this.data.forEach(element => rows.push(element, { detailRow: true, element }));
        } else {
            this.data.forEach(element => rows.push(element));
        }
        return of(rows);
    }

    disconnect() { }
}

export class ListComponent extends WrapperChild {
    @ViewChild(MatPaginator) pagination: MatPaginator;

    protected isEverExpanded: boolean;
    protected mobileBreak: number;

    private changePagination = false;

    public doneLoad: EventEmitter<any> = new EventEmitter<any>();
    public prevDisplayColumnsMobile: string[];
    public serviceSubscription: Subscription;
    public displayColumnsMobile: string[];
    public loading = false;
    public filterSubscription: Subscription;
    public dataSource: ComponentDataSource;
    public displayColumns: string[];
    public displayColumnsWithFilter: TableListHeader[];
    public safe_pagination: boolean;
    public expandedElement: boolean;
    public methodLoad = 'getData';
    public isMobile = false;
    public service: any;
    public options: any;
    public filtredComponentData: any[];
    public componentData: any[];
    public pageSizeOptions: number[] = [5, 12, 25, 50];
    public searchableFields: string[];
    public orderBy = 'created_at';
    public doneAnimation = false;
    public pageEvent: PageEvent;
    public sortedBy = 'desc';
    public idTable: string;
    public status: string;
    public length: number;
    public pageSize = 5;
    public page = 1;

    constructor(isEverExpanded = true) {
        super();
        this.isEverExpanded = isEverExpanded;
    }

    @HostListener('window:resize', ['$event'])
    onresize($event) {
        this.setIsMobile($event);
    }

    private initData(data: any[], mobile: boolean): void {
        this.componentData = data;
        this.filtredComponentData = data;
        this.dataSource = new ComponentDataSource(data, (this.isEverExpanded || mobile));
    }

    private listMock(list: any[]): void {
        this.componentData = list;
        this.filtredComponentData = list;
        this.setIsMobile();
        this.loading = false;
        this.doneLoad.emit(true);

        if (this.changePagination) { this.showPagination(); }
    }

    private list(options: object, mobile: boolean) {
        this.serviceSubscription = this.service[this.methodLoad](options).subscribe(
            (data: any) => {
                if (!this.safe_pagination) {
                    const pagination = data.meta.pagination;
                    this.setPagination(pagination['total'], pagination['current_page'], pagination['per_page']);
                }

                this.initData(data.data, mobile);
                this.setIsMobile();
                this.loading = false;
                this.doneLoad.emit(true);

                if (this.changePagination) { this.showPagination(); }
            },
            (err) => {
                this.loading = false;
            }
        );
    }

    private paginate(options_data: object): object {
        let options = options_data;
        if (!this.safe_pagination) {
            options = {
                ...this.options,
                orderBy: this.orderBy,
                sortedBy: this.sortedBy,
                page: this.page,
                pageSize: this.pageSize,
            };
        }

        return options;
    }

    public clean(): void {
        this.dataSource = undefined;
        this.componentData = undefined;
    }

    public setIsMobile($event?): void {
        const width = $event ? $event.target.innerWidth : window.innerWidth;
        const isMobile = width <= (this.mobileBreak || 991);

        if ((this.isMobile !== isMobile)) {
            this.dataSource = new ComponentDataSource(this.componentData, ((isMobile || this.isEverExpanded) && this.expandedElement));
        }

        this.displayColumns = isMobile ? this.displayColumnsMobile : this.prevDisplayColumnsMobile;
        this.isMobile = isMobile;
    }

    public getSearchableFields(): string {
        return `Pesquisa pode ser realizada pelos campos ${this.searchableFields.map((field) => field).join(', ')}`;
    }

    public showPagination(): void {
        this.doneAnimation = true;
    }

    public setSort($event): void {
        this.orderBy = $event.active === 'data' ? 'registered_at' : $event.active;
        this.sortedBy = $event.direction || 'desc';
        this.loadData();
    }

    public isExpansionDetailRow(i: number, row: Object): boolean {
        return row.hasOwnProperty('detailRow');
    }

    public loadData(list?: any[], mobile?: boolean): void {
        this.loading = true;
        let options = this.paginate({ ...this.options });

        if (list) {
            this.listMock(list);
        } else {
            this.list(options, mobile);
        }
    }

    public setPagination(length: number, startIndex: number, pageSize: number): void {
        this.length = length;
        this.page = startIndex;
        this.pageSize = pageSize;
    }

    public onPaginateChange($event): void {
        this.initData([], false);

        if (this.pageSize !== $event.pageSize) {
            this.doneAnimation = false;
        }

        this.page = $event.pageIndex + 1;
        this.pageSize = $event.pageSize;
        this.loadData();
    }

    public delete($event: (string | number)): void {
        this.loading = true;
        this.service.delete($event).subscribe(
            () => this.loading = false,
            () => this.loading = false
        );
    }
}
