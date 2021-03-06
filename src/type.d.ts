interface IWork {
  id?: number
  hours: number
  date: Date
  archived?: boolean
  description: string
}

type WorkState = {
  works: IWork[],
  loading: boolean,
  error: string
};

type WorkAction = {
  type: string
  payload?: IWork | any
};

type DispatchType = (args: WorkAction) => WorkAction
