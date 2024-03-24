import Counter from "./assets/components/counter";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="w-1/6 flex flex-col gap-2 py-5 px-2 h-screen w-screen items-center justify-center">
      <Counter />
    </div>
  );
};

export default App;
