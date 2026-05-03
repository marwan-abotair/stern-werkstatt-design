export interface PriceRow {
  label: string;
  price: string;
}

export function PriceTable({ rows, caption }: { rows: PriceRow[]; caption?: string }) {
  return (
    <div className="my-6 overflow-x-auto">
      {caption && (
        <h2 className="text-xl font-bold mb-3">{caption}</h2>
      )}
      <table className="price-table">
        <thead>
          <tr>
            <th>Leistung</th>
            <th>Preis ab</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td>{r.label}</td>
              <td>{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-sm text-muted-foreground">
        Alle Preise sind unverbindliche Richtwerte inkl. MwSt. Genauer Preis nach Sichtprüfung.
      </p>
    </div>
  );
}

// TODO: Add real prices – Werte aktuell Platzhalter
export const COMMON_PRICES: PriceRow[] = [
  { label: "Ölwechsel inkl. Motoröl", price: "ab XX €" },
  { label: "Reifenwechsel (4 Räder)", price: "ab XX €" },
  { label: "Klimaanlagen-Service", price: "ab XX €" },
  { label: "Bremsbeläge vorne", price: "ab XX €" },
  { label: "HU/AU Durchführung", price: "auf Anfrage" },
];
