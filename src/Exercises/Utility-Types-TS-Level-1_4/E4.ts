// * Utility-Types-TS-Level-1_4
// - Anwendung von Requiered

interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}
// ein neuer Type, auf der Grundlage von IBook mit allen keys notwendig, weil "Required"
type RequieredBook = Required<IBook>;

const requieredBook = {
  author: "meh",
  name: "muh",
  publishingYear: "mah",
  shortDescription: "mih",
  numberOfPages: 3,
};

// dasselbe nur mit Interface und der zugehörigen Syntax
interface IRequiredBook extends Required<IBook> {}

const requieredBook2 = {
  author: "meh",
  name: "muh",
  publishingYear: "mah",
  shortDescription: "mih",
  numberOfPages: 4,
};
