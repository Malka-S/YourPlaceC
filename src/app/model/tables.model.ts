export class Table {
  public table_id: number;
  public category_id: number;
  public event_id: number;
  public table_title: string;
  public amount_of_places: number;
  constructor(
    id,
    category,
    event_id,
    title,
    amont_of_place,
    GuestsCode
  ) {
    this.table_id = id;
    this.category_id = category;
    this.event_id = event_id;
    this.table_title = title;
    this.amount_of_places = amont_of_place;
  }
}

