import { useState, useEffect } from 'react';
import { Slider } from '../ui/slider';
import { Input } from '../ui/input';

export const RangeSlider = () => {
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(1000);
  useEffect(() => {
    setMinBudget(Math.max(0, minBudget));
  }, [minBudget]);
  return (
    <div className="ne-space-y-4 ne-py-2">
      <div className="ne-px-1">
        <Slider
          min={0}
          max={1000}
          step={1}
          value={[minBudget, maxBudget]}
          onValueChange={([min, max]) => {
            setMinBudget(min);
            setMaxBudget(max);
          }}
          className="ne-w-full"
          thumbClassName="ne-bg-white ne-border-2 ne-border-primary ne-rounded-full focus:ne-outline-none focus:ne-ring-2 focus:ne-ring-primary ne-bg-primary ne-w-4 ne-h-4"
          trackClassName="ne-bg-muted ne-h-2 ne-ounded-full"
          snapToPoints={false}
        />
      </div>
      <div className="ne-flex ne-items-center ne-justify-between">
        <div className="ne-flex ne-items-center ne-gap-1">
          <span className="font-medium">৳</span>
          <Input type="number" value={minBudget} onChange={e => setMinBudget(Math.max(0, Number(e.target.value)))} className="ne-w-16 ne-p-1 ne-h-auto ne-bg-primary/10" />
        </div>
        <div className="ne-flex ne-items-center ne-gap-1">
          <span className="font-medium">৳</span>
          <Input type="number" value={maxBudget} onChange={e => setMaxBudget(Number(e.target.value))} className="ne-w-16 ne-p-1 ne-h-auto ne-bg-primary/10" />
        </div>
      </div>
    </div>
  );
};
