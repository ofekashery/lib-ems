export default class TOAEvent implements IPostableObject {
  private _eventKey: string;
  private _seasonKey: string;
  private _regionKey: string;
  private _leagueKey: string;
  private _eventCode: string;
  private _eventTypeKey: string;
  private _eventRegionNumber: number;
  private _divisionKey: string;
  private _divisionName: string;
  private _eventName: string;
  private _startDate: string;
  private _endDate: string;
  private _weekKey: string;
  private _city: string;
  private _stateProv: string;
  private _country: string;
  private _venue: string;
  private _website: string;
  private _timeZone: string;
  private _isActive: boolean;
  private _isPublic: boolean;
  private _activeTournamentLevel: string;
  private _allianceCount: number;
  private _fieldCount: number;
  private _advanceSpots: number;
  private _advanceEvent: string;

  constructor() {
    this._eventKey = '';
    this._seasonKey = '';
    this._regionKey = '';
    this._leagueKey = '';
    this._eventCode = '';
    this._eventTypeKey = '';
    this._eventRegionNumber = 0;
    this._divisionKey = '';
    this._divisionName = '';
    this._eventName = '';
    this._startDate = '';
    this._endDate = '';
    this._weekKey = '';
    this._city = '';
    this._stateProv = '';
    this._country = '';
    this._venue = '';
    this._website = '';
    this._timeZone = '';
    this._isActive = false;
    this._isPublic = false;
    this._activeTournamentLevel = '';
    this._allianceCount = 0;
    this._fieldCount = 0;
    this._advanceSpots = 0;
    this._advanceEvent = '';
  }

  public toJSON(): object {
    return {
      event_key: this.eventKey,
      season_key: this.seasonKey,
      region_key: this.regionKey,
      league_key: this.leagueKey,
      event_code: this.eventCode,
      event_region_number: this.eventRegionNumber,
      event_type_key: this.eventTypeKey,
      division_key: this.divisionKey,
      division_name: this.divisionName,
      event_name: this.eventName,
      start_date: this.startDate,
      end_date: this.endDate,
      week_key: this.weekKey,
      city: this.city,
      state_prov: this.stateProv,
      country: this.country,
      venue: this.venue,
      website: this.website,
      time_zone: this.timeZone,
      is_active: this.isActive,
      is_public: this.isPublic,
      active_tournament_level: this.activeTournamentLevel,
      alliance_count: this.allianceCount,
      field_count: this.fieldCount,
      advance_spots: this.advanceSpots,
      advance_event: this.advanceEvent
    };
  }

  public fromJSON(json: any): TOAEvent {
    const event: TOAEvent = new TOAEvent();
    event.eventKey = json.event_key;
    event.seasonKey = json.season_key;
    event.regionKey = json.region_key;
    event.leagueKey = json.league_key;
    event.eventCode = json.event_code;
    event.eventRegionNumber = parseInt(json.event_region_number, 10);
    event.divisionKey = json.division_key;
    event.eventTypeKey = json.event_type_key;
    event.eventName = json.event_name;
    event.divisionName = json.division_name;
    event.startDate = json.start_date;
    event.endDate = json.end_date;
    event.weekKey = json.week_key;
    event.city = json.city;
    event.stateProv = json.state_prov;
    event.country = json.country;
    event.venue = json.venue;
    event.website = json.website;
    event.timeZone = json.time_zone;
    event.isActive = json.is_active;
    event.isPublic = json.is_public;
    event.activeTournamentLevel = json.active_tournament_level;
    event.allianceCount = parseInt(json.alliance_count, 10);
    event.fieldCount = parseInt(json.field_count, 10);
    event.advanceSpots = parseInt(json.advance_spots, 10);
    event.advanceEvent = json.advance_event;
    return event;
  }

  get eventKey(): string {
    return this._eventKey;
  }

  set eventKey(value: string) {
    this._eventKey = value;
  }

  get seasonKey(): string {
    return this._seasonKey;
  }

  set seasonKey(value: string) {
    this._seasonKey = value;
  }

  get regionKey(): string {
    return this._regionKey;
  }

  set regionKey(value: string) {
    this._regionKey = value;
  }

  get leagueKey(): string {
    return this._leagueKey;
  }

  set leagueKey(value: string) {
    this._leagueKey = value;
  }

  get eventCode(): string {
    return this._eventCode;
  }

  set eventCode(value: string) {
    this._eventCode = value;
  }

  get eventTypeKey(): string {
    return this._eventTypeKey;
  }

  set eventTypeKey(value: string) {
    this._eventTypeKey = value;
  }

  get eventRegionNumber(): number {
    return this._eventRegionNumber;
  }

  set eventRegionNumber(value: number) {
    this._eventRegionNumber = value;
  }

  get divisionKey(): string {
    return this._divisionKey;
  }

  set divisionKey(value: string) {
    this._divisionKey = value;
  }

  get divisionName(): string {
    return this._divisionName;
  }

  set divisionName(value: string) {
    this._divisionName = value;
  }

  get eventName(): string {
    return this._eventName;
  }

  set eventName(value: string) {
    this._eventName = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get weekKey(): string {
    return this._weekKey;
  }

  set weekKey(value: string) {
    this._weekKey = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get stateProv(): string {
    return this._stateProv;
  }

  set stateProv(value: string) {
    this._stateProv = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get venue(): string {
    return this._venue;
  }

  set venue(value: string) {
    this._venue = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get timeZone(): string {
    return this._timeZone;
  }

  set timeZone(value: string) {
    this._timeZone = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get isPublic(): boolean {
    return this._isPublic;
  }

  set isPublic(value: boolean) {
    this._isPublic = value;
  }

  get activeTournamentLevel(): string {
    return this._activeTournamentLevel;
  }

  set activeTournamentLevel(value: string) {
    this._activeTournamentLevel = value;
  }

  get allianceCount(): number {
    return this._allianceCount;
  }

  set allianceCount(value: number) {
    this._allianceCount = value;
  }

  get fieldCount(): number {
    return this._fieldCount;
  }

  set fieldCount(value: number) {
    this._fieldCount = value;
  }

  get advanceSpots(): number {
    return this._advanceSpots;
  }

  set advanceSpots(value: number) {
    this._advanceSpots = value;
  }

  get advanceEvent(): string {
    return this._advanceEvent;
  }

  set advanceEvent(value: string) {
    this._advanceEvent = value;
  }

}