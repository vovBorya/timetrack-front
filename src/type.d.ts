interface IWork {
  id?: number
  hours: number
  date: Date
  archived: boolean
  description: string
}

type WorkState = {
  works: IWork[]
};

type WorkAction = {
  type: string
  payload?: IWork | any
};

type DispatchType = (args: WorkAction) => WorkAction
