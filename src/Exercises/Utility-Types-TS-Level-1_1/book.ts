//*Utility-Types-TS-Level-1_1
console.warn("Utility-Types-TS-Level-1_1");
// -Lernziel: Anwendung von partial
// Erstelle dort ein Interface IBook mit folgenden Eigenschaften
//     author: string
//     name: string
//     publishingYear: string
//     shortDescription?: string
//     numberOfPages: number

export interface IBook {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}
