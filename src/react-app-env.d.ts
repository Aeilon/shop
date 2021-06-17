/// <reference types="react-scripts" />
interface Category {
  category: string;
}
interface ISelector {
  firebase: {
    auth: {
      uid: string;
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
      favItems: string[];
    };
  };
  firestore: {
    ordered: {
      categories: Category[];
      items: Item[];
    };
  };
  view: string;
}

interface Item {
  name: string;
  price: number;
  category: string;
  isNew: boolean;
  id: string;
  images: string[];
}
