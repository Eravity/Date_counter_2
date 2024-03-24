import { useState } from "react";

const Counter: React.FC = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  // today date
  const now: Date = new Date();

  // editing date
  now.setDate(now.getDate() + count);

  // formatting date
  const language: string = "ro-MD";

  interface OptionTypes {
    day?: "2-digit";
    month: "long";
    year: "numeric";
  }

  const options: OptionTypes = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  // formatted date
  const formattedDate: string = new Intl.DateTimeFormat(
    language,
    options
  ).format(now);

  // prettier-ignore
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-neutral-300 text-2xl text-center mb-2 font-semibold">Step: {step}</h1>
      <input type="range" min='1' max='10' defaultValue={step} className="bg-neutral-700 w-64 mb-3" 
      onChange={(e : React.ChangeEvent<HTMLInputElement>) => setStep(parseInt(e.target.value))}/>

      <div className="flex mb-3">
        <button className="flex justify-center items-center w-8 h-8 rounded-l-md text-neutral-400 font-bold bg-neutral-700" 
        onClick={() => setCount(count - step)}>-</button>
        
        <input className="bg-neutral-800 font-semibold text-neutral-400 text-center outline-none" type="text" value={count.toString()} 
        onChange={(e : React.ChangeEvent<HTMLInputElement>) => {
          const value = parseInt(e.target.value);
          !isNaN(value) && setCount(value); }}/>

        <button className="flex justify-center items-center w-8 h-8 rounded-r-md text-neutral-400 font-bold bg-neutral-700" 
        onClick={() => setCount(count + step)}>+</button>
      </div>

      <div className="text-neutral-300 flex gap-2 text-2xl text-center">
        <h1>
          {count > 0 
            ? `Peste ${count} ${count === 1 ? 'zi' : 'zile'} va fi data de` 
            : count === 0 
              ? `Astăzi este data de` 
              : `${Math.abs(count)} zile în urmă a fost data de`}
        </h1>
          <h1 className="text-red-700">{formattedDate}</h1>
      </div>

    </div>
  );
};

export default Counter;
