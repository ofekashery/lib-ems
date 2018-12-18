import {MatchMode} from "./MatchMode";
import * as events from "events";
import MatchConfiguration from "../models/ems/MatchConfiguration";

export default class MatchTimer extends events.EventEmitter {
  private _matchConfig: MatchConfiguration;

  private _mode: MatchMode;
  private _timerID: any;
  private _timeLeft: number;
  private _modeTimeLeft: number;

  constructor() {
    super();
    this._matchConfig = new MatchConfiguration();

    this._mode = MatchMode.RESET;
    this._timerID = null;
    this._timeLeft = this._matchConfig.totalTime;
    this._modeTimeLeft = this._matchConfig.delayTime;
  }

  public start() {
    if (!this.inProgress()) {
      if (this.matchConfig.delayTime > 0) {
        this._mode = MatchMode.PRESTART;
        this._modeTimeLeft = this.matchConfig.delayTime;
      } else if (this.matchConfig.autoTime > 0) {
        this._mode = MatchMode.AUTONOMOUS;
        this._modeTimeLeft = this.matchConfig.autoTime;
      } else if (this.matchConfig.transitionTime > 0) {
        this._mode = MatchMode.TRANSITION;
        this._modeTimeLeft = this.matchConfig.transitionTime;
      } else {
        this._mode = MatchMode.TELEOPERATED;
        this._modeTimeLeft = this.matchConfig.teleTime;
      }
      this._timeLeft = this.matchConfig.totalTime;
      this.emit("match-start", this._timeLeft);
      this._timerID = global.setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  public stop() {
    if (this.inProgress()) {
      global.clearInterval(this._timerID);
      this._timerID = null;
      this._mode = MatchMode.ENDED;
      this._timeLeft = 0;
      this.emit("match-end");
    }
  }

  public abort() {
    if (this.inProgress()) {
      global.clearInterval(this._timerID);
      this._timerID = null;
      this._mode = MatchMode.ABORTED;
      this._timeLeft = 0;
      this.emit("match-abort");
    }
  }

  public inProgress() {
    return this._timerID !== null;
  }

  private tick() {
    if (this._timeLeft === 0) {
      this.stop();
    }

    this._modeTimeLeft--;
    this._timeLeft--;

    if (this._modeTimeLeft === 0) {
      switch (this._mode) {
        case MatchMode.PRESTART:
          if (this.matchConfig.autoTime > 0) {
            this._mode = MatchMode.AUTONOMOUS;
            this._modeTimeLeft = this.matchConfig.autoTime;
            this.emit("match-auto");
          } else {
            this._mode = MatchMode.TELEOPERATED;
            this._modeTimeLeft = this.matchConfig.teleTime;
            this.emit("match-tele");
          }
          break;
        case MatchMode.AUTONOMOUS:
          if (this.matchConfig.transitionTime > 0) {
            this._mode = MatchMode.TRANSITION;
            this._modeTimeLeft = this.matchConfig.transitionTime;
            this.emit("match-transition");
          } else if (this.matchConfig.teleTime > 0) {
            this._mode = MatchMode.TELEOPERATED;
            this._modeTimeLeft = this.matchConfig.teleTime;
            this.emit("match-tele");
          } else {
            this.stop();
          }
          break;
        case MatchMode.TRANSITION:
          if (this.matchConfig.teleTime > 0) {
            this._mode = MatchMode.TELEOPERATED;
            this._modeTimeLeft = this.matchConfig.teleTime;
            this.emit("match-tele");
          } else {
            this.stop();
          }
      }
    } else {
      if (this.matchConfig.endTime > 0 && this._timeLeft === this.matchConfig.endTime) {
        this._mode = MatchMode.ENDGAME;
        this.emit("match-endgame");
      }
    }
  }

  get matchConfig(): MatchConfiguration {
    return this._matchConfig;
  }

  set matchConfig(value: MatchConfiguration) {
    this._matchConfig = value;
  }

  get timeLeft(): number {
    return this._timeLeft;
  }

  set timeLeft(value: number) {
    this._timeLeft = value;
  }

  get modeTimeLeft(): number {
    return this._modeTimeLeft;
  }

  set modeTimeLeft(value: number) {
    this._modeTimeLeft = value;
  }

  get mode(): MatchMode {
    return this._mode;
  }

  set mode(value: MatchMode) {
    this._mode = value;
  }
}
