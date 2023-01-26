export interface IDriver {
    driverId: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
  }

  export interface IRaceResultConstructor {
    constructorId: number,
    name: string,
    nationality: string,
    url: string
  }

  export interface IRaceResult {
    Constructor: IRaceResultConstructor
    Driver: IDriver,
    grid: string, 
    laps: string, 
    number: string, 
    points: string, 
    position: string, 
    positionText:string, 
    status: string
  }

  export interface ICircuitLocation {
    country: string, 
    lat: string, 
    locality: string, 
    long: string
  }

  export interface IRace {
    Circuit: {
      Location: ICircuitLocation, 
      circuitId: string, 
      circuitName: string, 
      url: string
    },
    Results: IRaceResult[],
    date: string,
    raceName: string,
    round: string,
    season: string,
    url: string
  }
  
  export interface IDiversData {
    MRData: {
      DriverTable: {
        Drivers: IDriver[]
      }, 
      isLoading: boolean, 
      isError: boolean, 
      total: number
    }
  }

  export interface IDiversResponse {
    data: IDiversData
  }