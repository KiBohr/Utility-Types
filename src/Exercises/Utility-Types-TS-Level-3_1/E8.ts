// * Utility-Types-TS-Level-3_1
// - Anwendung Partial
//  Lege eine neue Datei smoothie.ts an
//  Erstelle dort ein Interface ISmoothie mit folgenden Eigenschaften: name, ingredients, size (Enum: small, medium…) und price
//  Überlege dir sinnvolle Datentypen für die Eigenschaften
//  Erstelle eine Funktion customizeSmoothie, die ein Smoothie-Objekt (basicSmoothie) und ein Partial<ISmoothie>-Objekt (customizedSmoothie) als Parameter hat
//  Die Funktion soll die Eigenschaften aus den beiden Objekten kombinieren
//  Wenn eine Eigenschaft im customizedSmoothie gesetzt ist, soll sie die Eigenschaft im basicSmoothie überschreiben
//  Rückgabewert der Funktion ist ISmoothie

interface ISmoothie {
  name: string;
  ingredients: string[];
  size: "Small" | "Medium" | "Large";
  price: number;
}

function customizeSmoothie(
  basicSmoothie: ISmoothie,
  customizedSmoothie: Partial<ISmoothie>
): ISmoothie {
  return { ...basicSmoothie, ...customizeSmoothie };
}

const smoothie1: ISmoothie = {
  name: "legga Smoothie",
  ingredients: ["melon", "honey", "allmondMilk"],
  size: "Large",
  price: 8,
};

console.log(
  customizeSmoothie(smoothie1, { name: "better name", size: "Small" })
);
