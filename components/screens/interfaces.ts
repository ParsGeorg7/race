export interface IDriver {
    driverId: string
    url: string
    givenName: string
    familyName: string
    dateOfBirth: string
    nationality: string
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