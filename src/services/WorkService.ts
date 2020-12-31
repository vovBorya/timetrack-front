import {RestProvider} from "./RestProvider";
import {AxiosResponse} from "axios";

export class WorkService {
  worksUrl: string = 'works';
  restProvider: RestProvider = new RestProvider();

  fetchWorks = (): Promise<AxiosResponse<any>> => this.restProvider.getAll(this.worksUrl);
}

