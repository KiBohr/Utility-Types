//* Utility-Types-TS-Level-1_3
// - Anwendung von Pick

interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "meh",
  shortDescription: "this is so annoying",
};

// ohne =, weil interface
interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
  name: "meeeh",
  shortDescription: "Shitty Mc Tiddy",
};
