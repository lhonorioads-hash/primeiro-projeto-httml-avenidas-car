import type { StaticImageData } from "next/image";
import hondaHrv from "@/assets/photos/disponiveis/honda-hrv.jpg";
import audiA3 from "@/assets/photos/disponiveis/audi-a3.jpg";
import chevroletCelta from "@/assets/photos/disponiveis/chevrolet-celta.jpg";
import jeepCompass from "@/assets/photos/disponiveis/jeep-compass.jpg";
import toyotaCorolla from "@/assets/photos/disponiveis/toyota-corolla.jpg";
import fordFocus from "@/assets/photos/disponiveis/ford-focus.jpg";
import fordKa from "@/assets/photos/disponiveis/ford-ka.jpg";
import hondaCivic from "@/assets/photos/disponiveis/honda-civic.jpg";
import vwJetta from "@/assets/photos/disponiveis/vw-jetta.jpg";
import chevroletPrisma from "@/assets/photos/disponiveis/chevrolet-prisma.jpg";
import peugeot207 from "@/assets/photos/disponiveis/peugeot-207.jpg";
import vwVoyage from "@/assets/photos/disponiveis/vw-voyage.jpg";

export type VehicleCategory =
  | "SUVs"
  | "Sedans"
  | "Hatches"
  | "Premium"
  | "Utilitários";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  km: number;
  transmission: "Automático" | "Manual";
  price: number;
  category: VehicleCategory;
  image: StaticImageData;
};

export const CATEGORIES: VehicleCategory[] = [
  "SUVs",
  "Sedans",
  "Hatches",
  "Premium",
  "Utilitários",
];

// Preços, anos e quilometragem são estimativas aproximadas de mercado —
// a confirmar com um consultor antes da negociação.
export const VEHICLES: Vehicle[] = [
  { id: "1", brand: "Honda", model: "HR-V", year: 2023, km: 24000, transmission: "Automático", price: 139900, category: "SUVs", image: hondaHrv },
  { id: "2", brand: "Jeep", model: "Compass", year: 2019, km: 51000, transmission: "Automático", price: 96900, category: "SUVs", image: jeepCompass },
  { id: "3", brand: "Toyota", model: "Corolla", year: 2018, km: 58000, transmission: "Automático", price: 89900, category: "Sedans", image: toyotaCorolla },
  { id: "4", brand: "Honda", model: "Civic", year: 2014, km: 68000, transmission: "Automático", price: 64900, category: "Sedans", image: hondaCivic },
  { id: "5", brand: "Volkswagen", model: "Jetta", year: 2013, km: 74000, transmission: "Automático", price: 59900, category: "Sedans", image: vwJetta },
  { id: "6", brand: "Chevrolet", model: "Prisma", year: 2018, km: 54000, transmission: "Automático", price: 54900, category: "Sedans", image: chevroletPrisma },
  { id: "7", brand: "Volkswagen", model: "Voyage", year: 2015, km: 66000, transmission: "Manual", price: 46900, category: "Sedans", image: vwVoyage },
  { id: "8", brand: "Audi", model: "A3 Sportback", year: 2015, km: 68000, transmission: "Automático", price: 79900, category: "Premium", image: audiA3 },
  { id: "9", brand: "Ford", model: "Focus", year: 2013, km: 71000, transmission: "Automático", price: 42900, category: "Hatches", image: fordFocus },
  { id: "10", brand: "Ford", model: "Ka", year: 2016, km: 61000, transmission: "Manual", price: 44900, category: "Hatches", image: fordKa },
  { id: "11", brand: "Peugeot", model: "207", year: 2012, km: 82000, transmission: "Manual", price: 26900, category: "Hatches", image: peugeot207 },
  { id: "12", brand: "Chevrolet", model: "Celta", year: 2013, km: 89000, transmission: "Manual", price: 27900, category: "Hatches", image: chevroletCelta },
];

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function formatKm(value: number) {
  return `${value.toLocaleString("pt-BR")} km`;
}
