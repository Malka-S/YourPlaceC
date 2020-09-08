export class Event {
  public EventCode: number;
  public EventType: string;
  public EventName: string;
  public EventDate: Date;
  public EventDueDate: Date;
  public ManagerCode: number;
  public SeatingArrangementCode: number;
  public GuestCode: number;
  public Invitation: string;
  constructor(
    code,
    type,
    name,
    date,
    DueDate,
    managerCode,
    seatingArrangementCode,
    guestCode,
    invitation
  ) {
    this.EventCode = code;
    this.EventType = type;
    this.EventName = name;
    this.EventDate = date;
    this.EventDueDate = DueDate;
    this.ManagerCode = managerCode;
    this.SeatingArrangementCode = seatingArrangementCode;
    this.GuestCode = guestCode;
    this.Invitation = invitation;
  }
}
