// *Utility-Types-TS-Level-1_5
// - Anwendung von Readonly

interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

type ReadOnlyBook = Readonly<IBook>;

let readonlyBook: ReadOnlyBook = {
  author: "meh",
  name: "muh",
  publishingYear: "mah",
  shortDescription: "mih",
  numberOfPages: 3,
};

//- does`nt work, weil readonly, shocker
// readonlyBook.author = "mih"

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
  author: "meh",
  name: "muh",
  publishingYear: "mah",
  shortDescription: "mih",
  numberOfPages: 3,
};
//- does`nt work, weil readonly, shocker again
// readonlyBook2.author = "muh";
