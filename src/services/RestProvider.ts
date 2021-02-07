import axios from "axios";

export class RestProvider {

  getResource = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any
  ) => {
    return axios({method, url: `${process.env.REACT_APP_API_PATH}/${url}`, data});
  };

  getList = async (resourceUrl: string) => await this.getResource('GET', resourceUrl);
  getOne = async (resourceUrl: string, id: number) => await this.getResource('GET', `${resourceUrl}/${id}`);
  create = async (resourceUrl: string, obj: IWork) => await this.getResource('POST', resourceUrl, obj);
  update = async (resourceUrl: string, obj: IWork) => await this.getResource('PUT', `${resourceUrl}/${obj.id}`, obj);
  delete = async (resourceUrl: string, obj: IWork) => await this.getResource('DELETE', `${resourceUrl}/${obj.id}`);
}
