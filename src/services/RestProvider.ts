import axios from "axios";

export class RestProvider {

  getResource = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any
  ) => {
    return axios({method, url: `api/${url}`, data});
  };

  getList = async (resourceUrl: string) => await this.getResource('GET', resourceUrl);
  getOne = async (resourceUrl: string, id: number) => await this.getResource('GET', `${resourceUrl}/${id}`);
  create = async (resourceUrl: string, obj: any) => await this.getResource('POST', resourceUrl, obj);
  update = async (resourceUrl: string, obj: any) => await this.getResource('PUT', `${resourceUrl}/${obj.id}`, obj);
  delete = async (resourceUrl: string, obj: any) => await this.getResource('DELETE', `${resourceUrl}/${obj.id}`);
}
