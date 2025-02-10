// * Utility-Types-TS-Level-1_6
// - Anwedung von "Exclude"

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

function showColors(color: RealColors) {
  console.log(color);
}

// showColors("BLACK"); //? doesnt work, because not part of the type RealColors

showColors("YELLOW");
