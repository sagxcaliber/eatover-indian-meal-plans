import { DayPlan } from "@/lib/mealPlanGenerator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Props {
  days: DayPlan[];
}

const MealPlanTable = ({ days }: Props) => (
  <div className="rounded-xl border bg-card shadow-card overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Day</TableHead>
          <TableHead className="font-semibold">Breakfast</TableHead>
          <TableHead className="font-semibold">Lunch</TableHead>
          <TableHead className="font-semibold">Snack</TableHead>
          <TableHead className="font-semibold">Dinner</TableHead>
          <TableHead className="font-semibold text-right">Calories</TableHead>
          <TableHead className="font-semibold text-right">Protein</TableHead>
          <TableHead className="font-semibold text-right">Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {days.map((day) => (
          <TableRow key={day.day}>
            <TableCell className="font-medium text-foreground">{day.day}</TableCell>
            <TableCell className="text-sm">{day.meals.breakfast.name}</TableCell>
            <TableCell className="text-sm">{day.meals.lunch.name}</TableCell>
            <TableCell className="text-sm">{day.meals.snack.name}</TableCell>
            <TableCell className="text-sm">{day.meals.dinner.name}</TableCell>
            <TableCell className="text-right font-medium">{day.totals.calories}</TableCell>
            <TableCell className="text-right font-medium text-primary">{day.totals.protein}g</TableCell>
            <TableCell className="text-right text-muted-foreground">₹{day.cost}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default MealPlanTable;
