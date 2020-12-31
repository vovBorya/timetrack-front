import {RestProvider} from "./RestProvider";
import {AxiosResponse} from "axios";

export class WorkService {
  worksUrl: string = 'works';
  restProvider: RestProvider = new RestProvider();

  fetchWorks = (): Promise<AxiosResponse<any>> => this.restProvider.getList(this.worksUrl);
  fetchOneWork = (id: number): Promise<AxiosResponse<any>> => this.restProvider.getOne(this.worksUrl, id);
  createWork = (work: IWork): Promise<AxiosResponse<any>> => this.restProvider.create(this.worksUrl, work);
  updateWork = (work: IWork): Promise<AxiosResponse<any>> => this.restProvider.update(this.worksUrl, work);
  deleteWork = (work: IWork): Promise<AxiosResponse<any>> => this.restProvider.delete(this.worksUrl, work);
}

