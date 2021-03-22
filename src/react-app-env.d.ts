/// <reference types="react-scripts" />
interface ISelector {
  firebase: {
    auth: {
      isLoaded: boolean;
      isEmpty: boolean;
    };
    profile: {
      city: string;
      country: string;
      email: string;
      gender: string;
      lastName: string;
      name: string;
      isLoaded: boolean;
      isEmpty: boolean;
    };
  };
}
