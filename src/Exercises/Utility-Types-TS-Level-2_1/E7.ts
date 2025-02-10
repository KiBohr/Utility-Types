// * Utility-Types-TS-Level-2_1
// - Anwendung von Partial

interface ITea {
  name: string;
  type: string;
  temperature: string;
  brewingTime: number;
}

interface PartialTea extends Partial<ITea> {}

const leggaTea: PartialTea = {
  name: "legga",
  type: "sehrLegga",
  temperature: "hot",
  brewingTime: 6,
};

function prepareTea(tea: PartialTea) {
  console.log(
    `Preparing "${tea.name}" - will be ready in ${tea.brewingTime} minutes.`
  );
}
prepareTea(leggaTea);
