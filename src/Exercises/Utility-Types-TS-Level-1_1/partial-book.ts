// Lege eine neue Datei an partial-book.ts an
// Erstelle dort einen neuen Type PartialBook basierend auf IBook

import { IBook } from "./book";

type PartialBook = {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
};
// Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name

// const partialBook: PartialBook = {
//   author: "Dingsbums",
//   name: "Dingsa",
// };

// Lege dann ein neues Interface IPartialBook basierend auf IBook an
type TPartialBook = Partial<IBook>;

// Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name
const partialBook2: TPartialBook = {
  name: "Bums",
};

console.log(partialBook2);
