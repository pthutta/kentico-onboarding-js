export interface IAction<TType, TPayload> {
  readonly type: TType;
  readonly payload: TPayload;
}
