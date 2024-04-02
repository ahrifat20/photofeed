import "server-only";

const dictonaries = {
  en: () => import("./dictonaries/en.json").then((module) => module.default),
  bn: () => import("./dictonaries/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictonaries[locale]();
