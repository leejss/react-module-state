import { createStore, useStore } from "../lib/textStore";

const textStore = createStore<{
  text: string;
}>({
  text: "",
});

const TextInput = () => {
  const [store, setStore] = useStore(textStore);

  return (
    <div>
      <input
        className="text-3xl"
        type="text"
        value={store.text}
        onChange={(e) => {
          setStore({
            text: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default TextInput;
