import { MatPaginator, PageEvent } from '@angular/material';
import { ViewChild, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { FilterService } from 'src/app/services/filter/filter.service';
import { scroll } from 'src/app/utils/scroll';

export class ComponentDataSource extends DataSource<any> {
    private data: any[];
    private isExpandable: boolean;

    constructor(dataList: any[], isExpandable: boolean) {
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
export class ListComponent {

    @ViewChild(MatPaginator) pagination: MatPaginator;

    public service;
    public notify;
    public options;
    public methodLoad = 'getData';
    public safe_pagination;
    public status_form = { loading: false };
    public doneLoad: EventEmitter<any> = new EventEmitter<any>();
    public dataSource: ComponentDataSource;
    public filterService: FilterService;
    public expandedElement: boolean;
    public isMobile: boolean;
    public displayedColumns;

    // Data
    public componentData: any;
    public filtredComponentData: any;

    // Pagination
    public status: string;
    public length: number;
    public pageSize = 5;
    public page = 1;
    public orderBy = 'registered_at';
    public sortedBy = 'desc';
    public pageSizeOptions: number[] = [5, 12, 25, 50, 100, 1000, 10000];
    public searchableFields: string[];
    public pageEvent: PageEvent;
    public doneAnimation = false;
    public idTable: string;

    private changePagination = false;

    constructor() { }

    protected subscribeFilters() {
        this.filterService.filter.subscribe(filters => {
            this.page = 1;
            this.loadData();
        });
    }

    public setIsMobile($event?): void {
        const width = $event ? $event.target.innerWidth : window.innerWidth;
        const isMobile = width <= 991;

        if ((this.isMobile != isMobile)) {
            this.dataSource = new ComponentDataSource(this.componentData, isMobile && this.expandedElement);
        }

        if (isMobile) {
            this.displayedColumns = ['show', 'data', 'status', 'number'];
        } else {
            this.displayedColumns = ['data', 'status', 'media', 'number'];
        }

        this.isMobile = isMobile;
    }

    public getSearchableFields(): string {
        return `Pesquisa pode ser realizada pelos campos ${this.searchableFields.map((field) => field).join(', ')}`;
    }

    public showPagination(): void {
        this.doneAnimation = true;
    }

    public setSort($event): void {
        // {active: "data", direction: "asc"}
        this.orderBy = $event.active === 'data' ? 'registered_at' : $event.active;
        this.sortedBy = $event.direction || 'desc';
        this.loadData();
    }

    public isExpansionDetailRow(i: number, row: Object): boolean {
        return row.hasOwnProperty('detailRow');
    }

    public loadData(list?: any[], mobile?: boolean): void {
        this.status_form.loading = true;
        let options = { ...this.options };

        if (!this.safe_pagination) {
            options = {
                ...this.options,
                orderBy: this.orderBy,
                sortedBy: this.sortedBy,
                page: this.page,
                pageSize: this.pageSize,
            };
        }

        if (list) {
            this.componentData = list;
            this.filtredComponentData = list;
            this.setIsMobile();
            this.status_form.loading = false;
            this.doneLoad.emit(true);

            if (this.idTable) {
                scroll(this.idTable);
            }

            if (this.changePagination) { this.showPagination(); }

        } else {
            this.service[this.methodLoad](options).subscribe(
                (data) => {
                    if (!this.safe_pagination) {
                        const pagination = data.meta.pagination;
                        this.setPagination(pagination['total'], pagination['current_page'], pagination['per_page']);
                    }
                    
                    this.componentData = data.data;
                    this.filtredComponentData = data.data;
                    this.dataSource = new ComponentDataSource(data.data, mobile);
                    this.setIsMobile();
                    this.status_form.loading = false;
                    this.doneLoad.emit(true);
                    
                    if (this.idTable) {
                        scroll(this.idTable);
                    }

                    if (this.changePagination) { this.showPagination(); }
                },
                (err) => {
                    this.status_form.loading = false;
                }
            );
        }
    }

    public setPagination(length: number, startIndex: number, pageSize: number): void {
        this.length = length;
        this.page = startIndex;
        this.pageSize = pageSize;
    }

    public onPaginateChange(event): void {
        if (this.pageSize !== event.pageSize) {
            this.doneAnimation = false;
        }
       
        this.page = event.pageIndex + 1;
        this.pageSize = event.pageSize;
        this.loadData();
    }
}
