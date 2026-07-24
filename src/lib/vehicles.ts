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
};

export const CATEGORIES: VehicleCategory[] = [
  "SUVs",
  "Sedans",
  "Hatches",
  "Premium",
  "Utilitários",
];

export const VEHICLES: Vehicle[] = [
  { id: "1", brand: "Jeep", model: "Compass Limited", year: 2023, km: 18500, transmission: "Automático", price: 168900, category: "SUVs" },
  { id: "2", brand: "Hyundai", model: "Creta Ultimate", year: 2022, km: 32000, transmission: "Automático", price: 129900, category: "SUVs" },
  { id: "3", brand: "Toyota", model: "Corolla Altis", year: 2023, km: 12000, transmission: "Automático", price: 154900, category: "Sedans" },
  { id: "4", brand: "Honda", model: "Civic Touring", year: 2022, km: 28900, transmission: "Automático", price: 148500, category: "Sedans" },
  { id: "5", brand: "Volkswagen", model: "Polo Highline", year: 2023, km: 9800, transmission: "Automático", price: 94900, category: "Hatches" },
  { id: "6", brand: "Chevrolet", model: "Onix Premier", year: 2022, km: 21000, transmission: "Automático", price: 82900, category: "Hatches" },
  { id: "7", brand: "BMW", model: "X1 sDrive20i", year: 2023, km: 15400, transmission: "Automático", price: 289900, category: "Premium" },
  { id: "8", brand: "Mercedes-Benz", model: "GLA 200", year: 2022, km: 24700, transmission: "Automático", price: 259900, category: "Premium" },
  { id: "9", brand: "Fiat", model: "Toro Volcano", year: 2023, km: 16200, transmission: "Automático", price: 168500, category: "Utilitários" },
  { id: "10", brand: "Ram", model: "Rampage Rebel", year: 2023, km: 11300, transmission: "Automático", price: 219900, category: "Utilitários" },
  { id: "11", brand: "Toyota", model: "SW4 SRX", year: 2022, km: 35600, transmission: "Automático", price: 349900, category: "SUVs" },
  { id: "12", brand: "Audi", model: "A3 Sedan", year: 2023, km: 8900, transmission: "Automático", price: 219900, category: "Premium" },
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
