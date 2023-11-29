function useDebounce<T>(value: globalThis.ComputedRef<T>) {
  const debounceValue = useState<T>();

  watch(value, async () => {
    await delay(1.5 * 1000);

    debounceValue.value = value.value;
  });

  return debounceValue;
}

export default useDebounce;
