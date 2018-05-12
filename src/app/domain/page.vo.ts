export class PageVO {

  constructor(public pageIndex: number, public pageSize: number, public totalCount: number,
              public pageOptions?: number[]) {
    if (!pageOptions) {
      pageOptions = [5, 15, 30, 60, 120];
    }
  }
}
