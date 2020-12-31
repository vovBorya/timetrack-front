import axios from "axios";

export class RestProvider {

  getResource = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any
  ) => {
    return axios({method, url: `api/${url}`, data});
  };

  getAll = async (resourceUrl: string) => await this.getResource('GET', resourceUrl);
  getOne = async (resourceUrl: string, id: number) => await this.getResource('GET', `${resourceUrl}/${id}`);
}
