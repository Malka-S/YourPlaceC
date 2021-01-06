export class Event {
  public EventId: number;
  public EventType: string;
  public EventDes: string;
  public EventDate: Date;
  public EventDueDate: Date;
  public UserId: number;
  public Invitation: string;
  
  constructor(
    code,
    type,
    des,
    date,
    DueDate,
    userId,
    invitation
  ) {
    this.EventId = code;
    this.EventType = type;
    this.EventDes = des;
    this.EventDate = date;
    this.EventDueDate = DueDate;
    this.UserId = userId;
    this.Invitation = invitation;
  }
}
