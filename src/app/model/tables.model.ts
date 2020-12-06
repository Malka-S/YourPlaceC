export class Table {
    public TableId: number;
    public CategoryId: number;
    public EventId: number;
    public TableTitle: string;
    public AmountOfPlaces: number;
    constructor(
     id,
     category,
     event_id,
     title,
     amont_of_place
    ) {
     this.TableId=id;
     this.CategoryId=category;
     this.EventId=event_id;
     this.TableTitle=title;
     this.AmountOfPlaces=amont_of_place;
    }
  }