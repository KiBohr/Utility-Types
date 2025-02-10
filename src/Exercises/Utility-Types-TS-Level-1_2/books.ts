interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

// to make every key optional
type PartialBook = Partial<IBook>;

//declare a new variable with only 2 keys, ok,because we said every key is optional
const partialBookr: PartialBook = {
  author: "blub",
  name: "blab",
};
// how to make the same but with interface instead of type
interface IPartialBook extends Partial<IBook> {}

//declare a new variable with only one key, which works, because Partial makes every key optional
const partialBook2: IPartialBook = {
  name: "blib",
};

// * Utility-Types-TS-Level-1_2
//- Lernziel: Anwendung von Omit

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook = {
  author: "blib",
  name: "blub",
  numberOfPages: 20,
};

interface IBasicBook
  extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook = {
  author: "blib",
  name: "blub",
  numberOfPages: 20,
};

// * Utility-Types-TS-Level-1_3
