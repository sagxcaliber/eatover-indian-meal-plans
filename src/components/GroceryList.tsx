import { ShoppingCart } from "lucide-react";

interface Props {
  groceryList: Record<string, number>;
}

const GroceryList = ({ groceryList }: Props) => {
  const sorted = Object.entries(groceryList).sort((a, b) => b[1] - a[1]);

  return (
    <div className="rounded-xl border bg-card p-6 shadow-card">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-card-foreground">Weekly Grocery List</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {sorted.map(([item, count]) => (
          <div key={item} className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm">
            <span className="capitalize text-foreground">{item}</span>
            <span className="text-xs text-muted-foreground">×{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
