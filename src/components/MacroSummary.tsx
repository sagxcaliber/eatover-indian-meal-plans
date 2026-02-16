import { MacroTargets } from "@/lib/nutrition";

interface Props {
  macros: MacroTargets;
  label?: string;
}

const MacroSummary = ({ macros, label }: Props) => {
  const items = [
    { name: "Calories", value: macros.calories, unit: "kcal", color: "bg-primary" },
    { name: "Protein", value: macros.protein, unit: "g", color: "bg-accent" },
    { name: "Carbs", value: macros.carbs, unit: "g", color: "bg-secondary text-secondary-foreground" },
    { name: "Fats", value: macros.fats, unit: "g", color: "bg-muted text-muted-foreground" },
  ];

  return (
    <div>
      {label && <h3 className="text-sm font-medium text-muted-foreground mb-3">{label}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.name} className="rounded-xl border bg-card p-4 shadow-card text-center">
            <p className="text-2xl font-bold text-card-foreground">
              {item.value}
              <span className="text-xs font-normal text-muted-foreground ml-1">{item.unit}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacroSummary;
