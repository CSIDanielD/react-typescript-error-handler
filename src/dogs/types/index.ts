// https://dog.ceo/dog-api/documentation/
export interface DogAPIResponse {
  message: {
    [breed: string]: string;
  };
}
