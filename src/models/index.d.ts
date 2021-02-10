import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class DVLSApp {
  readonly id: string;
  constructor(init: ModelInit<DVLSApp>);
  static copyOf(source: DVLSApp, mutator: (draft: MutableModel<DVLSApp>) => MutableModel<DVLSApp> | void): DVLSApp;
}